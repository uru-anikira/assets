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
    "field_50","field_64","field_22","field_24","field_23","field_72","field_73","field_74","field_75","field_76","field_77","field_78","field_79","field_25"
  ]);

  /* ---------- 7) Hide rank for accounts not in a pack group --------- */
  applyHideExceptGroups(["6","7","8","9","10","11","16","17","18","19","21","22","23","24"], ["field_51"]);


});
