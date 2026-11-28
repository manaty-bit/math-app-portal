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
      connectKicker:'STAY CURIOUS',connectTitle:'遊び方も、新作も。',connectSubtitle:'YouTubeで使い方を、Xで新しいアプリのお知らせを発信していく予定です。',youtubeDesc:'ゲームの使い方や、数学の「なるほど！」を動画で紹介していきます。',xDesc:'新作アプリや、制作の裏側を気軽にお知らせしていきます。',comingSoonSocial:'準備中',visitChannel:'チャンネルを見る ↗',visitX:'Xを見る ↗',footerMessage:'遊びから生まれる、数学の「わかった！」',footerNote:'個人運営の学習アプリサイトです。学校の公式サイトではありません。',termsLink:"利用条件・著作権",backToTop:'ページの先頭へ ↑'
    },
    en: {
      navApps:'Explore games',navAbout:'About MANATY LAB',headerPlay:'Start playing',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'Play your way to<br>an <span class="highlight">“Aha!” moment.</span>',
      heroDesc:'Touch, experiment, and discover. Find free math games that make learning surprisingly fun.',heroExplore:'Explore games',heroTrust:'Free to play · No account · Phone or desktop',
      miniLabel:'TRY IT OUT',miniReset:'Reset',miniCorrect:'You got it!',miniPosition:'Position',heroVisualNote:'Discover answers through play.',
      searchLabel:'Search games',searchPlaceholder:'Search by game or topic',filterAll:'All',gradeJ1:'Grade 7',gradeJ2:'Grade 8',gradeJ3:'Grade 9',gradeHigh:'High school',
      source:'Code',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'A little more<br><span>play in math.</span>',aboutBody:'MANATY LAB is an independent collection of educational math apps. Built from the perspective of an active math teacher, each game aims to bring together fun and genuine understanding.',aboutLink:'Discover the games',
      connectKicker:'STAY CURIOUS',connectTitle:'New games. New ideas.',connectSubtitle:'We plan to share game tutorials on YouTube and new releases on X.',youtubeDesc:'Watch how to play and discover the math behind the games.',xDesc:'Follow upcoming games and behind-the-scenes updates.',comingSoonSocial:'Coming soon',visitChannel:'Visit channel ↗',visitX:'Visit X ↗',footerMessage:'Play your way to an “Aha!” moment.',footerNote:'An independent learning site, not an official school website.',termsLink:"Terms of use & copyright",backToTop:'Back to top ↑'
    },
    zh: {
      navApps:'探索游戏',navAbout:'关于 MANATY LAB',headerPlay:'开始体验',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'在游戏中探索，<br>发现数学的<span class="highlight">“原来如此！”</span>',
      heroDesc:'动手操作、反复尝试、主动发现。这里有让数学变得更有趣的免费学习游戏。',heroExplore:'探索数学游戏',heroTrust:'免费体验 · 无需注册 · 手机电脑皆可',
      miniLabel:'先来试一试',miniReset:'重来',miniCorrect:'答对了！',miniPosition:'当前位置',heroVisualNote:'在游戏中找到答案。',
      searchLabel:'搜索游戏',searchPlaceholder:'按游戏或数学主题搜索',filterAll:'全部',gradeJ1:'初一',gradeJ2:'初二',gradeJ3:'初三',gradeHigh:'高中数学',
      source:'代码',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'让数学多一点<br><span>游戏的乐趣。</span>',aboutBody:'MANATY LAB 是独立制作的数学学习应用项目。我们以一线数学教师的教学经验为基础，陆续推出既有趣又能帮助理解数学概念的小游戏。',aboutLink:'探索游戏',
      connectKicker:'STAY CURIOUS',connectTitle:'新玩法，新作品。',connectSubtitle:'我们计划通过 YouTube 介绍玩法，并在 X 发布新应用动态。',youtubeDesc:'通过视频学习游戏玩法和背后的数学原理。',xDesc:'了解最新作品与制作过程。',comingSoonSocial:'筹备中',visitChannel:'访问频道 ↗',visitX:'访问 X ↗',footerMessage:'在游戏中发现数学的“原来如此！”',footerNote:'本网站为独立运营的学习平台，并非学校官方网站。',termsLink:"使用条款与著作权",backToTop:'返回顶部 ↑'
    }
  };

  // Editorial copy; existing translation and catalog mechanisms remain unchanged.
  const editorialCopy = {
  "ja": {
    "bookNav": "著書のご案内",
    "bookKicker": "BOOK NEWS / 著書のご案内",
    "bookMeta": "鈴木真人 著 · くろしお出版 · 2026年12月25日発売予定",
    "bookAction": "書籍の詳細 ↗",
    "heroTitle": "数学に、<br><span class=\"highlight\">遊び心を。</span>",
    "heroDesc": "現役数学教員がつくる、無料の学習教材。授業の導入から日々の復習まで、数学の「わかった！」を教室に。",
    "heroExplore": "教材を探す",
    "heroEyebrow": "PLAY. LEARN. DISCOVER."
  },
  "en": {
    "bookNav": "Books",
    "bookKicker": "BOOK NEWS",
    "bookMeta": "Masato Suzuki · Kuroshio Publishers · Scheduled for December 25, 2026 · Japanese edition",
    "bookAction": "Book details ↗",
    "heroTitle": "A little more<br><span class=\"highlight\">play in math.</span>",
    "heroDesc": "Free math resources created by a practicing teacher, for classroom introductions, daily practice and independent learning.",
    "heroExplore": "Explore resources",
    "heroEyebrow": "PLAY. LEARN. DISCOVER."
  },
  "zh": {
    "bookNav": "图书介绍",
    "bookKicker": "BOOK NEWS / 图书介绍",
    "bookMeta": "铃木真人 著 · Kuroshio 出版社 · 预计2026年12月25日发售（日文版）",
    "bookAction": "图书详情 ↗",
    "heroTitle": "让数学多一点<br><span class=\"highlight\">游戏的乐趣。</span>",
    "heroDesc": "由一线数学教师制作的免费学习教材，适用于课堂导入、日常练习和自主学习。",
    "heroExplore": "探索教材",
    "heroEyebrow": "PLAY. LEARN. DISCOVER."
  }
};
  for (const lang of Object.keys(editorialCopy)) Object.assign(phrases[lang], editorialCopy[lang]);
  function artSvg(type){
    const base='viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"';
    if(type==='twincipher')return `<svg ${base}><rect x="24" y="18" width="352" height="184" rx="20" fill="#30275f"/><rect x="44" y="34" width="312" height="152" rx="14" fill="#f9f8ff"/><path d="M78 52q-12 0-12 16v28q0 14-12 14 12 0 12 14v28q0 16 12 16" stroke="#6555d9" stroke-width="4" fill="none"/><g font-family="Cambria,serif" font-size="29" font-weight="700" fill="#25334f"><text x="91" y="78"><tspan fill="#1476cc" font-style="italic">2x</tspan><tspan> + </tspan><tspan fill="#b54477" font-style="italic">y</tspan><tspan> = 7</tspan></text><text x="91" y="116"><tspan fill="#1476cc" font-style="italic">x</tspan><tspan> − </tspan><tspan fill="#b54477" font-style="italic">y</tspan><tspan> = 2</tspan></text><path d="M94 131h191" stroke="#6555d9" stroke-width="2"/><text x="91" y="162">3<tspan font-style="italic" fill="#1476cc">x</tspan> = 9</text></g><circle cx="322" cy="152" r="18" fill="#d4f5e4"/><path d="m313 152 6 6 12-13" stroke="#218466" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><g font-family="sans-serif" font-size="13" fill="#6555d9" font-weight="700"><text x="302" y="78">①</text><text x="302" y="116">②</text></g></svg>`;
    if(type==='linepilot')return `<svg ${base}><defs><clipPath id="lp-plot"><rect x="33" y="14" width="334" height="192" rx="14"/></clipPath></defs><rect x="33" y="14" width="334" height="192" rx="14" fill="#112b48"/><g clip-path="url(#lp-plot)"><path d="M40 30H360M40 50H360M40 70H360M40 90H360M40 110H360M40 130H360M40 150H360M40 170H360M40 190H360M60 20V210M80 20V210M100 20V210M120 20V210M140 20V210M160 20V210M180 20V210M200 20V210M220 20V210M240 20V210M260 20V210M280 20V210M300 20V210M320 20V210M340 20V210" stroke="#31506a" stroke-width="1"/><path d="M40 130H360M180 20V210" stroke="#a9c8e0" stroke-width="2"/><path d="M54 200L350 52" stroke="#67e8f9" stroke-width="11" opacity=".2"/><path d="M54 200L350 52" stroke="#67e8f9" stroke-width="4"/><g fill="#112b48" stroke="#ffd17e" stroke-width="3"><circle cx="94" cy="180" r="12"/><circle cx="214" cy="120" r="12"/><circle cx="334" cy="60" r="12"/></g><g fill="#ffd17e"><circle cx="94" cy="180" r="4"/><circle cx="214" cy="120" r="4"/><circle cx="334" cy="60" r="4"/></g><path d="M72 45v38m-6-8 6 8 6-8M298 184h-38m8-6-8 6 8 6" stroke="#fb9b87" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="72" cy="45" r="5" fill="#fb9b87"/><circle cx="298" cy="184" r="5" fill="#fb9b87"/><text x="345" y="122" font-family="serif" font-style="italic" font-size="17" fill="#d9ecf7">x</text><text x="188" y="35" font-family="serif" font-style="italic" font-size="17" fill="#d9ecf7">y</text><text x="168" y="145" font-family="serif" font-style="italic" font-size="13" fill="#d9ecf7">O</text></g></svg>`;
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
      filterMore:'絞り込み', news:'新しい教材', noNews:'日付を確認できた新着情報はありません。', newRelease:'新規公開', updated:'アップデート', find:'教材を探す', library:'教材アプリ一覧',
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
      filterMore:'Filters', news:'New games', noNews:'No dated announcements are available.', newRelease:'New release', updated:'Update', find:'Find a game', library:'Math game library',
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
      filterMore:'筛选', news:'新上线教材', noNews:'暂无日期已确认的动态。', newRelease:'新上线', updated:'更新', find:'查找教材', library:'数学教材列表',
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
    document.querySelectorAll('[data-quick-grade]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.quickGrade === selectedGrade)));
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
    replaceOptions($('sort'), ['recommended','newest'].map(key => new Option(text(key), key)));
  }
  // Approved beta library illustrations. Individual silhouettes, shared 16:9 canvas.
  function libraryThumbnail(app) {
    const designs = {
      "proof-rush": [
        "#D8ECDD",
        "<ellipse cx=\"120\" cy=\"116\" rx=\"83\" ry=\"12\" fill=\"#A3CCB3\"/><path d=\"M70 113C65 68 90 48 119 48C148 48 174 72 169 113Z\" fill=\"#A47B60\" stroke=\"#182E39\" stroke-width=\"4\" stroke-linejoin=\"round\"/><ellipse cx=\"119\" cy=\"90\" rx=\"25\" ry=\"21\" fill=\"#E9C9A3\"/><g fill=\"#182E39\"><circle cx=\"101\" cy=\"76\" r=\"3.5\"/><circle cx=\"137\" cy=\"76\" r=\"3.5\"/><ellipse cx=\"119\" cy=\"86\" rx=\"6\" ry=\"4\"/></g><path d=\"M112 96Q119 103 126 96\" stroke=\"#182E39\" stroke-width=\"2.5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M53 49L78 10L103 49Z M145 49L170 10L195 49Z\" fill=\"#FCF6E9\" stroke=\"#21695C\" stroke-width=\"4\" stroke-linejoin=\"round\"/><path d=\"M61 30L68 35M153 30L160 35\" stroke=\"#21695C\" stroke-width=\"3.5\" stroke-linecap=\"round\"/><g><g transform=\"translate(115.41 17.52) scale(2.1481)\" fill=\"none\" stroke=\"#21695C\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 2H7.5M.5 5H7.5M.5 8H7.5\" transform=\"translate(0 0)\"/></g></g>"
      ],
      "detective": [
        "#F3DFC0",
        "<path d=\"M143 88L181 122\" stroke=\"#182E39\" stroke-width=\"19\" stroke-linecap=\"round\"/><path d=\"M149 94L178 119\" stroke=\"#AD7950\" stroke-width=\"10\" stroke-linecap=\"round\"/><circle cx=\"105\" cy=\"54\" r=\"46\" fill=\"#FFF8E7\" stroke=\"#182E39\" stroke-width=\"7\"/><path d=\"M75 75L105 26L135 75Z\" stroke=\"#AD7950\" stroke-width=\"4\" fill=\"none\" stroke-linejoin=\"round\"/><g><g transform=\"translate(97.48 43.52) scale(2.1481)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.6 2.5Q.5 0 3.5 0T6.5 2.7Q6.5 4.4 4.2 5.5 3.5 6 3.5 7.3M3.5 10v.01\" transform=\"translate(0 0)\"/></g></g>"
      ],
      "proof-builder": [
        "#BFDDED",
        "<g stroke=\"#182E39\" stroke-width=\"3.5\" stroke-linejoin=\"round\"><rect x=\"44\" y=\"77\" width=\"74\" height=\"45\" rx=\"7\" fill=\"#FCF6E9\"/><rect x=\"122\" y=\"77\" width=\"74\" height=\"45\" rx=\"7\" fill=\"#FCF6E9\"/><rect x=\"65\" y=\"26\" width=\"110\" height=\"45\" rx=\"7\" fill=\"#578CB7\" transform=\"rotate(-7 120 48)\"/></g><g font-family=\"KaTeX_Main, 'Latin Modern Math', 'Cambria Math', serif\" font-weight=\"700\" text-anchor=\"middle\"><g transform=\"rotate(-7 120 48)\"><g transform=\"translate(92.87 38.48) scale(1.8519)\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 2.4Q.5 0 3.5 0T6.5 2.6Q6.5 4.1 4.3 6L.7 10H6.5\" transform=\"translate(0 0)\"/><path d=\"M.8 10 2.2 3.2M1.6 6.3Q3.3 2.8 5 3.4T6 6.1L5.2 10\" transform=\"translate(8.1 0)\"/><path d=\"M.5 5H6.5\" transform=\"translate(16.2 0)\"/><path d=\"M.6 2.1 2.6 0V10\" transform=\"translate(24.299999999999997 0)\"/></g></g><g><g transform=\"translate(73.59 89.48) scale(1.8519)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 3H7.5M.5 7H7.5\" transform=\"translate(0 0)\"/></g></g><g><g transform=\"translate(149.22 86.56) scale(2.4444)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 1.7v.01M1.1 8v.01M6.9 8v.01\" transform=\"translate(0 0)\" stroke-width=\"2.8\"/></g></g></g>"
      ],
      "trig-bloom": [
        "#E7D9EF",
        "<ellipse cx=\"120\" cy=\"36\" rx=\"23\" ry=\"32\" transform=\"rotate(0 120 67.5)\" fill=\"#B99BCE\" opacity=\".8\"/><ellipse cx=\"120\" cy=\"36\" rx=\"23\" ry=\"32\" transform=\"rotate(60 120 67.5)\" fill=\"#B99BCE\" opacity=\".8\"/><ellipse cx=\"120\" cy=\"36\" rx=\"23\" ry=\"32\" transform=\"rotate(120 120 67.5)\" fill=\"#B99BCE\" opacity=\".8\"/><ellipse cx=\"120\" cy=\"36\" rx=\"23\" ry=\"32\" transform=\"rotate(180 120 67.5)\" fill=\"#B99BCE\" opacity=\".8\"/><ellipse cx=\"120\" cy=\"36\" rx=\"23\" ry=\"32\" transform=\"rotate(240 120 67.5)\" fill=\"#B99BCE\" opacity=\".8\"/><ellipse cx=\"120\" cy=\"36\" rx=\"23\" ry=\"32\" transform=\"rotate(300 120 67.5)\" fill=\"#B99BCE\" opacity=\".8\"/><circle cx=\"120\" cy=\"67.5\" r=\"42\" fill=\"#FCF6E9\" stroke=\"#76558E\" stroke-width=\"3\"/><path d=\"M78 67.5H162M120 25.5V109.5\" stroke=\"#76558E\" stroke-width=\"1.2\"/><path d=\"M120 67.5H149.6985V37.8015Z\" fill=\"#F4BE48\" fill-opacity=\".5\" stroke=\"#76558E\" stroke-width=\"2\" stroke-linejoin=\"round\"/><circle cx=\"149.6985\" cy=\"37.8015\" r=\"4\" fill=\"#76558E\"/>"
      ],
      "log-lab": [
        "#203E50",
        "<path d=\"M28 86H211M65 12V122\" stroke=\"#9CB3BC\" stroke-width=\"2\" stroke-linecap=\"round\"/><polyline points=\"68.24,123.11 69.39,116.53 70.54,111.48 71.70,107.40 72.85,103.96 74.00,101.00 75.15,98.39 76.30,96.07 77.46,93.97 78.61,92.05 79.76,90.29 80.91,88.67 82.06,87.16 83.22,85.74 84.37,84.41 85.52,83.16 86.67,81.98 87.82,80.86 88.98,79.80 90.13,78.78 91.28,77.81 92.43,76.88 93.58,75.99 94.74,75.14 95.89,74.31 97.04,73.52 98.19,72.76 99.34,72.02 100.50,71.31 101.65,70.61 102.80,69.94 103.95,69.29 105.10,68.66 106.26,68.05 107.41,67.45 108.56,66.87 109.71,66.31 110.86,65.76 112.02,65.22 113.17,64.70 114.32,64.19 115.47,63.69 116.62,63.20 117.78,62.72 118.93,62.25 120.08,61.80 121.23,61.35 122.38,60.91 123.54,60.48 124.69,60.06 125.84,59.64 126.99,59.24 128.14,58.84 129.30,58.45 130.45,58.06 131.60,57.69 132.75,57.32 133.90,56.95 135.06,56.59 136.21,56.24 137.36,55.89 138.51,55.55 139.66,55.21 140.82,54.88 141.97,54.56 143.12,54.23 144.27,53.92 145.42,53.61 146.58,53.30 147.73,52.99 148.88,52.70 150.03,52.40 151.18,52.11 152.34,51.82 153.49,51.54 154.64,51.26 155.79,50.98 156.94,50.71 158.10,50.44 159.25,50.17 160.40,49.91 161.55,49.65 162.70,49.39 163.86,49.14 165.01,48.89 166.16,48.64 167.31,48.40 168.46,48.15 169.62,47.91 170.77,47.68 171.92,47.44 173.07,47.21 174.22,46.98 175.38,46.75 176.53,46.53 177.68,46.31 178.83,46.09 179.98,45.87 181.14,45.65 182.29,45.44 183.44,45.23 184.59,45.02 185.74,44.81 186.90,44.61 188.05,44.40 189.20,44.20 190.35,44.00 191.50,43.80 192.66,43.61 193.81,43.41 194.96,43.22 196.11,43.03 197.26,42.84 198.42,42.65 199.57,42.47 200.72,42.28 201.87,42.10 203.02,41.92 204.18,41.74 205.33,41.56\" stroke=\"#9ADCC3\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><circle cx=\"83\" cy=\"86\" r=\"4.5\" fill=\"#F4BE48\"/><g><g transform=\"translate(145.11 90.78) scale(2.2222)\" fill=\"none\" stroke=\"#FCF6E9\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.5 0V10\" transform=\"translate(0 0)\"/><path d=\"M3.5 3C-.6 3-.6 10 3.5 10S7.6 3 3.5 3Z\" transform=\"translate(4.6 0)\"/><path d=\"M6.2 3.4V10.5Q6.2 14 .9 12.8M6.2 5.2C3.9 1.1.5 3.1.5 6.6S4.3 11.5 6.2 8\" transform=\"translate(12.7 0)\"/></g></g>"
      ],
      "number-line-dash": [
        "#FFD5B2",
        "<path d=\"M16 86H224M215 79L224 86L215 93\" stroke=\"#182E39\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M30 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(22.73 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 5H6.5\" transform=\"translate(0 0)\"/><path d=\"M.7 1Q2.2 0 3.5 0 6.5 0 6.5 2.5 6.5 5 3.5 5H2.5M3.5 5Q6.7 5 6.7 7.6T3.3 10Q1.6 10 .5 9\" transform=\"translate(8.1 0)\"/></g></g><path d=\"M60 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(52.73 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 5H6.5\" transform=\"translate(0 0)\"/><path d=\"M.5 2.4Q.5 0 3.5 0T6.5 2.6Q6.5 4.1 4.3 6L.7 10H6.5\" transform=\"translate(8.1 0)\"/></g></g><path d=\"M90 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(83.69 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 5H6.5\" transform=\"translate(0 0)\"/><path d=\"M.6 2.1 2.6 0V10\" transform=\"translate(8.1 0)\"/></g></g><path d=\"M120 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(116.63 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3.5 0C.8 0 .5 2.5 .5 5S.8 10 3.5 10 6.5 7.5 6.5 5 6.2 0 3.5 0Z\" transform=\"translate(0 0)\"/></g></g><path d=\"M150 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(147.59 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.6 2.1 2.6 0V10\" transform=\"translate(0 0)\"/></g></g><path d=\"M180 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(176.63 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 2.4Q.5 0 3.5 0T6.5 2.6Q6.5 4.1 4.3 6L.7 10H6.5\" transform=\"translate(0 0)\"/></g></g><path d=\"M210 79V93\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(206.63 101.37) scale(0.9630)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.7 1Q2.2 0 3.5 0 6.5 0 6.5 2.5 6.5 5 3.5 5H2.5M3.5 5Q6.7 5 6.7 7.6T3.3 10Q1.6 10 .5 9\" transform=\"translate(0 0)\"/></g></g><path d=\"M60 76Q105 -16 150 76M136 65L150 76L152 59\" stroke=\"#D16D36\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"60\" cy=\"86\" r=\"7\" fill=\"#D16D36\"/><g><g transform=\"translate(91.58 11.22) scale(1.7778)\" fill=\"none\" stroke=\"#B45325\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M.5 5H6.5M3.5 2V8\" transform=\"translate(0 0)\"/><path d=\"M.7 1Q2.2 0 3.5 0 6.5 0 6.5 2.5 6.5 5 3.5 5H2.5M3.5 5Q6.7 5 6.7 7.6T3.3 10Q1.6 10 .5 9\" transform=\"translate(8.1 0)\"/></g></g>"
      ],
      "balance-rescue": [
        "#FBE8A5",
        "<path d=\"M120 25V116M92 116H148M45 35H195\" stroke=\"#182E39\" stroke-width=\"6\" stroke-linecap=\"round\"/><circle cx=\"120\" cy=\"35\" r=\"7\" fill=\"#FCF6E9\" stroke=\"#182E39\" stroke-width=\"3\"/><path d=\"M45 35L20 92M45 35L70 92M195 35L170 92M195 35L220 92\" stroke=\"#182E39\" stroke-width=\"2.5\" fill=\"none\"/><rect x=\"28\" y=\"56\" width=\"34\" height=\"35\" rx=\"5\" fill=\"#73C9B5\" stroke=\"#182E39\" stroke-width=\"2.5\"/><g><g transform=\"translate(38.00 61.00) scale(2.0000)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.2 3.3 5.8 10M6.6 3.3.5 10\" transform=\"translate(0 0)\"/></g></g><rect x=\"172\" y=\"74\" width=\"14\" height=\"17\" rx=\"3\" fill=\"#FCF6E9\" stroke=\"#182E39\" stroke-width=\"1.8\"/><rect x=\"188\" y=\"74\" width=\"14\" height=\"17\" rx=\"3\" fill=\"#FCF6E9\" stroke=\"#182E39\" stroke-width=\"1.8\"/><rect x=\"204\" y=\"74\" width=\"14\" height=\"17\" rx=\"3\" fill=\"#FCF6E9\" stroke=\"#182E39\" stroke-width=\"1.8\"/><path d=\"M16 92H74Q69 107 45 107T16 92ZM166 92H224Q219 107 195 107T166 92Z\" fill=\"#D8A53F\" stroke=\"#182E39\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>"
      ],
      "line-pilot": [
        "#C9E6F6",
        "<path d=\"M18 109H220M65 9V124\" stroke=\"#7096AB\" stroke-width=\"2\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"44\" r=\"24\" stroke=\"#182E39\" stroke-width=\"3\" fill=\"#FCF6E9\"/><circle cx=\"160\" cy=\"44\" r=\"15\" stroke=\"#E78976\" stroke-width=\"3\" fill=\"none\"/><path d=\"M25 119L205 19\" stroke=\"#2C779E\" stroke-width=\"5\" stroke-linecap=\"round\"/><circle cx=\"160\" cy=\"44\" r=\"6\" fill=\"#2C779E\"/>"
      ],
      "twin-cipher": [
        "#F2CDD3",
        "<path d=\"M77 59V39C77 -4 163 -4 163 39V59\" stroke=\"#182E39\" stroke-width=\"9\" fill=\"none\" stroke-linecap=\"round\"/><rect x=\"61\" y=\"49\" width=\"118\" height=\"75\" rx=\"17\" fill=\"#FCF6E9\" stroke=\"#182E39\" stroke-width=\"4\"/><g font-size=\"30\" font-family=\"KaTeX_Math, 'Latin Modern Math', 'Cambria Math', serif\" font-style=\"italic\" font-weight=\"700\" fill=\"#182E39\" text-anchor=\"middle\"><g><g transform=\"translate(84.22 61.78) scale(2.2222)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.2 3.3 5.8 10M6.6 3.3.5 10\" transform=\"translate(0 0)\"/></g></g><g><g transform=\"translate(140.22 61.78) scale(2.2222)\" fill=\"none\" stroke=\"#182E39\" stroke-width=\"1.65\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M1.2 3.3 3.8 9.8M6.6 3.3 2.5 12.5Q1.7 14 .5 13.5\" transform=\"translate(0 0)\"/></g></g></g><circle cx=\"120\" cy=\"99\" r=\"6\" fill=\"#B8667C\"/><path d=\"M120 100V111\" stroke=\"#B8667C\" stroke-width=\"5\" stroke-linecap=\"round\"/>"
      ]
    };
    const design = designs[app.id];
    if (!design) return artSvg(app.thumbnail.illustration);
    return `<svg viewBox="0 0 240 135" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><rect width="240" height="135" fill="${design[0]}"/><g transform="translate(9 5.0625) scale(.925)">${design[1]}</g></svg>`;
  }
  function card(app) {
    const available = app.status === 'available';
    const favorite = state.favorites.has(app.id);
    return `<article class="app-card" data-app="${esc(app.id)}">
      <div class="app-art art-${esc(app.thumbnail.accent)}">
        ${libraryThumbnail(app)}
        <span class="status-chip ${available ? 'published' : ''}">${esc(text(available ? 'available' : 'coming'))}</span>
        <button type="button" class="favorite" data-favorite="${esc(app.id)}" aria-pressed="${favorite}" aria-label="${esc(text(favorite ? 'removeFavorite' : 'addFavorite',{name:app.title}))}"><span aria-hidden="true">${favorite ? '★' : '☆'}</span></button>
      </div>
      <div class="app-content">
        <div class="app-meta">${esc(app.grades.map(gradeLabel).join(' / '))} · ${esc(app.units.map(id => local(state.units.get(id).label)).join(' / '))}</div>
        <h3>${esc(app.title)}</h3>
        <p class="app-summary">${esc(local(app.description))}</p>
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
    const events = state.apps.filter(app => app.status === 'available').map(app => ({app, date:app.publishedAt, label:'newRelease'})).filter(event => event.date).sort((a,b) => b.date.localeCompare(a.date)).slice(0,3);
    $('newsList').innerHTML = events.length ? events.map(({app,date,label}) =>
      `<button type="button" class="news-card" data-detail="${esc(app.id)}"><span><time datetime="${esc(date)}">${esc(dateLabel(date))}</time> · <span class="news-label">${esc(text(label))}</span></span><strong>${esc(app.title)}</strong></button>`
    ).join('') : `<p>${esc(text(state.status === 'loading' ? 'loading' : state.status === 'error' ? 'fetchError' : 'noNews'))}</p>`;
  }
  function renderDetail(app) {
    $('detailTitle').textContent = app.title;
    const details = ['learning','game','stage','languages','devices','duration','classroom','certificate','nameInput'];
    const values = {...app.details,languages:languageList(app),version:app.version};
    const row = key => {
      const value = values[key];
      const label = typeof value === 'boolean' ? text(value ? 'yes' : 'no') : (typeof value === 'string' ? value : local(value));
      return `<div><dt>${esc(text(key))}</dt><dd>${esc(label || text('unknown'))}</dd></div>`;
    };
    const available = app.status === 'available';
    const variants = (available ? app.variants : []).map(variant => `<li>${appLink(variant.url,local(variant.label))}</li>`).join('');
    $('detailBody').innerHTML = `<dl class="detail-grid">${details.map(row).join('')}</dl>
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
    const banner = $('bookBannerImage');
    if (banner) {
      const reveal = () => { banner.hidden = !banner.naturalWidth; };
      banner.addEventListener('load', reveal);
      banner.addEventListener('error', () => { banner.hidden = true; });
      if (banner.complete) reveal();
    }
    document.querySelectorAll('[data-quick-grade]').forEach(button => button.addEventListener('click', () => {
      if (state.status !== 'ready') return;
      $('grade').value = $('grade').value === button.dataset.quickGrade ? '' : button.dataset.quickGrade;
      $('unit').value = '';
      $('grade').dispatchEvent(new Event('input', {bubbles:true}));
      $('apps-title').scrollIntoView({block:'start'});
    }));
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click',() => setLang(button.dataset.lang)));
    const toggle = $('toggleFilters');
    toggle.addEventListener('click', () => {
      const expanded = $('filters').classList.toggle('filters-expanded');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
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
