/* =====================================================
   GENERIC HELPERS
   ===================================================== */

   function isCompanion(animal) {
    return animal.companion && animal.companion[0] === "true";
  }
  
  function formatCompanion(animal) {
    if (animal.companion?.[0] === "true") {
      return `${animal.classification.join(", ")}, ${animal.companionsize?.join(", ") || ""}`.trim();
    }
    return animal.classification.join(", ");
  }
  
  function getMinSkill(animal) {
    const adult = animal.skill ? Math.min(...animal.skill.map(Number)) : Infinity;
    if (!animal.skilljuvenile) return adult;
    const juvenile = Math.min(...animal.skilljuvenile.map(Number));
    return Math.min(adult, juvenile);
  }
  
  function getMaxFood(animal) {
    const adult = animal.food ? Math.max(...animal.food.map(Number)) : 0;
    if (!animal.foodjuvenile) return adult;
    const juvenile = Math.max(...animal.foodjuvenile.map(Number));
    return Math.max(adult, juvenile);
  }
  
  function formatSkill(animal) {
    if (animal.skilljuvenile) return `${animal.skilljuvenile.join(", ")} [juvenile] ${animal.skill.join(", ")} [adult]`;
    return animal.skill.join(", ");
  }
  
  function formatFood(animal) {
    if (animal.foodjuvenile) return `${animal.foodjuvenile.join(", ")} [juvenile] ${animal.food.join(", ")} [adult]`;
    return animal.food.join(", ");
  }
  
  /* =====================================================
     LOCATION FILTER (AUTHORITATIVE LOGIC)
     ===================================================== */
  
  function passesLocationFilter(animal, validLocations, includeAllAreas) {
    const hasSpecificLocations =
      Array.isArray(animal.foundIn) && animal.foundIn.length > 0;
  
    // CASE 1: Page has NO validLocations
    if (validLocations.length === 0) {
      // Only global animals allowed
      return includeAllAreas && !hasSpecificLocations;
    }
  
    // CASE 2 & 3: Page HAS validLocations
    if (!hasSpecificLocations) {
      // Global animals allowed only if includeAllAreas is true
      return includeAllAreas;
    }
  
    // Specific-location animal → must intersect validLocations
    return animal.foundIn.some(loc => validLocations.includes(loc));
  }
  
  /* =====================================================
     FOUND IN RESOLUTION (DISPLAY ONLY)
     ===================================================== */
  
  function resolveFoundIn(animal, {
    parentBoardMapping,
    useParentBoard,
    validLocations,
    includeAllAreas
  }) {
    // Global animal
    if (!animal.foundIn || animal.foundIn.length === 0) {
      return includeAllAreas ? ["All Areas"] : [];
    }
  
    // No parent collapsing
    if (!useParentBoard) {
      return animal.foundIn.filter(loc =>
        validLocations.length === 0 || validLocations.includes(loc)
      );
    }
  
    // Collapse to parent boards
    const parents = new Set();
    animal.foundIn.forEach(loc => {
      const parent = parentBoardMapping.find(p =>
        p.subregions.includes(loc)
      );
      if (parent) parents.add(parent.parentName);
    });
  
    // Fallback safety
    return parents.size ? Array.from(parents) : animal.foundIn;
  }
  
  /* =====================================================
     GENERIC RENDERER (NULL SAFE)
     ===================================================== */
  
  function renderSpeciesAnimalGrid({
    containerId,
    skillSlider,
    foodSlider,
    excludePredatorsCheckbox,
    excludePreyCheckbox,
    companionsOnlyCheckbox,
    searchInput,
  
    validLocations,
    includeAllAreas,
    showFoundIn,
  
    parentBoardMapping,
    useParentBoard,
  
    animalsList
  }) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
  
    const skillFilter = skillSlider ? parseInt(skillSlider.value) : 0;
    const foodFilter = foodSlider ? parseInt(foodSlider.value) : Infinity;
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : "";
  
    animalsList
      .filter(a => {
  
        /* --- LOCATION FILTER (FIXED) --- */
        if (!passesLocationFilter(a, validLocations, includeAllAreas)) {
          return false;
        }
  
        /* --- SKILL / FOOD FILTERS --- */
        if (skillSlider && skillFilter < getMinSkill(a)) return false;
        if (foodSlider && foodFilter > getMaxFood(a)) return false;
  
        /* --- CLASSIFICATION --- */
        const isPredator = a.classification?.includes("Predator");
        const isPrey = a.classification?.includes("Prey");
  
        if (excludePredatorsCheckbox?.checked && isPredator) return false;
        if (excludePreyCheckbox?.checked && isPrey) return false;
  
        /* --- COMPANION FILTER --- */
        if (companionsOnlyCheckbox?.checked && !isCompanion(a)) return false;
  
        /* --- NAME SEARCH --- */
        if (searchTerm && !a.name.toLowerCase().includes(searchTerm)) return false;
  
        return true;
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(a => {
        const foundIn = resolveFoundIn(a, {
          parentBoardMapping,
          useParentBoard,
          validLocations,
          includeAllAreas
        });
  
        const div = document.createElement("div");
        div.className = "species-box";
        div.id = a.id;
  
        div.innerHTML = `
          <img src="${a.image}" alt="${a.name}">
          <h2>
            ${a.name}
            ${isCompanion(a) ? " 🐺" : ""}
          </h2>
  
          <ul>
            ${showFoundIn
              ? `<li><span class="specdescp">Found In:</span> ${foundIn.join(", ")}</li>`
              : ""}
            <li><span class="specdescp">Full Weight Range:</span> ${a.weight.join(", ")}</li>
            <li><span class="specdescp">Prey Size:</span> ${a.size.join(", ")}</li>
            <li><span class="specdescp">Classification:</span> ${formatCompanion(a)}</li>
          </ul>
  
          <ul>
            <li><span class="specdescp">Skill Minimum:</span> ${formatSkill(a)}</li>
            <li><span class="specdescp">Food from Hunt:</span> ${formatFood(a)}</li>
          </ul>
  
          <ul>
            <li><span class="specdescp">Characters Required:</span> ${a.partysize.join(", ")}</li>
          </ul>
        `;
  
        container.appendChild(div);
      });
  }
  
