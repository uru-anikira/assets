/* =====================================================
   PLANT GRID — FULL RENDERER (NO STYLES)
   - Matches your Plant controls HTML:
     #skillFilterPlantGrid, #skillFilterPlantValue
     #showHelpfulPlants, #showHarmfulPlants
     #plantTreatsSelect, #plantSideEffectsSelect
     #plantSearch
   - Search is DISPLAY NAME ONLY (not scientific)
   - Seasons includes dynamic In/Out-of-Season indicator
   - Conditional printing for all fields
   ===================================================== */

/* ---------------------
   BASIC HELPERS
--------------------- */
function AnkP_arr(val){
  if (Array.isArray(val)) return val.filter(v => v !== null && v !== undefined && String(v).trim() !== "");
  if (val === null || val === undefined) return [];
  const s = String(val).trim();
  return s ? [s] : [];
}
function AnkP_join(val, sep=", "){ return AnkP_arr(val).join(sep); }
function AnkP_has(val){ return AnkP_arr(val).length > 0; }

function AnkP_asArray(x){
  if (Array.isArray(x)) return x;
  if (x && typeof x === "object") return Object.values(x);
  return [];
}

function AnkP_minSkill(p){
  const a = AnkP_arr(p.skill);
  return a.length ? Math.min(...a.map(Number)) : Infinity;
}

/* ---------------------
   SEASON HELPERS
--------------------- */
function AnkP_getCurrentSeason(){
  const month = new Date().getMonth(); // 0–11
  if (month >= 2 && month <= 4) return "Spring";
  if (month >= 5 && month <= 7) return "Summer";
  if (month >= 8 && month <= 10) return "Autumn";
  return "Winter";
}
function AnkP_isInSeason(p){
  const seasons = AnkP_arr(p.seasons);
  if (!seasons.length) return false;
  const current = AnkP_getCurrentSeason();
  // Your data style: ["Spring, Summer"] etc.
  return seasons.some(s => String(s).includes(current));
}
function AnkP_formatSeasons(p){
  const seasons = AnkP_join(p.seasons);
  if (!seasons) return "";
  const inSeason = AnkP_isInSeason(p);
  const badge = inSeason
    ? `<span class="season-indicator in-season">In Season</span>`
    : `<span class="season-indicator out-season">Out of Season</span>`;
  return `${seasons} ${badge}`;
}

/* ---------------------
   LOCATION FILTER (AUTHORITATIVE)
--------------------- */
function AnkP_passesLocationFilter(p, validLocations, includeAllAreas){
  const foundIn = AnkP_arr(p.foundIn);
  const hasSpecific = foundIn.length > 0;

  if (!validLocations || validLocations.length === 0){
    return !!includeAllAreas && !hasSpecific;
  }
  if (!hasSpecific){
    return !!includeAllAreas;
  }
  return foundIn.some(loc => validLocations.includes(loc));
}

/* ---------------------
   FOUND IN RESOLUTION (DISPLAY ONLY)
--------------------- */
function AnkP_resolveFoundIn(p, { parentBoardMapping = [], useParentBoard = true, validLocations = [], includeAllAreas = true }){
  const foundIn = AnkP_arr(p.foundIn);

  if (foundIn.length === 0) return includeAllAreas ? ["All Areas"] : [];

  if (!useParentBoard){
    return foundIn.filter(loc => validLocations.length === 0 || validLocations.includes(loc));
  }

  const parents = new Set();
  foundIn.forEach(loc => {
    const parent = parentBoardMapping.find(m => Array.isArray(m.subregions) && m.subregions.includes(loc));
    if (parent) parents.add(parent.parentName);
  });
  return parents.size ? Array.from(parents) : foundIn;
}

/* ---------------------
   HELPFUL / HARMFUL
--------------------- */
function AnkP_isHelpful(p){
  return AnkP_has(p.treats) || AnkP_has(p.beneficial) || AnkP_has(p.medicinal);
}
function AnkP_isHarmful(p){
  return AnkP_has(p.poisonous) || AnkP_has(p.toxic) || AnkP_has(p.complications);
}

/* ---------------------
   LI HELPERS (conditional)
--------------------- */
function AnkP_li(label, value){
  const v = String(value || "").trim();
  return v ? `<li><span class="specdescp">${label}:</span> ${v}</li>` : "";
}
function AnkP_liArr(label, value){
  const v = AnkP_join(value);
  return v ? `<li><span class="specdescp">${label}:</span> ${v}</li>` : "";
}

