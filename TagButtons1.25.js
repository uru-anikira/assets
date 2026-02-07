/* =====================================================
   THREAD TAG BUTTONS (Topic Title Enhancer)
   ===================================================== */

/* -------------------------
   DATE / QUARTER HELPERS
------------------------- */

function getCurrentQuarter() {
    return Math.ceil((new Date().getMonth() + 1) / 3);
}

/* -------------------------
   TOPIC TITLE UTILITIES
------------------------- */

function getTopicTitleTags() {
    const val = $('input[name="TopicTitle"]').val() || '';
    return [...val.matchAll(/\[(\w+)\]/g)].map(m => m[1]);
}

function setTopicTitleTags(tags) {
    const $title = $('input[name="TopicTitle"]');
    const base = $title.val().replace(/\s*\[\w+\]/g, '').trim();
    const tagStr = tags.map(t => `[${t}]`).join(' ');
    $title.val(base ? `${base} ${tagStr}` : tagStr);
}

/* -------------------------
   BUTTON BUILDERS
------------------------- */

function buildTagButton(tag, label) {
    return `
        <button type="button"
            class="codebuttons tag-btn"
            data-tag="${tag}"
            title="${label}">
            ${label}
        </button>
    `;
}

function buildStaticGroups() {
    return `
        <div class="tag-section">
            <div class="tag-subheader">Skills</div>
            ${Object.entries(tagSkills).map(([k,v]) => buildTagButton(k,v)).join('')}
        </div>

        <div class="tag-section">
            <div class="tag-subheader">Thread</div>
            ${Object.entries(tagThread).map(([k,v]) => buildTagButton(k,v)).join('')}
        </div>

        <div class="tag-section">
            <div class="tag-subheader">Warnings</div>
            ${Object.entries(tagWarning).map(([k,v]) => buildTagButton(k,v)).join('')}
        </div>
    `;
}

function buildActivityGroups() {
    const currentQuarter = getCurrentQuarter();
    let buttons = '';

    groups.forEach(group => {
        const activity = tagGroups[group.toLowerCase()];
        if (!activity) return;

        ['q1','q2','q3','q4'].forEach(q => {
            const qNum = parseInt(q[1], 10);
            if (qNum > currentQuarter) return; // only show past/current quarters

            const tag = `${group.slice(0,3).toLowerCase()}${q}`;
            if (activity[tag]) {
                buttons += buildTagButton(tag, activity[tag]);
            }
        });
    });

    // Return one combined section for all packs
    if (!buttons) return '';

    return `
        <div class="tag-section pack-section">
            <div class="tag-subheader">Pack Activity Tags</div>
            <div class="pack-grid">
                ${buttons}
            </div>
        </div>
    `;
}

/* -------------------------
   INSERT THREAD TAG ROW
------------------------- */

function addThreadTagsRow() {
    // Only proceed if posting form exists AND topic title field exists
    if (!$('#posting-form').length || !$('input[name="TopicTitle"]').length || $('#thread-tags-row').length) return;

    const rowHTML = `
        <tr class="custom_field" id="thread-tags-row">
            <td class="pformleft"><b>Thread Tags</b></td>
            <td class="pformright">
                <div class="tag-grid">
                    ${buildStaticGroups()}
                    ${buildActivityGroups()}
                </div>
            </td>
        </tr>
    `;

    $('#code-buttons').closest('tr').after(rowHTML);
    syncTagButtons();
}

/* -------------------------
   TOGGLE + SYNC LOGIC
------------------------- */

function syncTagButtons() {
    const active = getTopicTitleTags();
    $('.tag-btn').each(function () {
        $(this).toggleClass('active', active.includes($(this).data('tag')));
    });
}

$(document).on('click', '.tag-btn', function () {
    const tag = $(this).data('tag');
    let tags = getTopicTitleTags();

    if (tags.includes(tag)) {
        tags = tags.filter(t => t !== tag);
    } else {
        tags.push(tag);
    }

    setTopicTitleTags(tags);
    syncTagButtons();
});

/* -------------------------
   INIT
------------------------- */

$(document).ready(addThreadTagsRow);
