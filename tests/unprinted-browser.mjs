import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox']});
try {
 const p=await b.newPage({viewport:{width:1280,height:900}}),errors=[];p.on('pageerror',e=>errors.push(e.message));
 let html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 html=html.replace('\n})();\n</script>','\nwindow.__plain={S,UNPRINTED_PRODUCTS};\n})();\n</script>');
 await p.route('http://localhost:9882/',r=>r.fulfill({contentType:'text/html',body:html}));
 await p.goto('http://localhost:9882/');await p.locator('.room-card').last().click();await p.getByRole('tab',{name:/Möbel finden/}).click();
 const data=JSON.parse(await readFile(new URL('../data/unprinted-catalog.json',import.meta.url),'utf8'));
 assert.deepEqual(await p.evaluate(()=>window.__plain.UNPRINTED_PRODUCTS),data);
 assert.equal(new Set(data.map(x=>x.id)).size,82);
 for(const x of data){assert.ok(x.dims.w>0&&x.dims.h>0&&x.dims.d>0);assert.equal(new URL(x.url).hostname,'www.massivmoebel24.de');}
 await p.locator('[data-act="plain-catalog"]').click();assert.equal(await p.locator('.idea-card').count(),80);
 await p.locator('[data-f="series"][data-v="HEAVY INDUSTRY"]').click();assert.equal(await p.locator('.idea-card').count(),30);
 await p.locator('[data-f="wheels"]').click();assert.equal(await p.locator('.idea-card').count(),32);
 await p.locator('[data-f="series"][data-v="RAILWAY"]').click();assert.equal(await p.locator('.idea-card').count(),50);
 await p.setViewportSize({width:390,height:844});assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await p.locator('[data-close]:visible').first().click();await p.locator('[data-act="desk-window"]').click();
 assert.ok(await p.evaluate(()=>!!window.__plain.S.room.variantBackup));
 assert.ok(await p.evaluate(()=>window.__plain.S.room.items.some(i=>i.pkey==='stuhl'&&i.name.includes('MARKUS'))));
 assert.deepEqual(errors,[]);console.log('PASS 82 catalog entries, source consistency, series/wheel filters, mobile, chair restoration and backup');
} finally {await b.close()}
