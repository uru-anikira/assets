/* Replace BBCode in profile fields by FizzyElf - https://fizzyelf.jcink.net */
/* Use: <span class="replaceBBCode"><!-- |field_#| --></span> */
function bbcode_replacer(str) {
   findreplace = {
       '[/url]' : '</a>'
       ,'[img]' : '<img src="'
       ,'[/img]' : '"></img>'
       ,'[*]' : '<li>'
       ,'[LIST]' : '<ul>'
       ,'[/LIST]' : '</ul>'
       ,'[QUOTE]' : '<div id="QUOTE-WRAP"><b>QUOTE</b><div id="QUOTE">'
       ,'[/QUOTE]' : '</div></div>'
       ,'[CODE]' : '<div id="CODE-WRAP"><b>CODE</b><div id="CODE">'
       ,'[/CODE]' : '</div></div>'
       ,'[youtube]' : '<frame width="560" height="315" src="https://www.youtube.com/embed/'
       ,'[/youtube]' : '" frameborder="0" allowfullscreen></iframe><br>'
       ,'[/spoiler]' : '</div></div>'
       ,'[/font]' : '</span>'
       ,'[/color]' : '</span>'
       ,'[/size]' : '</font>'
       ,'[/align]' : '</div>'
       ,'[hr]' : '<hr>'
   }
   return str.replace(/\[\/?(\*|\w+|\w+=.+?)\]/ig, function(s){
       if (s.includes('='))
         return s.replace(/\[font=(\w+)\]/i, '<span style="font-family: $1;">')
         .replace(/\[color=(\w+)\]/i, '<span style="color: $1;">')
         .replace(/\[size=(\w+)\]/i, '<font size="$1">')
         .replace(/\[align=(\w+)\]/i, '<div style="text-align:$1">')
         .replace(/\[url=(.+)\]/i, '<a href="$1">')
         .replace(/\[quote=(.+)\]/i, '<div id="QUOTE-WRAP"><b>QUOTE</b>($1)<div id="QUOTE">')
         .replace(/\[spoiler=(.+)\]/i, '<div class="spoiler"><div align="center" onclick="$(this).next().toggle()" title="Click to toggle">(PARAM1)</div><div class="desc spoiled" style="display:none">')
       else if (findreplace[s])
         return findreplace[s]
       else
         return s.replace('[', '<').replace(']', '>')
   });
}

$(".replaceBBCode").each(function() { $(this).html( bbcode_replacer($(this).html()) ); });

/** IBStore one-click functions by FizzyElf  -- https://fizzyelf.jcink.net **/
async function BuyStoreItem(itemid, keyword) {
    let data = await $.get(`/index.php?act=store&code=buyitem&itemid=${itemid}`);
    let lnk = '';
    if (keyword) {
        data = await $.get('/index.php?act=store&code=inventory');
        if ($(`#ucpcontent tr:contains(${keyword})`, data).length)
            lnk = $(`#ucpcontent tr:contains(${keyword})`, data).first().find('a:contains(Use Item)').attr('href');
    }
    return lnk;
}

async function BuyUseStoreItem(itemid, keyword) {
    let lnk = await BuyStoreItem(itemid, keyword);
    await $.get(lnk);
}

async function BuyAwardStoreItem(itemid, keyword, username) {
    let lnk = await BuyStoreItem(itemid, keyword);
    lnk = lnk.replace('code=useitem', 'code=do_useitem');
    await $.post(lnk, {username, change: 'Give'});
}
