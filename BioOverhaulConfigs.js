document.addEventListener("DOMContentLoaded", function () {

  /* ---------- group id ---------- */
  function getGroupId(){
    var el = document.getElementById("g<!-- |g_id| -->");
    if(el){
      var m = String(el.id).match(/^g(\d+)$/);
      if(m) return m[1];
    }
    var any = document.querySelector('[id^="g"]');
    if(!any) return null;
    var mm = String(any.id).match(/^g(\d+)$/);
    return mm ? mm[1] : null;
  }
  var gid = getGroupId(); // string

  /* ---------- helpers ---------- */
  function normArr(x){ return Array.isArray(x) ? x : [x]; }
  function toStrArr(a){ return normArr(a).map(function(v){ return String(v); }); }

  // NEW: locate the *row container* for a given field key (field_18, field-birthday, etc.)
  function findFieldRow(fieldKey){
    var root = document.getElementById("FieldsOptional") || document.getElementById("Fields") || document;

    // 1) direct id on a wrapper (some skins do this)
    var direct = root.querySelector("#" + CSS.escape(fieldKey));
    if(direct){
      return direct.closest("li, tr, .row, .fieldrow, .profilefield, .pformstrip, .pformleft, .pformright") || direct;
    }

    // 2) anything inside that has id=fieldKey (input/span/etc.), hide its row
    var inner = root.querySelector('[id="' + fieldKey.replace(/"/g,'') + '"]');
    if(inner){
      return inner.closest("li, tr, .row, .fieldrow, .profilefield, .pformstrip") || inner.parentElement;
    }

    // 3) common pattern: label "field_18" appears in name/id/for attributes
    var fuzzy = root.querySelector(
      '[for="' + fieldKey + '"], ' +
      '[name*="' + fieldKey + '"], ' +
      '[id*="' + fieldKey + '"], ' +
      '[class*="' + fieldKey + '"]'
    );
    if(fuzzy){
      return fuzzy.closest("li, tr, .row, .fieldrow, .profilefield, .pformstrip") || fuzzy.parentElement;
    }

    return null;
  }

  function hideField(fieldKey){
    var row = findFieldRow(fieldKey);
    if(row) row.style.display = "none";
  }

  function showField(fieldKey){
    var row = findFieldRow(fieldKey);
    if(row) row.style.display = "";
  }

  function applyHideForGroups(groups, keys){
    var gs = toStrArr(groups);
    if(gs.indexOf(String(gid)) === -1) return;
    normArr(keys).forEach(hideField);
  }

  function applyHideExceptGroups(allowedGroups, keys){
    var ok = toStrArr(allowedGroups).indexOf(String(gid)) !== -1;
    if(ok) return;
    normArr(keys).forEach(hideField);
  }

  /* ---------- 2) Characters (NOT main accounts): hide main-account-only fields ---------- */
  applyHideExceptGroups(["4","12","15","25"], ["field_18","field_19","field_20","field_40"]);

  /* ---------- 3) Hide birthday for everyone except unaccepted characters and main accounts --------- */
  applyHideExceptGroups(["1","4","12","15","25"], ["field-birthday"]);

  /* ---------- 4) Living characters: hide Date of Death unless in groups 13 or 20 ---------- */
  applyHideExceptGroups(["13","20"], ["field_37"]);

  /* ---------- 5) Hide fixed biography fields for accepted characters: only group 1 sees them ---------- */
  applyHideExceptGroups(["1"], [
    "field_3","field_4","field_1","field_12","field_36","field_5","field_6","field_7","field_8",
    "field_29","field_26","field_27","field_2","field_43","field_49","field_44","field_45","field_46","field_66"
  ]);

  /* ---------- 6) Hide biography fields for main accounts ---------- */
  applyHideExceptGroups(["1","3","6","7","8","9","10","11","13","14","16","17","18","19","20","21","22","23"], [
    "field_3","field_4","field_1","field_12","field_36","field_5","field_6","field_7","field_8","field_29","field_26","field_27",
    "field_2","field_43","field_49","field_44","field_45","field_46","field_66","field_56","field_57","field_58","field_59",
    "field_9","field_10","field_11","field_39","field_30","field_31","field_32","field_33","field_28","field_34","field_35",
    "field_41","field_47","field_48","field_55","field_13","field_14","field_15","field_16","field_17","field_38","field_51",
    "field_50","field_64","field_22","field_24","field_23","field_72","field_73","field_74","field_75","field_76","field_77",
    "field_78","field_79","field_25","field_80","field_81","field_82","field_83","field_84"
  ]);

  /* ---------- 7) Hide rank for accounts not in a pack group --------- */
  applyHideExceptGroups(["6","7","8","9","10","11","16","17","18","19","21","22","23","24"], ["field_51"]);


});


  /* =====================================================
     Word Counter on Bio Fields
     ===================================================== */
document.addEventListener("DOMContentLoaded",function(){

  function countWords(s){
    s=String(s||"").replace(/\s+/g," ").trim();
    return s ? s.split(" ").length : 0;
  }

  function addWordCounter(opts){
    var row=document.getElementById(opts.rowId);
    if(!row) return;

    var left=row.querySelector(".pformleft");
    var ta=row.querySelector("textarea");
    if(!left || !ta) return;

    var counter=document.createElement("div");
    counter.className="ucp-wordcount";
    counter.style.cssText="margin-top:6px;font-size:11px;opacity:.9;";

    var min=opts.minWords||0;
    counter.innerHTML=
      "Words: <span class='wc-count'>0</span>" +
      (min ? " / <span class='wc-min'>"+min+"</span>" : "");

    left.appendChild(counter);

    var countEl=counter.querySelector(".wc-count");

    function update(){
      var n=countWords(ta.value);
      countEl.textContent=n;

      if(min){
        counter.style.color = (n >= min) ? "inherit" : "#b33";
        counter.style.fontWeight = (n >= min) ? "normal" : "bold";
      }
    }

    update();
    ta.addEventListener("input",update);
    ta.addEventListener("change",update);
  }

  /* Field 41 — no minimum */
  addWordCounter({
    rowId:"field_41"
  });

  /* Field 2 — minimum 300 words */
  addWordCounter({
    rowId:"field_2",
    minWords:300
  });

});

document.addEventListener("DOMContentLoaded", function () {

  /* =====================================================
     CONFIG - Auto Clear Pack Rank if Not In Pack Group/Away/Dormant
     ===================================================== */
  var allowedGroups = ["6","7","8","9","10","11","16","17","18","19","21","22","23","24"];
  var fieldRowId = "field_51";                 // <tr id="field_51">
  var fieldName = "field_51";                  // name="field_51"
  var submitValue = "Amend my profile";        // button label text

  /* =====================================================
     GROUP ID (Jcink variable – safest)
     ===================================================== */
  var gid = String("<!-- |g_id| -->").trim();

  // If user IS allowed, do nothing at all
  if (allowedGroups.indexOf(gid) !== -1) return;

  /* =====================================================
     FIND FORM + SUBMIT BUTTON
     ===================================================== */
  var form = document.querySelector("#ucpcontent form");
  if (!form) return;

  var submitBtn = Array.from(form.querySelectorAll("input[type='submit']"))
    .find(function(btn){ return btn.value === submitValue; });

  if (!submitBtn) return;

  /* =====================================================
     CLEAR FIELD ON SUBMIT
     ===================================================== */
  form.addEventListener("submit", function (e) {

    // Only act if THIS submit button triggered the submit
    if (document.activeElement !== submitBtn) return;

    var row = document.getElementById(fieldRowId);
    if (!row) return;

    // Clear any input/select/textarea inside the row
    row.querySelectorAll("input,textarea,select").forEach(function(el){
      if (el.type === "checkbox" || el.type === "radio") {
        el.checked = false;
      } else {
        el.value = "";
      }
    });

  });

});

  /* =====================================================
     Display Bio Fields By Dropdown Controller
     ===================================================== */

document.addEventListener("DOMContentLoaded", function(){

  /* ===== group id (reliable on UCP) ===== */
  var gid = String("<!-- |g_id| -->").trim();

  /* ===== helpers ===== */
  function isVisible(el){
    return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));
  }

function setRowDisplay(rowId, show){
  var row = document.getElementById(rowId);
  if(!row) return;

  if(show){
    // restore whatever it was before we hid it
    var prev = row.getAttribute("data-prev-display");
    if(prev !== null){
      row.style.display = prev;
      row.removeAttribute("data-prev-display");
    }else{
      row.style.display = "";
    }
  }else{
    // store current display (inline or computed) before hiding
    if(!row.hasAttribute("data-prev-display")){
      var cur = row.style.display || window.getComputedStyle(row).display;
      // If it's already none for some reason, store empty so CSS can decide later
      row.setAttribute("data-prev-display", (cur && cur !== "none") ? cur : "");
    }
    row.style.display = "none";
  }
}
  function normArr(x){ return Array.isArray(x) ? x : [x]; }
  function normLowerArr(x){ return normArr(x).map(function(v){ return String(v).trim().toLowerCase(); }); }

  function passesGroup(rule){
    if(rule.onlyGroups && normArr(rule.onlyGroups).map(String).indexOf(gid) === -1) return false;
    if(rule.excludeGroups && normArr(rule.excludeGroups).map(String).indexOf(gid) !== -1) return false;
    return true;
  }

  function findControllerInput(controllerRowId, controllerName){
    // controllerName defaults to "field_###" form, but you can override in config if needed
    var name = controllerName || controllerRowId.replace(/^field_/, "field_");
    return document.querySelector(
      "#"+controllerRowId+" select,"+
      "#"+controllerRowId+" input,"+
      "#"+controllerRowId+" textarea,"+
      "#"+controllerRowId+"_input,"+
      "#"+controllerRowId+" [name='"+name+"'],"+
      "#"+controllerRowId+" [name='"+name+"[]']"
    );
  }

  function applyConditional(rule){
    if(!passesGroup(rule)) return;

    var controllerRow = document.getElementById(rule.controllerRowId);
    if(!controllerRow) return;

    // If other rules hid the controller row, do nothing (prevents conflicts)
    if(!isVisible(controllerRow)) return;

    var ctrl = findControllerInput(rule.controllerRowId, rule.controllerName);
    if(!ctrl) return;

    var showWhen = normLowerArr(rule.showWhenValues || ["y","yes"]);
    var dependents = normArr(rule.dependentRowIds || []);

    function evalShow(){
      var v = String(ctrl.value || "").trim().toLowerCase();
      var show = showWhen.indexOf(v) !== -1;

      dependents.forEach(function(id){
        // Optional: if rule says hide controller too when false
        setRowDisplay(id, show);
      });
    }

    // Optional: prevent flash
    if(rule.hideDependentsInitially !== false){
      dependents.forEach(function(id){ setRowDisplay(id, false); });
    }

    evalShow();
    ctrl.addEventListener("change", evalShow);
  }

  /* =====================================================
     CONFIG: Add as many rules as you want
     ===================================================== */
  var rules = [

    // Siteborn controller: only group 1
    {
      controllerRowId: "field_43",
      dependentRowIds: ["field_44","field_45","field_46","field_49"],
      showWhenValues: ["y","yes"],
      onlyGroups: ["1"]
    },

    // New controller: any group where field_24 is visible
    {
      controllerRowId: "field_23",
      dependentRowIds: ["field_13","field_14","field_15","field_16","field_17","field_80","field_81","field_82","field_83","field_84"],
      showWhenValues: ["y","yes"]
      // no group restriction => applies anywhere field_24 exists+is visible
    },
    {
      controllerRowId: "field_24",
      dependentRowIds: ["field_38","field_47","field_55","field_48"],
      showWhenValues: ["y","yes"]
      // no group restriction => applies anywhere field_24 exists+is visible
    },
    {
      controllerRowId: "field_25",
      dependentRowIds: ["field_74","field_75","field_76","field_77","field_78","field_79"],
      showWhenValues: ["2","yes"]
      // no group restriction => applies anywhere field_25 exists+is visible
    }

  ];

  rules.forEach(applyConditional);

});
