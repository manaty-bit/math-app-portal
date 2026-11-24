(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const phrases = {
    ja: {
      navApps:'アプリを探す',navAbout:'MANATY LABについて',headerPlay:'遊んでみる',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'遊びから生まれる、<br>数学の<span class="highlight">「わかった！」</span>',
      heroDesc:'触って、試して、気づいていく。数学がちょっと好きになる、無料の学習ゲームを集めました。',heroExplore:'ゲームを見つける',heroTrust:'登録不要・無料・スマホでもPCでも',
      miniLabel:'ちょこっと体験',miniReset:'もう一度',miniCorrect:'ぴったり！',miniPosition:'いまの位置',heroVisualNote:'正解は、遊びの中にある。',
      searchLabel:'アプリを検索',searchPlaceholder:'単元・アプリ名で検索',filterAll:'すべて',gradeJ1:'中学1年',gradeJ2:'中学2年',gradeJ3:'中学3年',gradeHigh:'高校数学',
      source:'コード',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'数学に、<br><span>遊び心を。</span>',aboutBody:'MANATY LABは、数学をもっと身近に感じるための個人制作の学習アプリプロジェクトです。現役の数学教員の視点をもとに、「おもしろい」と「なるほど」を両立するゲームを少しずつ公開しています。',aboutLink:'ゲームを探してみる',
      connectKicker:'STAY CURIOUS',connectTitle:'遊び方も、新作も。',connectSubtitle:'YouTubeで使い方を、Xで新しいアプリのお知らせを発信していく予定です。',youtubeDesc:'ゲームの使い方や、数学の「なるほど！」を動画で紹介していきます。',xDesc:'新作アプリや、制作の裏側を気軽にお知らせしていきます。',comingSoonSocial:'準備中',visitChannel:'チャンネルを見る ↗',visitX:'Xを見る ↗',footerMessage:'遊びから生まれる、数学の「わかった！」',footerNote:'個人運営の学習アプリサイトです。学校の公式サイトではありません。',backToTop:'ページの先頭へ ↑'
    },
    en: {
      navApps:'Explore games',navAbout:'About MANATY LAB',headerPlay:'Start playing',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'Play your way to<br>an <span class="highlight">“Aha!” moment.</span>',
      heroDesc:'Touch, experiment, and discover. Find free math games that make learning surprisingly fun.',heroExplore:'Explore games',heroTrust:'Free to play · No account · Phone or desktop',
      miniLabel:'TRY IT OUT',miniReset:'Reset',miniCorrect:'You got it!',miniPosition:'Position',heroVisualNote:'Discover answers through play.',
      searchLabel:'Search games',searchPlaceholder:'Search by game or topic',filterAll:'All',gradeJ1:'Grade 7',gradeJ2:'Grade 8',gradeJ3:'Grade 9',gradeHigh:'High school',
      source:'Code',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'A little more<br><span>play in math.</span>',aboutBody:'MANATY LAB is an independent collection of educational math apps. Built from the perspective of an active math teacher, each game aims to bring together fun and genuine understanding.',aboutLink:'Discover the games',
      connectKicker:'STAY CURIOUS',connectTitle:'New games. New ideas.',connectSubtitle:'We plan to share game tutorials on YouTube and new releases on X.',youtubeDesc:'Watch how to play and discover the math behind the games.',xDesc:'Follow upcoming games and behind-the-scenes updates.',comingSoonSocial:'Coming soon',visitChannel:'Visit channel ↗',visitX:'Visit X ↗',footerMessage:'Play your way to an “Aha!” moment.',footerNote:'An independent learning site, not an official school website.',backToTop:'Back to top ↑'
    },
    zh: {
      navApps:'探索游戏',navAbout:'关于 MANATY LAB',headerPlay:'开始体验',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'在游戏中探索，<br>发现数学的<span class="highlight">“原来如此！”</span>',
      heroDesc:'动手操作、反复尝试、主动发现。这里有让数学变得更有趣的免费学习游戏。',heroExplore:'探索数学游戏',heroTrust:'免费体验 · 无需注册 · 手机电脑皆可',
      miniLabel:'先来试一试',miniReset:'重来',miniCorrect:'答对了！',miniPosition:'当前位置',heroVisualNote:'在游戏中找到答案。',
      searchLabel:'搜索游戏',searchPlaceholder:'按游戏或数学主题搜索',filterAll:'全部',gradeJ1:'初一',gradeJ2:'初二',gradeJ3:'初三',gradeHigh:'高中数学',
      source:'代码',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'让数学多一点<br><span>游戏的乐趣。</span>',aboutBody:'MANATY LAB 是独立制作的数学学习应用项目。我们以一线数学教师的教学经验为基础，陆续推出既有趣又能帮助理解数学概念的小游戏。',aboutLink:'探索游戏',
      connectKicker:'STAY CURIOUS',connectTitle:'新玩法，新作品。',connectSubtitle:'我们计划通过 YouTube 介绍玩法，并在 X 发布新应用动态。',youtubeDesc:'通过视频学习游戏玩法和背后的数学原理。',xDesc:'了解最新作品与制作过程。',comingSoonSocial:'筹备中',visitChannel:'访问频道 ↗',visitX:'访问 X ↗',footerMessage:'在游戏中发现数学的“原来如此！”',footerNote:'本网站为独立运营的学习平台，并非学校官方网站。',backToTop:'返回顶部 ↑'
    }
  };
  function artSvg(type){
    const base='viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"';
    if(type==='mole')return `<svg ${base}><circle cx="304" cy="104" r="112" fill="#b5e4d0"/><path d="M45 115 112 36 169 115Z M76 186 143 107 200 186Z" fill="none" stroke="#2b6757" stroke-width="7" stroke-linejoin="round"/><path d="M45 115 L76 186 M112 36 L143 107 M169 115 L200 186" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="10 8"/><circle cx="112" cy="36" r="8" fill="#ff995f"/><circle cx="143" cy="107" r="8" fill="#ff995f"/><circle cx="76" cy="186" r="8" fill="#ff995f"/><ellipse cx="291" cy="156" rx="45" ry="28" fill="#ac795b"/><circle cx="292" cy="117" r="40" fill="#bb8b68" stroke="#3d6255" stroke-width="4"/><circle cx="281" cy="112" r="4" fill="#213c35"/><circle cx="305" cy="112" r="4" fill="#213c35"/><path d="M279 128 Q292 141 307 128" stroke="#24433b" stroke-width="4" fill="none" stroke-linecap="round"/><text x="287" y="204" font-family="system-ui" font-size="23" font-weight="900" fill="#1b5949">≅</text><path d="M324 42 342 27" stroke="#ed945c" stroke-width="6" stroke-linecap="round"/></svg>`;
    if(type==='detective')return `<svg ${base}><circle cx="278" cy="95" r="114" fill="#d1c4ed"/><path d="M66 174 172 42 291 174Z" fill="#f8f3ff" stroke="#60518d" stroke-width="6"/><path d="M172 42V174" stroke="#b0a2d5" stroke-width="4" stroke-dasharray="7 7"/><circle cx="172" cy="42" r="7" fill="#ffab79"/><circle cx="66" cy="174" r="7" fill="#ffab79"/><circle cx="291" cy="174" r="7" fill="#ffab79"/><circle cx="284" cy="121" r="50" fill="#fafaff" stroke="#6a5890" stroke-width="12"/><path d="m319 157 49 49" stroke="#6a5890" stroke-width="17" stroke-linecap="round"/><text x="280" y="133" text-anchor="middle" font-family="system-ui" font-weight="950" font-size="45" fill="#e4936f">?</text></svg>`;
    if(type==='blocks')return `<svg ${base}><circle cx="292" cy="94" r="105" fill="#ffd3c1"/><g stroke="#b9624c" stroke-width="4" stroke-linejoin="round"><rect x="66" y="119" width="88" height="65" rx="12" fill="#ffad86"/><rect x="157" y="119" width="88" height="65" rx="12" fill="#fdd8ac"/><rect x="249" y="119" width="88" height="65" rx="12" fill="#ffe6db"/><rect x="112" y="47" width="88" height="65" rx="12" fill="#fff3dc"/><rect x="204" y="47" width="88" height="65" rx="12" fill="#ffc3ad"/></g><g text-anchor="middle" font-family="system-ui" font-weight="950" font-size="35" fill="#9a5946"><text x="110" y="163">a</text><text x="201" y="163">+</text><text x="293" y="163">b</text><text x="155" y="91">=</text><text x="247" y="91">?</text></g><path d="m346 34 9 -18 m13 28 14 -3" stroke="#f29a71" stroke-width="6" stroke-linecap="round"/></svg>`;
    if(type==='trig')return `<svg ${base}><circle cx="260" cy="109" r="99" fill="#c8e5f6"/><circle cx="212" cy="112" r="74" fill="none" stroke="#2c7196" stroke-width="5"/><path d="M49 112H369M212 19V206" stroke="#518eac" stroke-width="3"/><path d="M212 112 271.2 67.6" stroke="#ef986b" stroke-width="8" stroke-linecap="round"/><path d="M212 112 H271.2 V67.6" stroke="#fff" stroke-width="5" fill="none"/><circle cx="271.2" cy="67.6" r="9" fill="#f28c60"/><path d="M237 112 A25 25 0 0 0 232 97" fill="none" stroke="#faaf78" stroke-width="4"/><text x="281" y="99" font-family="system-ui" font-weight="950" font-size="24" fill="#266c91">sin</text><text x="222" y="142" font-family="system-ui" font-weight="950" font-size="24" fill="#266c91">cos</text></svg>`;
    if(type==='log'){
      const curve=Array.from({length:40},(_,i)=>{
        const x=.25+i*.15;
        return `${128+34*x},${145-35*Math.log2(x)}`;
      }).join(' ');
      return `<svg ${base}><circle cx="278" cy="92" r="103" fill="#f9d97a" opacity=".65"/><path d="M71 145H365M128 220V23" stroke="#7f6a32" stroke-width="3"/><polyline points="${curve}" fill="none" stroke="#a85835" stroke-width="6" stroke-linejoin="round"/><circle cx="162" cy="145" r="5" fill="#a85835"/><circle cx="196" cy="110" r="5" fill="#a85835"/><circle cx="264" cy="75" r="5" fill="#a85835"/><text x="198" y="188" font-family="system-ui" font-size="23" font-weight="800" fill="#735423">y = log₂ x</text></svg>`;
    }
    return `<svg ${base}><circle cx="280" cy="98" r="103" fill="#b9e3ca"/><path d="M33 146H370" stroke="#2b6156" stroke-width="6" stroke-linecap="round"/><g font-family="system-ui" font-weight="900" font-size="20" fill="#2e6559" text-anchor="middle"><text x="78" y="181">−4</text><text x="145" y="181">−2</text><text x="212" y="181">0</text><text x="279" y="181">+2</text><text x="346" y="181">+4</text></g><path d="M78 134V158M145 134V158M212 129V163M279 134V158M346 134V158" stroke="#2f695d" stroke-width="4"/><path d="M145 95 Q212 15 279 95" fill="none" stroke="#ed986c" stroke-width="8" stroke-dasharray="10 11" stroke-linecap="round"/><circle cx="146" cy="145" r="30" fill="#ffa46f" stroke="#224943" stroke-width="5"/><circle cx="136" cy="137" r="3.7" fill="#224943"/><circle cx="157" cy="137" r="3.7" fill="#224943"/><path d="M134 152Q146 162 159 151" stroke="#224943" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="m143 112 -11 -15m15 15 12 -14" stroke="#224943" stroke-width="4" stroke-linecap="round"/></svg>`;
  }
  const ns='http://www.w3.org/2000/svg';
  function drawMini(){
    const ticks=$('miniTicks'),runner=$('miniRunner');ticks.replaceChildren();runner.replaceChildren();
    const x=n=>34+(n+5)*40.2;
    for(let n=-5;n<=5;n++){
      const line=document.createElementNS(ns,'line');line.setAttribute('x1',x(n));line.setAttribute('x2',x(n));line.setAttribute('y1','77');line.setAttribute('y2','93');line.setAttribute('stroke','#53887b');line.setAttribute('stroke-width',n===0?'3.5':'2');ticks.append(line);
      if(n%2===0){const t=document.createElementNS(ns,'text');t.setAttribute('x',x(n));t.setAttribute('y','117');t.setAttribute('text-anchor','middle');t.setAttribute('font-size','14');t.setAttribute('font-weight','850');t.setAttribute('font-family','system-ui,sans-serif');t.setAttribute('fill','#426f63');t.textContent=n>0?'+'+n:String(n).replace('-','−');ticks.append(t);}
    }
    const px=x(state.position);
    const c=document.createElementNS(ns,'circle');c.setAttribute('cx',px);c.setAttribute('cy','84');c.setAttribute('r','23');c.setAttribute('fill','#ffa271');c.setAttribute('stroke','#235850');c.setAttribute('stroke-width','4');runner.append(c);
    const g=document.createElementNS(ns,'g');g.setAttribute('stroke','#244b45');g.setAttribute('stroke-width','3');g.setAttribute('fill','none');g.setAttribute('stroke-linecap','round');
    const hair=document.createElementNS(ns,'path');hair.setAttribute('d',`M${px} 60l-7 -12m8 12 8 -12`);g.append(hair);const smile=document.createElementNS(ns,'path');smile.setAttribute('d',`M${px-10} 89q10 11 20 0`);g.append(smile);runner.append(g);
    for(const off of [-8,8]){const eye=document.createElementNS(ns,'circle');eye.setAttribute('cx',px+off);eye.setAttribute('cy','78');eye.setAttribute('r','2.7');eye.setAttribute('fill','#244b45');runner.append(eye);}
    $('miniStatus').textContent=state.position>0?'+'+state.position:String(state.position).replace('-','−');
    const right=state.position===1;$('miniResult').textContent=right?'1':'？';$('miniResult').style.color=right?'#1a8264':'#c77b59';
    $('miniTrack').setAttribute('aria-label',text('miniPosition')+': '+state.position+(right?' — '+text('miniCorrect'):''));
    $('miniStatus').textContent=text('miniPosition')+': '+$('miniStatus').textContent+(right?' · '+text('miniCorrect'):'');
  }

  const messages = {
    ja: {
      skip:'教材一覧へスキップ', navigation:'メインナビゲーション', home:'MANATY LAB トップ', language:'表示言語',
      news:'新着・アップデート', noNews:'日付を確認できた新着情報はありません。', newRelease:'新規公開', updated:'アップデート', find:'教材を探す', library:'教材アプリ一覧',
      byGrade:'学年から探す', byUnit:'単元から探す', byPurpose:'学習目的から探す', sortLabel:'表示順', recommended:'掲載順', newest:'新着順', latest:'更新順',
      favorites:'お気に入り', onlyPublished:'公開済みのみ', clear:'条件をクリア', count:'検索結果 {matches}件 / 公開教材 全{total}本',
      retry:'再試行', more:'さらに表示', loading:'教材一覧を読み込み中です。', fetchError:'教材一覧を読み込めませんでした。接続を確認して再試行してください。', noMatches:'条件に合う教材がありません。検索条件を変更してください。',
      available:'公開済み', coming:'準備中', details:'詳細を見る', close:'閉じる', addFavorite:'{name}をお気に入りに追加', removeFavorite:'{name}をお気に入りから削除', storageError:'このブラウザではお気に入りを保存できません。', launch:'教材を開く', openApp:'教材を開く（新しいタブ）',
      teachers:'先生方へ', teacherBody:'教材の詳細から、前提知識や授業での活用例、名前入力や賞状の有無を確認できます。',
      learning:'学べること', game:'ゲーム内容', stage:'推奨する学習段階', languages:'教材の対応言語', devices:'対応端末', duration:'所要時間の目安', classroom:'授業での活用例', certificate:'賞状・認定証', nameInput:'名前入力', version:'バージョン', history:'更新履歴', variants:'バリエーション',
      unknown:'未確認', yes:'あり', no:'なし', langJa:'日本語', langEn:'英語', langZh:'中国語（簡体字）', reference:'出典', left:'左へ1進む', right:'右へ1進む', miniInstruction:'−2から右に3つ進むと？'
    },
    en: {
      skip:'Skip to the library', navigation:'Main navigation', home:'MANATY LAB home', language:'Site language',
      news:'New & updated', noNews:'No dated announcements are available.', newRelease:'New release', updated:'Update', find:'Find a game', library:'Math game library',
      byGrade:'Browse by grade', byUnit:'Browse by topic', byPurpose:'Browse by goal', sortLabel:'Sort by', recommended:'Catalog order', newest:'Newest releases', latest:'Latest updates',
      favorites:'Favorites', onlyPublished:'Published only', clear:'Clear filters', count:'{matches} results / {total} published games',
      retry:'Try again', more:'Show more', loading:'Loading the game library…', fetchError:'The game library could not load. Check your connection and try again.', noMatches:'No games match these filters. Try changing your selection.',
      available:'Published', coming:'In preparation', details:'View details', close:'Close', addFavorite:'Add {name} to favorites', removeFavorite:'Remove {name} from favorites', storageError:'This browser cannot save favorites.', launch:'Open game', openApp:'Open game (new tab)',
      teachers:'For teachers', teacherBody:'Open game details for prerequisites, classroom ideas, and information on names and certificates.',
      learning:'What you’ll learn', game:'How it works', stage:'Recommended learning stage', languages:'Game languages', devices:'Supported devices', duration:'Approximate time', classroom:'Classroom idea', certificate:'Awards and certificates', nameInput:'Name entry', version:'Version', history:'Update history', variants:'Variants',
      unknown:'Unverified', yes:'Yes', no:'No', langJa:'Japanese', langEn:'English', langZh:'Simplified Chinese', reference:'Source', left:'Move one step left', right:'Move one step right', miniInstruction:'Start at −2 and take 3 steps right. Where do you land?'
    },
    zh: {
      skip:'跳转到教材列表', navigation:'主导航', home:'MANATY LAB 首页', language:'网站语言',
      news:'新上线与更新', noNews:'暂无日期已确认的动态。', newRelease:'新上线', updated:'更新', find:'查找教材', library:'数学教材列表',
      byGrade:'按年级查找', byUnit:'按单元查找', byPurpose:'按学习目标查找', sortLabel:'排序', recommended:'目录顺序', newest:'最新发布', latest:'最近更新',
      favorites:'收藏', onlyPublished:'仅显示已发布', clear:'清除筛选', count:'找到 {matches} 项 / 已发布 {total} 项',
      retry:'重试', more:'显示更多', loading:'正在加载教材列表…', fetchError:'无法加载教材列表。请检查网络连接后重试。', noMatches:'没有符合条件的教材，请调整筛选条件。',
      available:'已发布', coming:'筹备中', details:'查看详情', close:'关闭', addFavorite:'收藏{name}', removeFavorite:'取消收藏{name}', storageError:'此浏览器无法保存收藏。', launch:'打开教材', openApp:'打开教材（新标签页）',
      teachers:'教师专区', teacherBody:'打开教材详情，查看所需的基础知识、课堂活动建议，以及姓名输入和证书信息。',
      learning:'学习内容', game:'玩法', stage:'推荐学习阶段', languages:'教材支持的语言', devices:'支持设备', duration:'预计用时', classroom:'课堂活动建议', certificate:'奖状与证书', nameInput:'姓名输入', version:'版本', history:'更新记录', variants:'版本变体',
      unknown:'尚未确认', yes:'有', no:'无', langJa:'日语', langEn:'英语', langZh:'简体中文', reference:'来源', left:'向左移动一步', right:'向右移动一步', miniInstruction:'从 −2 向右走 3 步，会到哪里？'
    }
  };
  const grades = ['j1','j2','j3','high'];
  const socialUrls = {youtube:null,x:null};
  const languageLabels = {ja:'langJa',en:'langEn',zh:'langZh'};
  const pageSize = 12;
  const state = {
    lang:'ja', position:-2, status:'loading', apps:[], units:new Map(), purposes:new Map(),
    favorites:new Set(), visible:pageSize
  };
  const filterIds = ['grade','unit','purpose','sort','searchInput','onlyFavorites','onlyPublished','resetFilters'];
  function text(key, values = {}) {
    return (messages[state.lang][key] ?? phrases[state.lang][key] ?? key)
      .replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
  }
  function esc(value) {
    const entities = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
    return String(value ?? '').replace(/[&<>"']/g, character => entities[character]);
  }
  function local(value) { return value?.[state.lang] ?? value?.ja ?? ''; }
  function gradeLabel(grade) { return text(grade === 'high' ? 'gradeHigh' : 'grade' + grade.toUpperCase()); }
  function normalize(value) { return value.normalize('NFKC').toLowerCase().trim(); }
  function safeUrl(value) {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; }
    catch { return ''; }
  }
  function dateLabel(value) {
    return new Intl.DateTimeFormat(document.documentElement.lang, {dateStyle:'medium', timeZone:'UTC'}).format(new Date(value + 'T00:00:00Z'));
  }
  function appLink(url, label, className = '', accessibleLabel = '') {
    const href = safeUrl(url);
    return href ? `<a class="${className}" href="${esc(href)}" target="_blank" rel="noopener noreferrer"${accessibleLabel ? ` aria-label="${esc(accessibleLabel)}"` : ''}>${esc(label)}</a>` : '';
  }
  function languageList(app) {
    return app.languages.map(code => text(languageLabels[code])).join(' / ') || text('unknown');
  }
  function renderTranslations() {
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : state.lang;
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = text(el.dataset.i18n));
    document.querySelectorAll('[data-i18n-html]').forEach(el => el.innerHTML = text(el.dataset.i18nHtml));
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = text(el.dataset.i18nPlaceholder));
    document.querySelectorAll('[data-label]').forEach(el => el.setAttribute('aria-label', text(el.dataset.label)));
    document.querySelectorAll('[data-lang]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.lang === state.lang)));
    for (const [key,value] of Object.entries(socialUrls)) {
      const href = safeUrl(value);
      $(key + 'Tag').hidden = Boolean(href);
      const link = $(key + 'Link');
      link.hidden = !href;
      if (href) link.href = href;
    }
    drawMini();
  }
  function replaceOptions(select, options) {
    const previous = select.value;
    select.replaceChildren(...options);
    if (Array.from(select.options).some(option => option.value === previous)) select.value = previous;
  }
  function renderFilters() {
    replaceOptions($('grade'), [new Option(text('filterAll'),''), ...grades.map(grade => new Option(gradeLabel(grade), grade))]);
    const selectedGrade = $('grade').value;
    const groups = grades.filter(grade => !selectedGrade || selectedGrade === grade).map(grade => {
      const group = document.createElement('optgroup');
      group.label = gradeLabel(grade);
      for (const unit of state.units.values()) {
        if (unit.grade === grade) group.append(new Option(local(unit.label), unit.id));
      }
      return group;
    });
    replaceOptions($('unit'), [new Option(text('filterAll'),''), ...groups]);
    replaceOptions($('purpose'), [new Option(text('filterAll'),''), ...Array.from(state.purposes.values(), p => new Option(local(p.label), p.id))]);
    replaceOptions($('sort'), ['recommended','newest','latest'].map(key => new Option(text(key), key)));
  }
  function card(app) {
    const available = app.status === 'available';
    const favorite = state.favorites.has(app.id);
    return `<article class="app-card" data-app="${esc(app.id)}">
      <div class="app-art art-${esc(app.thumbnail.accent)}">
        ${artSvg(app.thumbnail.illustration)}
        <span class="status-chip ${available ? 'published' : ''}">${esc(text(available ? 'available' : 'coming'))}</span>
        <button type="button" class="favorite" data-favorite="${esc(app.id)}" aria-pressed="${favorite}" aria-label="${esc(text(favorite ? 'removeFavorite' : 'addFavorite',{name:app.title}))}"><span aria-hidden="true">${favorite ? '★' : '☆'}</span></button>
      </div>
      <div class="app-content">
        <div class="app-meta">${esc(app.grades.map(gradeLabel).join(' / '))} · ${esc(app.units.map(id => local(state.units.get(id).label)).join(' / '))}</div>
        <h3>${esc(app.title)}</h3>
        <p>${esc(local(app.description))}</p>
        <ul class="tags">${app.purposes.map(id => `<li>${esc(local(state.purposes.get(id).label))}</li>`).join('')}</ul>
        <p class="game-language">${esc(text('languages'))} · ${esc(languageList(app))}</p>
        <div class="app-actions">
          ${available ? appLink(app.url,text('launch'),'app-play',text('openApp')) : ''}
          <button type="button" class="quiet" data-detail="${esc(app.id)}">${esc(text('details'))}</button>
        </div>
      </div>
    </article>`;
  }
  function matchApps() {
    const grade = $('grade').value;
    const unit = $('unit').value;
    const purpose = $('purpose').value;
    const tokens = normalize($('searchInput').value).split(/\s+/).filter(Boolean);
    const dateKey = {newest:'publishedAt',latest:'updatedAt'}[$('sort').value];
    return state.apps.filter(app =>
      (!$('onlyPublished').checked || app.status === 'available') &&
      (!$('onlyFavorites').checked || state.favorites.has(app.id)) &&
      (!grade || app.grades.includes(grade)) && (!unit || app.units.includes(unit)) &&
      (!purpose || app.purposes.includes(purpose)) &&
      tokens.every(token => app.search.includes(token))
    ).sort((a,b) => Number(b.status === 'available') - Number(a.status === 'available') ||
      (dateKey ? (b[dateKey] ?? '').localeCompare(a[dateKey] ?? '') : 0));
  }
  function renderCatalog({append = false} = {}) {
    const ready = state.status === 'ready';
    const matches = ready ? matchApps() : [];
    const status = ready ? (matches.length ? '' : text('noMatches')) : text(state.status === 'error' ? 'fetchError' : 'loading');
    filterIds.forEach(id => $(id).disabled = !ready);
    $('catalogStatus').textContent = status;
    $('catalogStatus').hidden = !status;
    $('retry').hidden = state.status !== 'error';
    $('appCount').hidden = !ready;
    $('appCount').textContent = ready ? text('count',{matches:matches.length,total:state.apps.filter(app => app.status === 'available').length}) : '';
    const offset = append ? $('appGrid').children.length : 0;
    const markup = matches.slice(offset,state.visible).map(card).join('');
    if (append) $('appGrid').insertAdjacentHTML('beforeend',markup);
    else $('appGrid').innerHTML = markup;
    $('more').hidden = matches.length <= state.visible;
    if (append && matches.length > offset) $('appGrid').children[offset].querySelector('button').focus();
  }
  function renderNews() {
    const events = state.apps.filter(app => app.status === 'available').flatMap(app => [
      {app, date:app.publishedAt, label:'newRelease'},
      {app, date:app.updatedAt, label:'updated'}
    ]).filter(event => event.date).sort((a,b) => b.date.localeCompare(a.date)).slice(0,3);
    $('newsList').innerHTML = events.length ? events.map(({app,date,label}) =>
      `<button type="button" class="news-card" data-detail="${esc(app.id)}"><span><time datetime="${esc(date)}">${esc(dateLabel(date))}</time> · <span class="news-label">${esc(text(label))}</span></span><strong>${esc(app.title)}</strong></button>`
    ).join('') : `<p>${esc(text(state.status === 'loading' ? 'loading' : state.status === 'error' ? 'fetchError' : 'noNews'))}</p>`;
  }
  function renderDetail(app) {
    $('detailTitle').textContent = app.title;
    const details = ['learning','game','stage','languages','devices','duration','classroom','certificate','nameInput','version'];
    const values = {...app.details,languages:languageList(app),version:app.version};
    const row = key => {
      const value = values[key];
      const label = typeof value === 'boolean' ? text(value ? 'yes' : 'no') : (typeof value === 'string' ? value : local(value));
      return `<div><dt>${esc(text(key))}</dt><dd>${esc(label || text('unknown'))}</dd></div>`;
    };
    const history = [...app.history].sort((a,b) => b.date.localeCompare(a.date)).map(entry =>
      `<li><time datetime="${esc(entry.date)}">${esc(dateLabel(entry.date))}</time> · ${esc(local(entry.summary))} ${appLink(entry.sourceUrl,text('reference'))}</li>`
    ).join('');
    const available = app.status === 'available';
    const variants = (available ? app.variants : []).map(variant => `<li>${appLink(variant.url,local(variant.label))}</li>`).join('');
    $('detailBody').innerHTML = `<dl class="detail-grid">${details.map(row).join('')}</dl>
      ${history ? `<h3>${esc(text('history'))}</h3><ul>${history}</ul>` : ''}
      ${variants ? `<h3>${esc(text('variants'))}</h3><ul>${variants}</ul>` : ''}
      ${available ? `<div class="detail-actions">${appLink(app.url,text('launch'),'app-play',text('openApp'))} ${appLink(app.sourceUrl,text('source'))}</div>` : ''}`;
  }
  async function loadCatalog() {
    state.status = 'loading';
    renderNews();
    renderCatalog();
    try {
      const response = await fetch('./apps.json', {cache:'no-cache'});
      if (!response.ok) throw new Error('Catalog unavailable');
      const {version, units, purposes, apps} = await response.json();
      if (version !== 3 || !Array.isArray(units) || !Array.isArray(purposes) || !Array.isArray(apps)) throw new Error('Invalid catalog');
      const unitMap = new Map(units.map(unit => [unit.id,unit]));
      const purposeMap = new Map(purposes.map(purpose => [purpose.id,purpose]));
      const indexed = apps.map(app => ({
        ...app, search:normalize([app.title,...Object.values(app.description),...app.grades.flatMap(grade =>
          Object.values(phrases).map(dict => dict[grade === 'high' ? 'gradeHigh' : 'grade' + grade.toUpperCase()])),
          ...app.units.flatMap(id => Object.values(unitMap.get(id).label)),
          ...app.purposes.flatMap(id => Object.values(purposeMap.get(id).label)),
          ...Object.values(app.keywords ?? {}).flat()].join(' '))
      }));
      state.units = unitMap;
      state.purposes = purposeMap;
      state.apps = indexed;
      state.status = 'ready';
      renderFilters();
      renderNews();
      renderCatalog();
    } catch (error) {
      console.error('Unable to load the catalog:',error);
      state.status = 'error';
      renderNews();
      renderCatalog();
    }
  }
  function resetFilters() {
    $('filters').reset();
    for (const id of ['grade','unit','purpose','sort']) $(id).selectedIndex = 0;
    renderFilters();
    state.visible = pageSize;
    renderCatalog();
  }
  function setLang(lang) {
    state.lang = lang;
    try { localStorage.setItem('manaty-lab-lang',lang); } catch {}
    renderTranslations();
    renderFilters();
    renderNews();
    renderCatalog();
  }
  function setFavorite(app, button) {
    if (state.favorites.has(app.id)) state.favorites.delete(app.id);
    else state.favorites.add(app.id);
    try { localStorage.setItem('manaty-lab-favorites',JSON.stringify([...state.favorites])); }
    catch {
      if (state.favorites.has(app.id)) state.favorites.delete(app.id);
      else state.favorites.add(app.id);
      $('catalogStatus').hidden = false;
      $('catalogStatus').textContent = text('storageError');
      return;
    }
    if ($('onlyFavorites').checked) {
      renderCatalog();
      ($('appGrid').querySelector('.favorite') ?? $('onlyFavorites')).focus();
      return;
    }
    const favorite = state.favorites.has(app.id);
    button.setAttribute('aria-pressed',String(favorite));
    button.setAttribute('aria-label',text(favorite ? 'removeFavorite' : 'addFavorite',{name:app.title}));
    button.firstElementChild.textContent = favorite ? '★' : '☆';
  }
  function installEvents() {
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLang(button.dataset.lang)));
    $('filters').addEventListener('submit',event => event.preventDefault());
    $('filters').addEventListener('input',event => {
      if (event.target.id === 'grade') renderFilters();
      state.visible = pageSize;
      renderCatalog();
    });
    $('resetFilters').addEventListener('click',resetFilters);
    $('retry').addEventListener('click',async () => {
      await loadCatalog();
      if (state.status === 'ready') $('searchInput').focus();
      else $('retry').focus();
    });
    $('more').addEventListener('click',() => {
      state.visible += pageSize;
      renderCatalog({append:true});
    });
    $('miniLeft').addEventListener('click',() => step(-1));
    $('miniRight').addEventListener('click',() => step(1));
    $('miniReset').addEventListener('click',() => { state.position = -2; drawMini(); });
    document.querySelector('.mini-controls').addEventListener('keydown',event => {
      if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      step(event.key === 'ArrowLeft' ? -1 : 1);
    });
    document.addEventListener('click',event => {
      const button = event.target.closest('[data-detail],[data-favorite]');
      if (!button) return;
      const app = state.apps.find(app => app.id === (button.dataset.detail ?? button.dataset.favorite));
      if (!app) return;
      if (button.dataset.favorite) return setFavorite(app,button);
      renderDetail(app);
      $('details').showModal();
    });
  }
  function step(move) {
    state.position = Math.max(-5,Math.min(5,state.position + move));
    drawMini();
  }
  try {
    const lang = localStorage.getItem('manaty-lab-lang');
    if (Object.hasOwn(messages,lang)) state.lang = lang;
    const saved = JSON.parse(localStorage.getItem('manaty-lab-favorites'));
    if (Array.isArray(saved)) state.favorites = new Set(saved.filter(id => typeof id === 'string'));
  } catch {}
  installEvents();
  renderTranslations();
  loadCatalog();
})();