/* ---------------------
   DROPDOWN OPTION BUILDERS
--------------------- */
function AnkP_collectDropdowns(plantsList){
  const list = AnkP_asArray(plantsList);
  const treats = new Set();
  const sidefx = new Set(); // complications

  list.forEach(p => {
    AnkP_arr(p.treats).forEach(t => treats.add(t));
    AnkP_arr(p.complications).forEach(c => sidefx.add(c));
  });

  return {
    treats: Array.from(treats),
    sideEffects: Array.from(sidefx)
  };
}
function AnkP_populateSelect(selectEl, values){
  if (!selectEl) return;
  // keep the existing <option value="">All</option>, remove everything else
  Array.from(selectEl.querySelectorAll('option')).forEach(o => { if (o.value !== "") o.remove(); });
  values
    .filter(Boolean)
    .map(v => String(v).trim())
    .filter(v => v)
    .sort((a,b)=>a.localeCompare(b))
    .forEach(v => {
      const opt = document.createElement("option");
      opt.value = v;
      opt.textContent = v;
      selectEl.appendChild(opt);
    });
}

/* =====================================================
   MAIN RENDERER
===================================================== */

function renderSpeciesPlantGrid({
  containerId,
  containerEl,

  // controls
  skillSlider,
  helpfulCheckbox,
  harmfulCheckbox,
  treatsSelect,
  sideEffectsSelect,
  searchInput,

  // configs
  validLocations = [],
  includeAllAreas = true,
  showFoundIn = true,

  parentBoardMapping = [],
  useParentBoard = true,

  plantsList
}){
  const container =
    containerEl ||
    (containerId ? document.getElementById(containerId) : null);

  if (!container) return;
  container.innerHTML = "";

  const list = AnkP_asArray(plantsList);
  if (!list.length) return;

  const skillMin = skillSlider ? parseInt(skillSlider.value, 10) : 0;

  const helpfulOn = !!(helpfulCheckbox && helpfulCheckbox.checked);
  const harmfulOn = !!(harmfulCheckbox && harmfulCheckbox.checked);

  const treatPick = treatsSelect ? String(treatsSelect.value || "").trim() : "";
  const sidePick  = sideEffectsSelect ? String(sideEffectsSelect.value || "").trim() : "";

  // SEARCH: DISPLAY NAME ONLY (per your request)
  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

  list
    .filter(p => {
      if (!AnkP_passesLocationFilter(p, validLocations, includeAllAreas)) return false;
      if (skillSlider && skillMin < AnkP_minSkill(p)) return false;

      if (helpfulOn || harmfulOn){
        const okHelpful = helpfulOn && AnkP_isHelpful(p);
        const okHarmful = harmfulOn && AnkP_isHarmful(p);
        if (!(okHelpful || okHarmful)) return false;
      }

      if (treatPick && !AnkP_arr(p.treats).includes(treatPick)) return false;
      if (sidePick  && !AnkP_arr(p.complications).includes(sidePick)) return false;

      if (searchTerm){
        const nm = String(p.name || "").toLowerCase();
        if (!nm.includes(searchTerm)) return false;
      }

      return true;
    })
    .sort((a,b) => String(a.name||"").localeCompare(String(b.name||"")))
    .forEach(p => {
      const foundInDisplay = AnkP_resolveFoundIn(p, {
        parentBoardMapping,
        useParentBoard,
        validLocations,
        includeAllAreas
      });

      const desc = String(p.description || "").trim();

      const metaLis = [
        showFoundIn ? AnkP_liArr("Found In", foundInDisplay) : "",
        AnkP_li("Native", AnkP_join(p.native)),
        (() => {
          const s = AnkP_formatSeasons(p);
          return s ? `<li><span class="specdescp">Seasons:</span> ${s}</li>` : "";
        })(),
        AnkP_liArr("Skill Minimum", p.skill),
        AnkP_liArr("Potency", p.potency)
      ].filter(Boolean).join("");

      const useLis = [
        AnkP_liArr("Medicinal Application", p.medicinal),
        AnkP_liArr("Treats", p.treats),
        AnkP_liArr("Beneficial Parts", p.beneficial),
        AnkP_liArr("Unique Use", p.uniqueuse)
      ].filter(Boolean).join("");

      const riskLis = [
        AnkP_liArr("Poisonous Parts", p.poisonous),
        AnkP_liArr("Toxic If", p.toxic),
        AnkP_liArr("Complications", p.complications)
      ].filter(Boolean).join("");

      const div = document.createElement("div");
      div.className = "species-box plant-species-box";
      div.id = p.id || "";

      div.innerHTML = `
        <h2 class="plant-name">${p.name || ""}</h2>
        <h2 class="plant-scientific"><i>${p.scientific || ""}</i></h2>

        ${desc ? `<div class="plant-desc">${desc}</div>` : ""}

        ${metaLis ? `<ul class="plant-meta">${metaLis}</ul>` : ""}

        ${useLis ? `<ul class="plant-use">${useLis}</ul>` : ""}

        ${riskLis ? `<ul class="plant-risk">${riskLis}</ul>` : ""}
      `;

      container.appendChild(div);
    });
}
