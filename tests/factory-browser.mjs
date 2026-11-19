import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const b=await chromium.launch({executablePath:process.env.CHROMIUM_PATH,headless:true,args:['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
try{
 const p=await b.newPage({viewport:{width:1400,height:1000}}), errors=[];p.on('pageerror',e=>errors.push(e.message));
 let html=await readFile(new URL('../index.html',import.meta.url),'utf8');
 html=html.replace('  buildDyn(); resize();','  buildDyn(); resize(); window.__factory={items:S.room.items,backup:S.room.variantBackup,scene};');
 await p.route('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js',async r=>r.fulfill({contentType:'text/javascript',body:await readFile(process.env.THREE_TEST_FILE,'utf8')}));
 await p.route('http://localhost:9881/',r=>r.fulfill({contentType:'text/html',body:html}));
 await p.goto('http://localhost:9881/');await p.locator('.room-card').last().click();
 await p.getByRole('tab',{name:/Möbel finden/}).click();await p.locator('[data-act="factory-photo-sets"]').click();
 assert.equal(await p.locator('.set-card').count(),2);
 await p.locator('[data-act="set-apply"][data-id="factory-foto"]').click();await p.locator('[data-c="1"]').click();
 await p.locator('[data-act="v3d"]').first().click();
 await p.waitForFunction(()=>window.__factory?.items.some(i=>i.name.includes('FACTORY #143')));
 assert.ok(await p.evaluate(()=>!!window.__factory.backup));
 assert.ok(await p.evaluate(()=>{let found=false;window.__factory.scene.traverse(o=>{if(o.isMesh&&o.material?.map?.image?.width===512&&o.material?.map?.image?.height===128)found=true});return found}),'stencil texture in live scene');
 await p.screenshot({path:'/tmp/factory-room.png'});
 assert.deepEqual(errors,[]);console.log('PASS photo sets, apply with backup, live WebGL stencil furniture');
}finally{await b.close()}
