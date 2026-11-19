// Prüft die 3D-Möbelmodelle ohne Browser: Katalogmöbel und typische Produktnamen ergeben mehrteilige Modelle,
// die ohne nennenswertes Stauchen in den gemessenen Außenmaßen liegen. Einzige Ausnahme: Konsolen unter dünnen Wandbrettern.
// Aufruf: THREE_MODULE=<Pfad oder URL zur Three.js-Moduldatei 0.170> node tests/models3d.test.mjs
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const T = await import(process.env.THREE_MODULE || 'three');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const cut = (a, b) => { const i = html.indexOf(a), j = html.indexOf(b, i + a.length); assert.ok(i >= 0 && j > i, `Abschnitt nicht gefunden: ${a}`); return html.slice(i, j); };
const code = [cut('const clamp =', '\n'), cut('const CATS = [', 'const SWATCHES'), cut('function shade(hex, f)', 'const SIL = {'), cut('function itemDims(it)', '\n'),
  cut('const hx =', '\n'), cut('function hsl([r, g, b])', 'function colorName'), cut('const lum3 =', 'async function render3D()'), cut('const KONRAD_SETS = ', '\n')].join('\n');
const ctx = vm.createContext({});
vm.runInContext(code + '\nglobalThis.api = { makeKit, kind3, itemDims, CATS, KONRAD_SETS };', ctx);
const { makeKit, kind3, itemDims, CATS, KONRAD_SETS } = ctx.api;
const build = makeKit(T, () => null, () => null);   // Texturen brauchen ein Canvas und werden hier weggelassen

const cases = [], seen = new Set();
for (const s of KONRAD_SETS) for (const it of s.items) { const k = it.name + '|' + JSON.stringify(it.dims || {}); if (!seen.has(k)) { seen.add(k); cases.push({ name: it.name, cat: it.cat, dims: it.dims || {}, color: it.color }); } }
const catalog = cases.length;
cases.push({name:'IKEA FJÄLLBO TV-Bank schwarz, Kiefer und Metall, Gittertüren',cat:'Kommode',dims:{w:150,d:36,h:54},color:'#b78e61'});
cases.push(...[{name:'FACTORY #143 Sideboard Mango und Eisen',cat:'Kommode',dims:{w:145,d:40,h:85}}, {name:'FACTORY #106 TV-Board Mango und Eisen',cat:'Kommode',dims:{w:150,d:40,h:60}}, {name:'FACTORY #137 Schrank Mango und Eisen',cat:'Kleiderschrank',dims:{w:100,d:50,h:190}}]);
cases.push(...CATS.map(c => ({ name: c.q || c.k, cat: c.k })),
  { name: 'Bett EGHOLM mit Kopfteil', cat: 'Bett', dims: { w: 126, d: 206, h: 90 } }, { name: 'Kleiderschrank 3-türig', cat: 'Kleiderschrank', dims: { w: 150, d: 60, h: 205 } },
  { name: 'Tisch rund', cat: 'Tisch', dims: { w: 90, d: 90, h: 74 } }, { name: 'Hocker', cat: 'Stuhl', dims: { w: 35, d: 35, h: 45 } }, { name: 'Bank Eiche', cat: 'Stuhl', dims: { w: 120, d: 35, h: 45 } },
  { name: 'Würfelregal 5 × 5', cat: 'Regal', dims: { w: 182, d: 39, h: 182 } }, { name: 'Wandregal LACK', cat: 'Regal', dims: { w: 110, d: 26, h: 5 } }, { name: 'Wandregal mit Konsolen', cat: 'Regal', dims: { w: 80, d: 20, h: 20 } },
  { name: 'Hochschrank mit Schubladen', cat: 'Regal', dims: { w: 60, d: 40, h: 200 } }, { name: 'Rollcontainer', cat: 'Kommode', dims: { w: 45, d: 55, h: 62 } }, { name: 'HiFi-Möbel · Industrial', cat: 'Kommode', dims: { w: 120, d: 42, h: 60 } },
  { name: 'Sitzsack', cat: 'Sessel', dims: { w: 90, d: 90, h: 70 } }, { name: 'Stehleuchte', cat: 'Beleuchtung', dims: { w: 35, d: 35, h: 155 } }, { name: 'Pendelleuchte', cat: 'Beleuchtung', dims: { w: 40, d: 40, h: 60 } },
  { name: 'Spiegel', cat: 'Deko & Pflanzen', dims: { w: 60, d: 3, h: 160 } }, { name: 'Zimmerpflanze', cat: 'Deko & Pflanzen', dims: { w: 40, d: 40, h: 120 } },
  { name: 'Subwoofer', cat: 'Audio', dims: { w: 30, d: 30, h: 34 } }, { name: 'Stereo-Verstärker', cat: 'Audio', dims: { w: 43, d: 35, h: 12 } }, { name: 'Plattenspieler', cat: 'Audio', dims: { w: 45, d: 36, h: 13 } },
  { name: 'Verdunklungsrollo', cat: 'Sonstiges', dims: { w: 165, d: 5, h: 195 } }, { name: 'Fernseher', cat: 'Sonstiges', dims: { w: 123, d: 25, h: 78 } },
  // Wunschmöbel Serie PANAMA: Holzkorpus im Metallrahmen, Fronten laut Name
  { name: 'SIT Dielenschrank PANAMA 09264-01, Akazie natur mit Altmetall antikschwarz, 2 Türen, 3 Böden, Kleiderstange', cat: 'Kleiderschrank', dims: { w: 80, d: 45, h: 180 } }, { name: 'SIT Highboard PANAMA 09269-01, Akazie natur mit Altmetall antikschwarz, 1 Schublade, 2 Türen', cat: 'Kommode', dims: { w: 75, d: 35, h: 110 } },
  { name: 'SIT Kommode PANAMA 09208-01, Akazie natur mit Altmetall antikschwarz, 1 Schublade, 1 Tür', cat: 'Kommode', dims: { w: 50, d: 34, h: 73 } }, { name: 'SIT Sideboard PANAMA, Akazie natur mit Altmetall antikschwarz, 3 Schubladen, 3 Türen, 140 cm', cat: 'Kommode', dims: { w: 140, d: 40, h: 90 } },
  { name: 'Schubladenkommode Metallgestell, 4 Schubladen', cat: 'Kommode', dims: { w: 80, d: 40, h: 95 } }, { name: 'SIT Schuhschrank PANAMA 09258-01, Akazie natur mit Altmetall antikschwarz, 1 Klappe, 130 cm', cat: 'Kommode', dims: { w: 130, d: 40, h: 50 } },
  { name: 'Bilderrahmen 40 × 50 cm, schwarz, mit Poster oder eigenem Foto', cat: 'Deko & Pflanzen', dims: { w: 40, d: 3, h: 50 } }, { name: 'Lochplatte oder Pinnwand, schwarz, ca. 76 × 56 cm', cat: 'Deko & Pflanzen', dims: { w: 76, d: 2, h: 56 } }, { name: 'Kissen 45 × 45 cm, Rostbraun', cat: 'Deko & Pflanzen', dims: { w: 45, d: 45, h: 14 } });
