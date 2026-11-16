import {readFileSync} from 'node:fs';import assert from 'node:assert/strict';
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');const sets=JSON.parse(html.match(/const KONRAD_SETS = (.*);/)[1]);
assert.equal(sets.length,30);assert.equal(new Set(sets.map(s=>s.id)).size,30);
for(const s of sets){assert.ok(s.items.length>=10);assert.equal(new Set(s.items.map(i=>i.key)).size,s.items.length);for(const i of s.items){assert.ok(i.price>=0);assert.equal(new URL(i.url).protocol,'https:');assert.ok(i.dims.w>0&&i.dims.h>0);}}
for(const name of ['Japandi','Boho','Mid-Century','Minimalistisch','Vintage','Soft Modern']){const group=sets.filter(s=>s.style===name);assert.equal(group.length,3);for(const s of group){assert.ok(s.generated);assert.ok(!sets.filter(x=>!x.generated).some(x=>JSON.stringify(x.items.map(i=>i.url))===JSON.stringify(s.items.map(i=>i.url))));}}
console.log('PASS: 30 unique sets, six additional styles across three tiers, concrete products and dimensions.');
