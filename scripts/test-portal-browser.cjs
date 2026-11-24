const assert=require('node:assert/strict');
const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch();
 try{
  for(const width of [390,820,1366]){
   for(const [lang,label] of [['ja','利用条件・著作権'],['en','Terms of use & copyright'],['zh','使用条款与著作权']]){
    const page=await browser.newPage({viewport:{width,height:width===390?844:900}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    const url='http://127.0.0.1:8767/';
    const fit=async()=>assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow');
    await page.goto(url);
    await page.locator('[data-lang="'+lang+'"]').click();
    await page.locator('#appGrid .app-card').first().waitFor();
    await fit();
    const link=page.locator('footer [data-i18n="termsLink"]');
    assert.equal(await link.textContent(),label);
    assert.equal(await link.getAttribute('href'),'./terms.html');
    await page.locator('#searchInput').fill('PROOF RUSH');
    await page.locator('[data-detail="proof-rush"]').waitFor();
    assert.equal(await page.locator('#appGrid .app-card').count(),1);
    await page.locator('[data-detail="proof-rush"]').click();
    assert.ok(await page.locator('#details').isVisible());
    await page.keyboard.press('Escape');
    await page.locator('[data-favorite="proof-rush"]').click();
    assert.equal(await page.locator('[data-favorite="proof-rush"]').getAttribute('aria-pressed'),'true');
    await link.click();
    assert.equal(page.url(),url+'terms.html');
    await fit();
    for(const id of ['ja','en','zh']){
     await page.locator('nav a[href="#'+id+'"]').click();
     assert.ok(await page.locator('#'+id).isVisible());
    }
    const content=await page.locator('main').textContent();
    for(const phrase of ['有料の授業・講座','paid lessons and courses','收费课程','YouTube','All rights reserved.','GitHub'])assert.ok(content.includes(phrase),phrase);
    await page.locator('main nav a[href="./"]').click();
    await page.locator('#appGrid .app-card').first().waitFor();
    assert.deepEqual(errors,[]);
    console.log('PASS',width,lang);
    await page.close();
   }
  }
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
