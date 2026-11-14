(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const phrases = {
    ja: {
      navApps:'アプリを探す',navHow:'遊び方',navAbout:'MANATY LABについて',headerPlay:'遊んでみる',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'遊びから生まれる、<br>数学の<span class="highlight">「わかった！」</span>',
      heroDesc:'触って、試して、気づいていく。数学がちょっと好きになる、無料の学習ゲームを集めました。',heroExplore:'ゲームを見つける',heroHow:'はじめての方へ',heroTrust:'登録不要・無料・スマホでもPCでも',
      miniLabel:'ちょこっと体験',miniPrompt:'矢印を押して、数字を動かそう',miniReset:'もう一度',miniCorrect:'ぴったり！',miniPosition:'いまの位置',heroVisualNote:'正解は、遊びの中にある。',
      statFree:'いつでも無料',statFreeDesc:'好きな時間に、好きな場所で',statMath:'数学を手で動かす',statMathDesc:'正解だけではなく、その理由まで',statProgress:'遊びながら一歩ずつ',statProgressDesc:'ステージで少しずつレベルアップ',
      appKicker:'EXPLORE THE LAB',appTitle:'今日は何で遊ぶ？',appSubtitle:'気になる単元から、好きなゲームを選んでみよう。',appCount:'{n}個のアプリ',highTopicHeading:'高校数学は単元から選ぶ',highTopicHint:'学年ではなく、学びたい単元から探せます。',emptyHighTitle:'この単元のアプリは準備中！',emptyHighDesc:'別の単元も見てみてね。新しいゲームを順次追加します。',searchLabel:'アプリを検索',searchPlaceholder:'単元・アプリ名で検索',filterAll:'すべて',gradeJ1:'中学1年',gradeJ2:'中学2年',gradeJ3:'中学3年',gradeHigh:'高校数学',
      play:'遊んでみる',source:'コード',comingSoon:'近日公開',emptyTitle:'まだ見つからないみたい。',emptyDesc:'キーワードや学年を変えてみてね。',resetFilters:'すべてを見る',catalogFootnote:'掲載するゲームは順次追加しています。一部のゲームは試作版です。',
      howKicker:'HOW TO PLAY',howTitle:'むずかしい準備は、<br><em>いりません。</em>',howDesc:'気になったアプリを開くだけ。思いどおりに動かしながら、数学のしくみを見つけてみよう。',step1Title:'気になるゲームを選ぶ',step1Body:'学年や単元から探して、好きなものを開こう。',step2Title:'さわって、試してみる',step2Body:'はじめてならチュートリアルから。何度間違えても大丈夫。',step3Title:'「わかった！」を見つける',step3Body:'結果を確かめて、もう一度。学びが少しずつ深まるよ。',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'数学に、<br><span>遊び心を。</span>',aboutBody:'MANATY LABは、数学をもっと身近に感じるための個人制作の学習アプリプロジェクトです。現役の数学教員の視点をもとに、「おもしろい」と「なるほど」を両立するゲームを少しずつ公開しています。',aboutLink:'ゲームを探してみる',
      connectKicker:'STAY CURIOUS',connectTitle:'遊び方も、新作も。',connectSubtitle:'YouTubeで使い方を、Xで新しいアプリのお知らせを発信していく予定です。',youtubeDesc:'ゲームの使い方や、数学の「なるほど！」を動画で紹介していきます。',xDesc:'新作アプリや、制作の裏側を気軽にお知らせしていきます。',comingSoonSocial:'準備中',comingSoon:'近日公開',visitChannel:'チャンネルを見る ↗',visitX:'Xを見る ↗',footerMessage:'遊びから生まれる、数学の「わかった！」',footerNote:'個人運営の学習アプリサイトです。学校の公式サイトではありません。',backToTop:'ページの先頭へ ↑'
    },
    en: {
      navApps:'Explore games',navHow:'How to play',navAbout:'About MANATY LAB',headerPlay:'Start playing',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'Play your way to<br>an <span class="highlight">“Aha!” moment.</span>',
      heroDesc:'Touch, experiment, and discover. Find free math games that make learning surprisingly fun.',heroExplore:'Explore games',heroHow:'New here?',heroTrust:'Free to play · No account · Phone or desktop',
      miniLabel:'TRY IT OUT',miniPrompt:'Use the arrows to move the number',miniReset:'Reset',miniCorrect:'You got it!',miniPosition:'Position',heroVisualNote:'Discover answers through play.',
      statFree:'Always free',statFreeDesc:'Learn anytime, anywhere',statMath:'Hands-on math',statMathDesc:'Explore the why, not just the answer',statProgress:'One step at a time',statProgressDesc:'Grow your skills with each level',
      appKicker:'EXPLORE THE LAB',appTitle:'What will you play today?',appSubtitle:'Pick an interesting topic and jump into a game.',appCount:'{n} games',highTopicHeading:'Explore high-school topics',highTopicHint:'Pick a math topic, not a school year.',emptyHighTitle:'Games for this topic are on the way!',emptyHighDesc:'Try another topic while we make more games.',searchLabel:'Search games',searchPlaceholder:'Search by game or topic',filterAll:'All',gradeJ1:'Grade 7',gradeJ2:'Grade 8',gradeJ3:'Grade 9',gradeHigh:'High school',
      play:'Play now',source:'Code',comingSoon:'Coming soon',emptyTitle:'No games found yet.',emptyDesc:'Try another topic or grade.',resetFilters:'Show all',catalogFootnote:'More games are being added. Some are early versions.',
      howKicker:'HOW TO PLAY',howTitle:'No complicated<br><em>setup needed.</em>',howDesc:'Choose a game, open it, and start experimenting. Discover mathematical ideas by doing.',step1Title:'Choose a game',step1Body:'Find something you like by grade or topic.',step2Title:'Try things out',step2Body:'New to the game? Start with a tutorial. Mistakes are part of learning.',step3Title:'Find your “Aha!”',step3Body:'Check your results and try again. Each round helps you understand more.',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'A little more<br><span>play in math.</span>',aboutBody:'MANATY LAB is an independent collection of educational math apps. Built from the perspective of an active math teacher, each game aims to bring together fun and genuine understanding.',aboutLink:'Discover the games',
      connectKicker:'STAY CURIOUS',connectTitle:'New games. New ideas.',connectSubtitle:'We plan to share game tutorials on YouTube and new releases on X.',youtubeDesc:'Watch how to play and discover the math behind the games.',xDesc:'Follow upcoming games and behind-the-scenes updates.',comingSoonSocial:'Coming soon',visitChannel:'Visit channel ↗',visitX:'Visit X ↗',footerMessage:'Play your way to an “Aha!” moment.',footerNote:'An independent learning site, not an official school website.',backToTop:'Back to top ↑'
    },
    zh: {
      navApps:'探索游戏',navHow:'玩法介绍',navAbout:'关于 MANATY LAB',headerPlay:'开始体验',
      heroEyebrow:'FREE MATH PLAYGROUND',heroTitle:'在游戏中探索，<br>发现数学的<span class="highlight">“原来如此！”</span>',
      heroDesc:'动手操作、反复尝试、主动发现。这里有让数学变得更有趣的免费学习游戏。',heroExplore:'探索数学游戏',heroHow:'第一次来？',heroTrust:'免费体验 · 无需注册 · 手机电脑皆可',
      miniLabel:'先来试一试',miniPrompt:'点击箭头，移动数轴上的位置',miniReset:'重来',miniCorrect:'答对了！',miniPosition:'当前位置',heroVisualNote:'在游戏中找到答案。',
      statFree:'永久免费',statFreeDesc:'随时随地都能学习',statMath:'动手探索数学',statMathDesc:'不只找答案，更要理解原因',statProgress:'边玩边进步',statProgressDesc:'通过关卡不断提升',
      appKicker:'EXPLORE THE LAB',appTitle:'今天玩哪个？',appSubtitle:'挑选感兴趣的数学主题，马上开始吧！',appCount:'{n} 个游戏',highTopicHeading:'按高中数学单元筛选',highTopicHint:'按数学内容查找，不必按年级区分。',emptyHighTitle:'这个单元的游戏正在准备中！',emptyHighDesc:'可以先试试其他单元，更多游戏即将推出。',searchLabel:'搜索游戏',searchPlaceholder:'按游戏或数学主题搜索',filterAll:'全部',gradeJ1:'初一',gradeJ2:'初二',gradeJ3:'初三',gradeHigh:'高中数学',
      play:'开始游戏',source:'代码',comingSoon:'即将推出',emptyTitle:'暂时没有找到游戏。',emptyDesc:'试试其他关键词或年级。',resetFilters:'查看全部',catalogFootnote:'更多游戏陆续上线，部分游戏仍为测试版本。',
      howKicker:'HOW TO PLAY',howTitle:'无需复杂准备，<br><em>马上开始！</em>',howDesc:'选择感兴趣的游戏，打开后亲手操作，在尝试中发现数学规律。',step1Title:'选择一个游戏',step1Body:'通过年级或主题寻找喜欢的内容。',step2Title:'动手试一试',step2Body:'第一次体验可以从教程开始，出错也没关系。',step3Title:'发现“原来如此！”',step3Body:'检查结果，再试一次，逐渐理解数学。',
      aboutKicker:'ABOUT MANATY LAB',aboutTitle:'让数学多一点<br><span>游戏的乐趣。</span>',aboutBody:'MANATY LAB 是独立制作的数学学习应用项目。我们以一线数学教师的教学经验为基础，陆续推出既有趣又能帮助理解数学概念的小游戏。',aboutLink:'探索游戏',
      connectKicker:'STAY CURIOUS',connectTitle:'新玩法，新作品。',connectSubtitle:'我们计划通过 YouTube 介绍玩法，并在 X 发布新应用动态。',youtubeDesc:'通过视频学习游戏玩法和背后的数学原理。',xDesc:'了解最新作品与制作过程。',comingSoonSocial:'筹备中',visitChannel:'访问频道 ↗',visitX:'访问 X ↗',footerMessage:'在游戏中发现数学的“原来如此！”',footerNote:'本网站为独立运营的学习平台，并非学校官方网站。',backToTop:'返回顶部 ↑'
    }
  };
  const HIGH_TOPICS=[{"id":"all","label":{"ja":"すべての単元","en":"All topics","zh":"全部单元"}},{"id":"numbers-and-algebra","label":{"ja":"数と式","en":"Numbers & algebra","zh":"数与式"}},{"id":"geometry-measurement","label":{"ja":"図形と計量","en":"Geometry & measurement","zh":"图形与测量"}},{"id":"quadratic-functions","label":{"ja":"2次関数","en":"Quadratic functions","zh":"二次函数"}},{"id":"combinatorics-probability","label":{"ja":"場合の数と確率","en":"Counting & probability","zh":"计数与概率"}},{"id":"trigonometric-functions","label":{"ja":"三角関数","en":"Trigonometric functions","zh":"三角函数"}},{"id":"exponential-logarithmic","label":{"ja":"指数関数・対数関数","en":"Exponential & logarithmic functions","zh":"指数函数与对数函数"}},{"id":"sequences","label":{"ja":"数列","en":"Sequences","zh":"数列"}},{"id":"vectors","label":{"ja":"ベクトル","en":"Vectors","zh":"向量"}},{"id":"calculus","label":{"ja":"微分法・積分法","en":"Differentiation & integration","zh":"微分与积分"}}];
  const grades=['all','j1','j2','j3','high'];
  const state={lang:'ja',grade:'all',highTopic:'all',query:'',apps:[],position:-2};
  const SOCIAL={youtube:'',x:''}; // Add official public URLs only after accounts are created.
  const text=(key,values={})=>{const s=phrases[state.lang]?.[key]??phrases.ja[key]??key;return String(s).replace(/\{(\w+)\}/g,(_,k)=>values[k]??'')};
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function local(obj){return obj?.[state.lang]??obj?.ja??'';}
  function loadLang(){try{const v=localStorage.getItem('manaty-lab-lang');if(['ja','en','zh'].includes(v))state.lang=v;}catch(_){}}
  function setLang(lang){state.lang=lang;try{localStorage.setItem('manaty-lab-lang',lang)}catch(_){};renderI18n();renderFilters();renderApps();drawMini();}
  function renderI18n(){
    document.documentElement.lang=state.lang==='zh'?'zh-CN':state.lang;
    for(const el of document.querySelectorAll('[data-i18n]')){
      const key=el.dataset.i18n;
      if(key==='comingSoon')el.textContent=text('comingSoonSocial'); else el.textContent=text(key);
    }
    for(const el of document.querySelectorAll('[data-i18n-html]'))el.innerHTML=text(el.dataset.i18nHtml);
    for(const el of document.querySelectorAll('[data-i18n-placeholder]'))el.placeholder=text(el.dataset.i18nPlaceholder);
    document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===state.lang)));
    $('appCount').textContent=text('appCount',{n:state.apps.filter(a=>a.status==='available').length});
    document.title=`MANATY LAB — Play. Learn. Discover.`;
    showSocial();
  }
  function renderFilters(){
    const box=$('filters');box.replaceChildren();
    for(const grade of grades){const b=document.createElement('button');b.className='filter-button';b.type='button';b.textContent=text(grade==='all'?'filterAll':grade==='high'?'gradeHigh':`grade${grade.toUpperCase()}`);b.setAttribute('aria-pressed',String(state.grade===grade));b.addEventListener('click',()=>{state.grade=grade;renderFilters();renderApps();});box.append(b);}
    renderHighTopics();
  }
  function renderHighTopics(){
    const panel=$('highTopicPanel');panel.hidden=state.grade!=='high';
    if(panel.hidden)return;
    const buttons=$('highTopicButtons');buttons.replaceChildren();
    for(const topic of HIGH_TOPICS){
      const btn=document.createElement('button');btn.type='button';btn.className='high-topic-button';
      btn.textContent=local(topic.label);btn.setAttribute('aria-pressed',String(state.highTopic===topic.id));
      btn.addEventListener('click',()=>{state.highTopic=topic.id;renderHighTopics();renderApps();});buttons.append(btn);
    }
  }
  function artSvg(type){
    const base='viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"';
    if(type==='mole')return `<svg ${base}><circle cx="304" cy="104" r="112" fill="#b5e4d0"/><path d="M52 173 174 24 277 173Z" fill="none" stroke="#2b6757" stroke-width="7" stroke-linejoin="round"/><path d="M84 173 174 72 242 173" fill="none" stroke="#fff" stroke-width="5" stroke-dasharray="10 8"/><circle cx="174" cy="72" r="8" fill="#ff995f"/><circle cx="277" cy="173" r="8" fill="#ff995f"/><circle cx="53" cy="173" r="8" fill="#ff995f"/><ellipse cx="291" cy="156" rx="45" ry="28" fill="#ac795b"/><circle cx="292" cy="117" r="40" fill="#bb8b68" stroke="#3d6255" stroke-width="4"/><circle cx="281" cy="112" r="4" fill="#213c35"/><circle cx="305" cy="112" r="4" fill="#213c35"/><path d="M279 128 Q292 141 307 128" stroke="#24433b" stroke-width="4" fill="none" stroke-linecap="round"/><text x="287" y="204" font-family="system-ui" font-size="23" font-weight="900" fill="#1b5949">≅</text><path d="M324 42 342 27" stroke="#ed945c" stroke-width="6" stroke-linecap="round"/></svg>`;
    if(type==='detective')return `<svg ${base}><circle cx="278" cy="95" r="114" fill="#d1c4ed"/><path d="M66 174 172 42 291 174Z" fill="#f8f3ff" stroke="#60518d" stroke-width="6"/><path d="M173 42V174" stroke="#b0a2d5" stroke-width="4" stroke-dasharray="7 7"/><circle cx="172" cy="42" r="7" fill="#ffab79"/><circle cx="66" cy="174" r="7" fill="#ffab79"/><circle cx="291" cy="174" r="7" fill="#ffab79"/><circle cx="284" cy="121" r="50" fill="#fafaff" stroke="#6a5890" stroke-width="12"/><path d="m319 157 49 49" stroke="#6a5890" stroke-width="17" stroke-linecap="round"/><text x="280" y="133" text-anchor="middle" font-family="system-ui" font-weight="950" font-size="45" fill="#e4936f">?</text></svg>`;
    if(type==='blocks')return `<svg ${base}><circle cx="292" cy="94" r="105" fill="#ffd3c1"/><g stroke="#b9624c" stroke-width="4" stroke-linejoin="round"><rect x="66" y="119" width="88" height="65" rx="12" fill="#ffad86"/><rect x="157" y="119" width="88" height="65" rx="12" fill="#fdd8ac"/><rect x="249" y="119" width="88" height="65" rx="12" fill="#ffe6db"/><rect x="112" y="47" width="88" height="65" rx="12" fill="#fff3dc"/><rect x="204" y="47" width="88" height="65" rx="12" fill="#ffc3ad"/></g><g text-anchor="middle" font-family="system-ui" font-weight="950" font-size="35" fill="#9a5946"><text x="110" y="163">a</text><text x="201" y="163">+</text><text x="293" y="163">b</text><text x="155" y="91">=</text><text x="247" y="91">?</text></g><path d="m346 34 9 -18 m13 28 14 -3" stroke="#f29a71" stroke-width="6" stroke-linecap="round"/></svg>`;
    if(type==='trig')return `<svg ${base}><circle cx="260" cy="109" r="99" fill="#c8e5f6"/><circle cx="212" cy="112" r="74" fill="none" stroke="#2c7196" stroke-width="5"/><path d="M49 112H369M212 19V206" stroke="#518eac" stroke-width="3"/><path d="M212 112 275 74" stroke="#ef986b" stroke-width="8" stroke-linecap="round"/><path d="M212 112 H275 V74" stroke="#fff" stroke-width="5" fill="none"/><circle cx="275" cy="74" r="9" fill="#f28c60"/><path d="M237 112Q234 100 226 92" fill="none" stroke="#faaf78" stroke-width="4"/><text x="77" y="77" font-family="system-ui" font-weight="950" font-size="31" fill="#266c91">sin</text><text x="292" y="178" font-family="system-ui" font-weight="950" font-size="31" fill="#266c91">cos</text></svg>`;
    if(type==='log')return `<svg ${base}><circle cx="290" cy="96" r="112" fill="#f9d97a" opacity=".65"/><path d="M79 178H349M138 202V27" stroke="#7f6a32" stroke-width="5" stroke-linecap="round"/><path d="M89 195 Q129 166 167 138 T237 80 T337 49" fill="none" stroke="#b36b40" stroke-width="9" stroke-linecap="round"/><path d="M132 185Q197 186 267 121" stroke="#fff5d7" stroke-width="4" stroke-dasharray="8 8" fill="none"/><text x="70" y="76" font-family="system-ui" font-size="27" font-weight="900" fill="#83622f">log</text><text x="275" y="143" font-family="system-ui" font-size="28" font-weight="900" fill="#a47231">y</text><circle cx="205" cy="107" r="7" fill="#fff" stroke="#9f7044" stroke-width="4"/></svg>`;
    return `<svg ${base}><circle cx="280" cy="98" r="103" fill="#b9e3ca"/><path d="M33 146H370" stroke="#2b6156" stroke-width="6" stroke-linecap="round"/><g font-family="system-ui" font-weight="900" font-size="20" fill="#2e6559" text-anchor="middle"><text x="78" y="181">−4</text><text x="145" y="181">−2</text><text x="212" y="181">0</text><text x="279" y="181">+2</text><text x="346" y="181">+4</text></g><path d="M78 134V158M145 134V158M212 129V163M279 134V158M346 134V158" stroke="#2f695d" stroke-width="4"/><path d="M148 95 Q225 15 295 92" fill="none" stroke="#ed986c" stroke-width="8" stroke-dasharray="10 11" stroke-linecap="round"/><circle cx="146" cy="145" r="30" fill="#ffa46f" stroke="#224943" stroke-width="5"/><circle cx="136" cy="137" r="3.7" fill="#224943"/><circle cx="157" cy="137" r="3.7" fill="#224943"/><path d="M134 152Q146 162 159 151" stroke="#224943" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="m143 112 -11 -15m15 15 12 -14" stroke="#224943" stroke-width="4" stroke-linecap="round"/></svg>`;
  }
  function safeUrl(u){try{const p=new URL(u);return p.protocol==='https:'?p.href:''}catch(_){return'';}}
  function renderApps(){
    const q=state.query.trim().toLocaleLowerCase();const list=state.apps.filter(app=>{
      if(state.grade!=='all'&&app.grade!==state.grade)return false;
      if(state.grade==='high'&&state.highTopic!=='all'&&app.highTopic!==state.highTopic)return false;
      if(!q)return true;
      const topic=HIGH_TOPICS.find(t=>t.id===app.highTopic);
      return [app.title,...Object.values(app.description||{}),...Object.values(app.topic||{}),...Object.values(topic?.label||{})].join(' ').toLocaleLowerCase().includes(q);
    });
    const grid=$('appGrid');grid.replaceChildren();$('emptyState').hidden=list.length!==0;
    const emptyHigh=state.grade==='high'&&state.highTopic!=='all'&&!q;
    $('emptyState').querySelector('b').textContent=text(emptyHigh?'emptyHighTitle':'emptyTitle');
    $('emptyState').querySelector('p').textContent=text(emptyHigh?'emptyHighDesc':'emptyDesc');
    for(const app of list){
      const el=document.createElement('article');el.className='app-card';
      const gradeText=text(app.grade==='high'?'gradeHigh':'grade'+app.grade.toUpperCase());
      const isAvailable=app.status==='available'; const appUrl=safeUrl(app.url);const sourceUrl=safeUrl(app.sourceUrl);
      const action=isAvailable&&appUrl?`<a class="app-play" href="${esc(appUrl)}" target="_blank" rel="noopener noreferrer"><span>${esc(text('play'))}</span><span aria-hidden="true">↗</span></a>`:`<span class="app-play coming">${esc(text('comingSoon'))} <span aria-hidden="true">✳</span></span>`;
      const codeLink=isAvailable&&sourceUrl?`<a class="app-source" target="_blank" rel="noopener noreferrer" href="${esc(sourceUrl)}">${esc(text('source'))} ↗</a>`:'';
      const accent=isAvailable?app.accent:'coming';
      el.innerHTML=`<div class="app-art art-${esc(accent)}"><span class="art-label">${esc(gradeText)}</span>${artSvg(app.illustration)}</div><div class="app-content"><div class="app-meta"><span class="app-grade ${app.grade==='high'?'high':''}">${esc(gradeText)}</span><span class="app-topic">${esc(local(app.topic))}</span></div><h3>${esc(app.title)}</h3><p>${esc(local(app.description))}</p><div class="app-actions">${action}${codeLink}</div></div>`;
      grid.append(el);
    }
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
    if(right)$('miniStatus').setAttribute('aria-label',text('miniCorrect'));
  }
  function showSocial(){for(const [key,tag,link] of [['youtube','youtubeTag','youtubeLink'],['x','xTag','xLink']]){const url=safeUrl(SOCIAL[key]);$(tag).hidden=Boolean(url);$(link).hidden=!url;if(url)$(link).href=url;}}
  function installEvents(){
    document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
    $('searchInput').addEventListener('input',e=>{state.query=e.target.value;renderApps();});
    $('resetFilters').addEventListener('click',()=>{state.query='';state.grade='all';state.highTopic='all';$('searchInput').value='';renderFilters();renderApps();});
    $('miniLeft').addEventListener('click',()=>{state.position=Math.max(-5,state.position-1);drawMini();});
    $('miniRight').addEventListener('click',()=>{state.position=Math.min(5,state.position+1);drawMini();});
    $('miniReset').addEventListener('click',()=>{state.position=-2;drawMini();});
  }
  async function init(){loadLang();installEvents();renderI18n();renderFilters();drawMini();
    try{const res=await fetch('./apps.json',{cache:'no-store'});if(!res.ok)throw new Error('Catalog unavailable');const data=await res.json();if(!Array.isArray(data.apps))throw new Error('Invalid catalog');state.apps=data.apps;}
    catch(e){console.error('Unable to load apps.json:',e);$('appGrid').innerHTML='<p class="empty">アプリ一覧を読み込めませんでした。サイトを再読み込みしてください。</p>';}
    $('appCount').textContent=text('appCount',{n:state.apps.filter(a=>a.status==='available').length});renderApps();
  }
  init();
})();
