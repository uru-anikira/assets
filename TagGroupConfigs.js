// --- Define your tag groups --- //

const tagSkills  = { ht: 'Hunting', cb: 'Combat', md: 'Medicine', in: 'Insight' };
const tagThread  = { open: 'Open', closed: 'Closed', pack: 'Pack Thread' };
const tagWarning = { cw: 'Warning', gr: 'Graphic', m: 'Mature', tw: 'Triggers' };

function createActivityMap(groupName) {
  const prefix = groupName.slice(0, 3).toLowerCase();
  return {
    [`${prefix}q1`]: `${groupName} Q1`,
    [`${prefix}q2`]: `${groupName} Q2`,
    [`${prefix}q3`]: `${groupName} Q3`,
    [`${prefix}q4`]: `${groupName} Q4`
  };
}

const groups = ['Aesir','Aevum','Ilmatar','Impium','Irkalla','Kairos','Khalsa','Sanctum','Solmani','Theseus','Vanir'];

const activityMaps = Object.fromEntries(
  groups.map(name => [
    `${name.toLowerCase()}Activity`,
    createActivityMap(name)
  ])
);

const {
  aesirActivity,
  aevumActivity,
  ilmatarActivity,
  impiumActivity,
  irkallaActivity,
  kairosActivity,
  khalsaActivity,
  sanctumActivity,
  solmaniActivity,
  theseusActivity,
  vanirActivity
} = activityMaps;

// Combine all groups into one object for parsing
const tagGroups = {
    warning: tagWarning,
    skills: tagSkills,
    thread: tagThread,
    aesir: aesirActivity,
    aevum: aevumActivity,
    ilmatar: ilmatarActivity,
    impium: impiumActivity,
    irkalla: irkallaActivity,
    kairos: kairosActivity,
    khalsa: khalsaActivity,
    sanctum: sanctumActivity,
    solmani: solmaniActivity,
    theseus: theseusActivity,
    vanir: vanirActivity
};


// --- Helper: find group and mapped name for a tag --- //
function resolveTag(tag) {
    tag = tag.toLowerCase();
    for (const group in tagGroups) {
        if (tagGroups[group][tag]) {
            return { group: group, name: tagGroups[group][tag] };
        }
    }
    return null; // tag not found
}

// --- Apply tag parsing for a container --- //
function parseTags($container, prepend = true) {
  $container.each(function () {
    let html = $(this).html();
    if (!html) return;

    // Replace [tag] with <span class="tag group">Name</span>
    html = html.replace(/\[([^\]]+)\]/g, function (match, capture) 
      const resolved = resolveTag(capture);
      if (!resolved) return match; // unknown tag → leave as-is
      return `<span class="tag ${resolved.group}">${resolved.name}</span>`;
    });

    $(this).html(html);

    const $tags = $(this).find(".tag");
    if (!$tags.length) return;

    // THREAD LIST: create a tag row above the title
    if ($(this).hasClass("posttitle")) {
      let $row = $(this).children(".tag-row").first();
      if (!$row.length) $row = $('<div class="tag-row"></div>').prependTo(this);

      // move tags into tag-row (keeps order)
      $row.append($tags);
      return;
    }

    // OTHER CONTAINERS (e.g. maintitle): keep your old behavior
    if (prepend) $(this).prepend($tags);
    else $(this).append($tags);
  });
}


// --- Run on thread list --- //
parseTags($(".posttitle"), true);

// --- Run on thread page titles --- //
parseTags($(".maintitle"), false);
