import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox']});
try{
 const p=await b.newPage({viewport:{width:1280,height:900}}), errors=[];p.on('pageerror',e=>errors.push(e.message));
 const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 await p.route('http://localhost:9880/',r=>r.fulfill({contentType:'text/html',body:html}));
 await p.goto('http://localhost:9880/');await p.locator('.room-card').last().click();
 await p.getByRole('tab',{name:/Möbel finden/}).click();
 await p.locator('[data-act="sets"]').first().click();
 assert.equal(await p.locator('.set-card').count(),40);
 await p.locator('[data-act="set-filter"][data-f="sort"][data-v="price"]').click();
 await p.locator('.set-card details summary').first().click();
 assert.ok(await p.locator('.set-card details[open] a').count()>8);
 await p.locator('[data-act="set-filter"][data-f="layout"][data-v="fensterplatz"]').click();
 assert.equal(await p.locator('[data-f="layout"][data-v="fensterplatz"]').getAttribute('aria-pressed'),'true');
 await p.setViewportSize({width:390,height:844});
 assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 assert.deepEqual(errors,[]);console.log('PASS set browsing, 40 cards, full product lists, layout selection and mobile');
}finally{await b.close()}
