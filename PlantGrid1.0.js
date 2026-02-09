/* =====================================================
   PLANT GRID — FULL RENDERER (NO STYLES)
   - Mirrors Animal Grid structure
   - Conditional field printing (only if populated)
   - Location filtering (authoritative logic)
   - Optional parent-board collapsing (Found In display)
   - Optional sliders (skill/potency) + search
   - Seasons field includes dynamic In-Season indicator
   ===================================================== */

/* ---------------------
   BASIC HELPERS
--------------------- */

function arr(val){
  if (Array.isArray(val)) return val.filter(v => v !== null && v !== undefined && String(v).trim() !== "");
  if (val === null || val === undefined) return [];
  const s = String(val).trim();
  return s ? [s] : [];
}

function hasAny(val){ return arr(val).length > 0; }

function joinArr(val, sep=", "){ return arr(val).join(sep); }

function getMinPlantSkill(plant){
  return hasAny(plant.skill) ? Math.min(...arr(plant.skill).map(Number)) : Infinity;
}

function getMinPlantPotency(plant){
  return hasAny(plant.potency) ? Math.min(...arr(plant.potency).map(Number)) : Infinity;
}

/* ---------------------
   SEASON HELPERS
--------------------- */

function getCurrentSeason(){
  // Adjust if your IC calendar differs
  const month = new Date().getMonth(); // 0–11
  if (month >= 2 && month <= 4) return "Spring";
  if (month >= 5 && month <= 7) return "Summer";
  if (month >= 8 && month <= 10) return "Autumn";
  return "Winter";
}

function plantIsInSeason(plant){
  if (!Array.isArray(plant.seasons) || !plant.seasons.length) return false;
  const current = getCurrentSeason();
  // Your data example uses strings like "Spring, Summer" in the array
  return plant.seasons.some(s => String(s).includes(current));
}

function formatSeasonsWithIndicator(plant){
  const seasons = joinArr(plant.seasons);
  if (!seasons) return "";
  const inSeason = plantIsInSeason(plant);
  const badge = inSeason
    ? `<span class="season-indicator in-season">In Season</span>`
    : `<span class="season-indicator out-season">Out of Season</span>`;
  return `${seasons} ${badge}`;
}

/* ---------------------
   LOCATION FILTER (AUTHORITATIVE LOGIC)
--------------------- */

function plantPassesLocationFilter(plant, validLocations, includeAllAreas){
  const foundIn = arr(plant.foundIn);
  const hasSpecificLocations = foundIn.length > 0;

  // CASE 1: Page has NO validLocations
  if (!validLocations || validLocations.length === 0){
    // Only global plants allowed
    return !!includeAllAreas && !hasSpecificLocations;
  }

  // CASE 2 & 3: Page HAS validLocations
  if (!hasSpecificLocations){
    // Global plants allowed only if includeAllAreas is true
    return !!includeAllAreas;
  }

  // Specific-location plant → must intersect validLocations
  return foundIn.some(loc => validLocations.includes(loc));
}

/* ---------------------
   FOUND IN RESOLUTION (DISPLAY ONLY)
--------------------- */

function resolvePlantFoundIn(plant, {
  parentBoardMapping = [],
  useParentBoard = true,
  validLocations = [],
  includeAllAreas = true
}){
  const foundIn = arr(plant.foundIn);

  // Global plant
  if (foundIn.length === 0){
    return includeAllAreas ? ["All Areas"] : [];
  }

  // No parent collapsing
  if (!useParentBoard){
    return foundIn.filter(loc => validLocations.length === 0 || validLocations.includes(loc));
  }

  // Collapse to parent boards
  const parents = new Set();
  foundIn.forEach(loc => {
    const parent = parentBoardMapping.find(p => Array.isArray(p.subregions) && p.subregions.includes(loc));
    if (parent) parents.add(parent.parentName);
  });

  return parents.size ? Array.from(parents) : foundIn;
}

/* ---------------------
   OPTIONAL FIELD RENDERING
--------------------- */

function li(label, value){
  const v = String(value || "").trim();
  if(!v) return "";
  return `<li><span class="specdescp">${label}:</span> ${v}</li>`;
}

function liArr(label, value){
  const v = joinArr(value);
  if(!v) return "";
  return `<li><span class="specdescp">${label}:</span> ${v}</li>`;
}

/* =====================================================
   PLANT GRID — MAIN RENDERER
   Call this like renderSpeciesPlantGrid({ ... })
   ===================================================== */

function renderSpeciesPlantGrid({
  containerId,

  // controls (optional; null-safe)
  skillSlider,
  potencySlider,
  searchInput,

  // configs
  validLocations = [],
  includeAllAreas = true,
  showFoundIn = true,

  parentBoardMapping = [],
  useParentBoard = true,

  plantsList
}){
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  // normalize plantsList (array or object)
  const list = Array.isArray(plantsList)
    ? plantsList
    : (plantsList && typeof plantsList === "object" ? Object.values(plantsList) : []);

  if (!list.length) return;

  const skillFilter = skillSlider ? parseInt(skillSlider.value, 10) : 0;
  const potencyFilter = potencySlider ? parseInt(potencySlider.value, 10) : 0;
  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

  list
    .filter(p => {

      /* --- LOCATION FILTER --- */
      if (!plantPassesLocationFilter(p, validLocations, includeAllAreas)) return false;

      /* --- SLIDERS (minimum thresholds; optional) --- */
      if (skillSlider && skillFilter < getMinPlantSkill(p)) return false;
      if (potencySlider && potencyFilter < getMinPlantPotency(p)) return false;

      /* --- SEARCH (name, scientific, description, plus key arrays) --- */
      if (searchTerm){
        const hay = [
          p.name, p.scientific, p.description,
          ...arr(p.treats),
          ...arr(p.medicinal),
          ...arr(p.beneficial),
          ...arr(p.poisonous),
          ...arr(p.toxic),
          ...arr(p.complications),
          ...arr(p.seasons)
        ].map(x => String(x || "").toLowerCase()).join(" | ");

        if (!hay.includes(searchTerm)) return false;
      }

      return true;
    })
    .sort((a,b) => (a.name || "").localeCompare(b.name || ""))
    .forEach(p => {

      const foundInDisplay = resolvePlantFoundIn(p, {
        parentBoardMapping,
        useParentBoard,
        validLocations,
        includeAllAreas
      });

      const desc = String(p.description || "").trim();

      const metaLis = [
        showFoundIn ? liArr("Found In", foundInDisplay) : "",
        liArr("Native", p.native),
        (() => {
          const s = formatSeasonsWithIndicator(p);
          return s ? `<li><span class="specdescp">Seasons:</span> ${s}</li>` : "";
        })(),
        liArr("Skill Minimum", p.skill),
        liArr("Potency", p.potency)
      ].filter(Boolean).join("");

      const useLis = [
        liArr("Medicinal Application", p.medicinal),
        liArr("Treats", p.treats),
        liArr("Beneficial Parts", p.beneficial),
        liArr("Unique Use", p.uniqueuse)
      ].filter(Boolean).join("");

      const riskLis = [
        liArr("Poisonous Parts", p.poisonous),
        liArr("Toxic If", p.toxic),
        liArr("Complications", p.complications)
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
