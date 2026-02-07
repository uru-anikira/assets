(function($){
  $(function(){

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
      groups.map(name => [`${name.toLowerCase()}Activity`, createActivityMap(name)])
    );

    const {
      aesirActivity, aevumActivity, ilmatarActivity, impiumActivity, irkallaActivity,
      kairosActivity, khalsaActivity, sanctumActivity, solmaniActivity, theseusActivity, vanirActivity
    } = activityMaps;

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

    function resolveTag(tag) {
      tag = String(tag).toLowerCase();
      for (const group in tagGroups) {
        if (tagGroups[group][tag]) return { group, name: tagGroups[group][tag] };
      }
      return null;
    }

    function parseTags($container, prepend = true) {
      $container.each(function(){
        let html = $(this).html();
        if (!html) return;

        html = html.replace(/\[([^\]]+)\]/g, function(match, capture){
          const resolved = resolveTag(capture);
          if (!resolved) return match;
          return `<span class="tag ${resolved.group}">${resolved.name}</span>`;
        });

        $(this).html(html);

        const $tags = $(this).find(".tag");
        if (!$tags.length) return;

        if ($(this).hasClass("posttitle")) {
          let $row = $(this).children(".tag-row").first();
          if (!$row.length) $row = $('<div class="tag-row"></div>').prependTo(this);
          $row.append($tags);
          return;
        }

        if (prepend) $(this).prepend($tags);
        else $(this).append($tags);
      });
    }

    // --- Run after DOM + jQuery are ready --- //
    parseTags($(".posttitle"), true);
    parseTags($(".maintitle"), false);

  });
})(window.jQuery);
