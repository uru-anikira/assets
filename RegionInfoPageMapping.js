document.addEventListener("DOMContentLoaded", function () {

  // Forum ID → pid mapping
  const pageMap = {
    44: 57, 45: 56, 46: 58, 47: 59, 6: 61, 48: 61, 49: 61, 50: 61, 51: 60, 39: 61,
    52: 61, 53: 61, 54: 61, 55: 61, 56: 61, 57: 61, 58: 61, 59: 61, 60: 61, 61: 61,
    62: 61, 63: 61, 64: 61, 65: 61, 72: 61, 73: 61, 74: 61, 75: 61, 76: 61, 77: 61,
    78: 61, 79: 61, 81: 61, 82: 61, 83: 61, 84: 61, 85: 61, 86: 61, 87: 61, 88: 61,
    89: 61, 90: 61, 91: 61, 92: 61, 93: 61, 94: 61, 95: 61, 96: 61, 97: 61, 98: 61,
    101: 61, 99: 61, 100: 61, 102: 61, 103: 61, 104: 61, 105: 61, 106: 61, 107: 61,
    108: 61, 109: 61, 110: 61, 111: 61, 112: 61, 113: 61, 114: 61, 115: 61, 116: 61,
    117: 61, 118: 61, 119: 61, 120: 61, 121: 61, 122: 61, 123: 61, 124: 61, 125: 61,
    126: 61, 127: 61, 128: 61, 129: 61, 130: 61, 131: 61, 132: 61, 133: 61, 134: 61,
    135: 61, 136: 61, 137: 61, 138: 61, 139: 61, 140: 61, 141: 61, 142: 61, 143: 61,
    144: 61, 145: 61, 146: 61, 147: 61, 148: 61, 149: 61, 150: 61, 151: 61, 152: 61,
    153: 61, 154: 61, 155: 61, 156: 61, 157: 61, 158: 61, 159: 61, 160: 61, 161: 61,
    162: 61, 43: 61, 196: 61, 197: 61, 198: 61, 199: 61, 200: 61, 201: 61, 202: 61,
    203: 61, 204: 61, 205: 61, 206: 61, 207: 61, 208: 61, 209: 61, 210: 61, 211: 61,
    212: 61, 213: 61, 214: 61
  };

  const params = new URLSearchParams(window.location.search);

  // Detect forum ID from either showforum or f
  let forumId = null;
  if (params.get("showforum")) {
    forumId = parseInt(params.get("showforum"), 10);
  } else if (params.get("f")) {
    forumId = parseInt(params.get("f"), 10);
  }

  if (!forumId || !(forumId in pageMap)) return;

  const pid = pageMap[forumId];
  const url = `index.php?act=Pages&pid=${pid}`;

  fetch(url)
    .then(r => r.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Extract inner wrapper
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
         - One saved preference used everywhere site-wide
         - Optional migration from old per-forum keys
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
        localStorage.setItem(GLOBAL_KEY, legacyState); // expects "collapsed"/"expanded"
        // localStorage.removeItem(legacyKey); // uncomment to clean up old keys
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
