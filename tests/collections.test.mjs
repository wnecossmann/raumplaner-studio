import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
const ctx=vm.createContext({});
vm.runInContext(html.slice(html.indexOf('const KONRAD_SETS ='),html.indexOf('const SET_SHORT ='))+';globalThis.api={KONRAD_SETS,COLLECTION_PRODUCTS,hasFurnitureWheels};',ctx);
const {KONRAD_SETS:sets,COLLECTION_PRODUCTS:products,hasFurnitureWheels}=ctx.api;
assert.equal(sets.length,42);
assert.equal(new Set(sets.map(s=>s.id)).size,sets.length);
for(const s of sets){
 assert.ok(!s.items.some(p=>p.cat!=='Stuhl'&&hasFurnitureWheels(p)),s.id+' has wheeled storage');
 for(const key of ['schrank','schreibtisch','stuhl','lowboard','lautsprecher']) assert.ok(s.items.some(p=>p.key===key),s.id+' missing '+key);
 assert.ok(s.items.filter(p=>p.role!=='alternative').every(p=>p.url&&p.dims.w>0&&p.dims.h>0),s.id);
}
assert.ok(sets.every(s=>/MARKUS/.test(s.items.find(p=>p.key==='stuhl').name)));
assert.ok(sets.filter(s=>s.id.startsWith('factory-foto')).every(s=>s.layout==='fensterplatz'));
assert.ok(products.some(p=>p.cat==='Kleiderschrank'&&p.price<100));
assert.ok(!hasFurnitureWheels({name:'Verdunklungsrollo'}));
assert.ok(hasFurnitureWheels({name:'Rollcontainer auf Rollen'}));
console.log('PASS 42 complete suggestions, unique IDs, office chairs allowed; no wheeled storage, real links and dimensions');
