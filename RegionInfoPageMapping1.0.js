document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     ONE-TO-MANY PID RESOLUTION (STRICT / OPT-IN)
     Loads ONLY when forumId is explicitly included below.
     ===================================================== */

  // Exact overrides: forumId -> pid
  const PID_OVERRIDES = {
    // 44: 57,
    // 45: 56,
    // 46: 58,
    // // 47: 59,
    // 51: 60
    // add more singletons here - these are exception cases
  };

  // Ranges: inclusive [start,end] -> pid
  // Use these for bulk “postable forum” blocks
  const PID_RANGES = [
    // مثال: [52, 162, 61],
    // مثال: [196, 214, 61]
  ];

  // Explicit lists: pid -> [forumIds...]
  // Use these for scattered boards
  const PID_LISTS = {
    61: [44,45,46,47,48,49,50,51,52,53,54,55,57,58,59,60,62,63,64,65,73,74,75,76,78,79,81,82,84,85,86,87,89,90,91,92,94,95,96,97,99,100,101,102,104,105,106,107,109,110,111,112,114,115,116,117,119,120,121,122,124,125,126,127,129,130,131,132,134,135,136,137,139,140,141,142,144,145,146,147,149,150,151,152,164,165,166,167,174,174,176,177,179,180,181,182,184,185,186,187]
    // add more pids/lists as needed
  };

  function forumIdFromUrl(){
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("showforum") || params.get("f");
    const n = raw ? parseInt(raw, 10) : null;
    return Number.isFinite(n) ? n : null;
  }

  function resolvePidStrict(forumId){
    if (!forumId) return null;

    // 1) exact overrides win
    if (forumId in PID_OVERRIDES) return PID_OVERRIDES[forumId];

    // 2) range matches
    for (const [start, end, pid] of PID_RANGES){
      if (forumId >= start && forumId <= end) return pid;
    }

    // 3) explicit lists
    for (const pidStr in PID_LISTS){
      const pid = parseInt(pidStr, 10);
      if (PID_LISTS[pid].includes(forumId)) return pid;
    }

    // 4) strict: no match, no load
    return null;
  }

  const forumId = forumIdFromUrl();
  const pid = resolvePidStrict(forumId);

  // STRICT: do nothing unless explicitly mapped
  if (!forumId || !pid) return;

  const url = `index.php?act=Pages&pid=${pid}`;

  /* =====================================================
     FETCH + INJECT
     ===================================================== */

  fetch(url)
    .then(r => r.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const extracted = doc.querySelector("#innerwrapper");
      if (!extracted) {
        console.warn("Content wrapper #innerwrapper not found.");
        return;
      }

      const loadDiv = document.getElementById("ajaxForumLoad");
      if (!loadDiv) return;

      loadDiv.innerHTML = extracted.innerHTML;

      // Execute all scripts inside injected content
      loadDiv.querySelectorAll("script").forEach(script => {
        const newScript = document.createElement("script");
        if (script.src) newScript.src = script.src;
        else newScript.textContent = script.textContent;
        document.head.appendChild(newScript);
        document.head.removeChild(newScript);
      });

      // --- Explicitly call plant/animal render functions ---
      if (typeof window.renderPlants === "function") {
        try { window.renderPlants("plants-container-render"); }
        catch(e) { console.warn("Plant render failed:", e); }
      }

      if (typeof window.renderSpeciesCryothia === "function") {
        try { window.renderSpeciesCryothia(); }
        catch(e) { console.warn("Animal render failed:", e); }
      }

      /* =====================================================
         TOGGLE BUTTON LOGIC (GLOBAL remembered state)
         ===================================================== */
      const container = document.getElementById("ajaxForumLoadContainer");
      const toggleBtn = document.getElementById("ajaxToggleBtn");
      if (!container || !toggleBtn) return;

      container.style.display = "block";

      const GLOBAL_KEY = "anikira_regionInfo_visibility"; // "expanded" | "collapsed"

      // Optional: migrate legacy per-forum state one time
      const legacyKey = "ajaxForumLoad_" + forumId;
      const legacyState = localStorage.getItem(legacyKey);
      if (legacyState && !localStorage.getItem(GLOBAL_KEY)) {
        localStorage.setItem(GLOBAL_KEY, legacyState);
        // localStorage.removeItem(legacyKey); // optional cleanup
      }

      function applyState(state){
        const collapsed = state === "collapsed";
        loadDiv.style.display = collapsed ? "none" : "block";
        toggleBtn.textContent = collapsed ? "Display Region Information" : "Hide Region Information";
        if (!collapsed) loadLazyIframes(loadDiv);
      }

      const savedState = localStorage.getItem(GLOBAL_KEY) || "expanded";
      applyState(savedState);

      toggleBtn.addEventListener("click", function () {
        const nextState = (loadDiv.style.display === "none") ? "expanded" : "collapsed";
        localStorage.setItem(GLOBAL_KEY, nextState);
        applyState(nextState);
      });

    })
    .catch(err => console.warn("AJAX load failed:", err));
});

/* =====================================================
   LAZY IFRAMES
   ===================================================== */
function loadLazyIframes(scope = document) {
  scope.querySelectorAll("iframe.lazy-map").forEach(iframe => {
    if (!iframe.src) iframe.src = iframe.dataset.src;
  });
}

/* GLOBAL: Observe CSS radio-button tab changes */
document.querySelectorAll(".tab-input").forEach(input => {
  input.addEventListener("change", () => {
    const num = input.id.replace("tab", "");
    const panel = document.querySelector(`#panel-${num}`);
    if (panel) loadLazyIframes(panel);
  });
});