const real = cases.length;
cases.push(...CATS.map(c => ({ name: c.q || c.k, cat: c.k, dims: { w: 130, d: 61, h: 190 } })));   // bewusst unpassende Maße: hier darf gestaucht werden, aber nichts übersteht

for (const [name, kind] of [['Stereo-Verstärker', 'amp'], ['Plattenspieler', 'turntable'], ['Aktivlautsprecher mit Verstärker', 'speaker']]) assert.equal(kind3({ name, cat: 'Audio' }, { w: 40, d: 30, h: 12 }), kind);
assert.equal(kind3({ name: 'HiFi-Möbel · Japandi', cat: 'Kommode' }, { w: 120, d: 42, h: 60 }), 'hifirack');
assert.equal(kind3({ name: 'Lochplatte oder Pinnwand, schwarz', cat: 'Deko & Pflanzen' }, { w: 76, d: 2, h: 56 }), 'frame');
assert.equal(kind3({ name: 'SIT Sideboard PANAMA, Altmetall, 3 Schubladen, 3 Türen', cat: 'Kommode' }, { w: 140, d: 40, h: 90 }), 'framecab');
assert.equal(kind3({ name: 'SIT Lowboard PANAMA 09215-01, Akazie mit antikschwarzem Altmetall', cat: 'Kommode' }, { w: 112, d: 40, h: 55 }), 'lowboard');

const SINGLE = new Set(['generic', 'rug', 'cushion', 'soundbar']);   // dürfen aus einem Teil bestehen
const kinds = new Set(); let worst = [1, ''];
for (const [i, c] of cases.entries()) {
  const it = { id: 't' + i, name: c.name, cat: c.cat, color: c.color || null, img: null, dims: c.dims || {} }, dm = itemDims(it), k = kind3(it, dm), g = build(it, dm);
  const h = Math.max(1, dm.h), label = `${c.name.slice(0, 50)} (${k}, ${dm.w}×${dm.d}×${dm.h})`;
  kinds.add(k); g.updateMatrixWorld(true);
  let meshes = 0; g.traverse(o => { if (o.isMesh) meshes++; });
  assert.ok(meshes > 0, `${label}: kein Modell`);
  if (!SINGLE.has(k) && dm.h > 6) assert.ok(meshes > 1,`${label}: Modell besteht nur aus einem Körper`);
  const shape = g.children[0], b = new T.Box3().setFromObject(shape), all = new T.Box3().setFromObject(g), E = .01;
  assert.ok(b.min.x >= -dm.w / 2 - E && b.max.x <= dm.w / 2 + E && b.min.y >= -E && b.max.y <= h + E && b.min.z >= -dm.d / 2 - E && b.max.z <= dm.d / 2 + E, `${label}: Modell ragt über die Außenmaße`);
  const below = -all.min.y;
  if (k === 'wallshelf' && dm.h <= 6) assert.ok(below > 3 && below <= 12 + E && all.max.y <= h + E, `${label}: Konsolen sollen höchstens 12 cm unter dem Brett hängen`);
  else assert.ok(all.equals(b), `${label}: Teile außerhalb der Einpassung sind nur für dünne Wandbretter vorgesehen`);
  if (i < real) {
    const s = Math.min(shape.scale.x, shape.scale.y, shape.scale.z);
    assert.ok(s >= .9, `${label}: Modell wird auf ${Math.round(s * 100)} % gestaucht – das Modell selbst an die Maße anpassen`);
    if (s < worst[0]) worst = [s, label];
    if (k !== 'rug') assert.ok(b.max.y > h * .5, `${label}: Modell ist deutlich niedriger als das Möbel`);
  }
  g.traverse(o => { o.geometry?.dispose(); if (o.material) [].concat(o.material).forEach(m => m.dispose()); });
}
assert.ok(kinds.size >= 30, `nur ${kinds.size} verschiedene Modellarten`);
console.log(`PASS: ${cases.length} Möbel (${catalog} aus dem Katalog), ${kinds.size} Modellarten, alle in den Außenmaßen; stärkste Stauchung ${Math.round(worst[0] * 100)} % (${worst[1]}).`);
