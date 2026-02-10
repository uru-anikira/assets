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

  // ✅ boolean flag from loader
  inSeasonOnly = false,

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

  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";

  list
    .filter(p => {
      if (!AnkP_passesLocationFilter(p, validLocations, includeAllAreas)) return false;
      if (skillSlider && skillMin < AnkP_minSkill(p)) return false;

      // ✅ in-season gate (independent)
      if (inSeasonOnly && !AnkP_isInSeason(p)) return false;

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
        AnkP_liArr("Medicinal", p.medicinal),
        AnkP_liArr("Treats", p.treats),
        AnkP_liArr("Beneficial", p.beneficial),
        AnkP_liArr("Unique Use", p.uniqueuse)
      ].filter(Boolean).join("");

      const riskLis = [
        AnkP_liArr("Toxic", p.toxic),
        AnkP_liArr("Complications", p.complications),
        AnkP_liArr("Poisonous", p.poisonous)
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
