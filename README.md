# Raumplaner Studio

Möbel ausprobieren, bevor man sie kauft: Raumfoto hochladen oder einen maßstäblichen Grundriss anlegen, Möbel aus Shops platzieren und das Budget samt Versand im Blick behalten.

## Funktionen

- **Raumfotos:** Möbel verschieben, skalieren, drehen, spiegeln, Helligkeit und Schatten anpassen, Hintergrund von Produktbildern entfernen, Maßstab über eine bekannte Strecke setzen.
- **Grundriss aus Maßen:** Draufsicht im Maßstab mit Fenster, Tür und Dachschräge. Möbel erscheinen in echten Maßen, zu hohe Möbel unter der Schräge werden markiert.
- **Vorher / Nachher:** Ist-Zustand und Plan per Schieberegler oder nebeneinander vergleichen, Fotos vom heutigen Zimmer sammeln, Vergleich als Bild speichern. Vorhandene Möbel laufen als „Bestand“ mit und zählen nicht ins Budget.
- **Passprüfung:** Raumhöhe, Dachschräge, Wände und Überschneidungen mit anderen Möbeln werden im Grundriss geprüft (rot = passt nicht). Höhe über Boden für Regale, Lampen oder Lautsprecher einstellbar.
- **3D-Ansicht:** Raum mit Schräge, Fenster und Tür als drehbares 3D-Modell. Möbel erscheinen als erkennbare Modelle in echten Maßen (Bett mit Bettzeug, Schrank mit Dreh- oder Schiebetüren, Schreibtisch mit Gestell, Bürostuhl, Regale, Leuchten, Lautsprecher …), abgeleitet aus Kategorie, Name, Farbe und Maßen. Holzboden oder Grundriss als Boden, Sonnenlicht aus Fensterrichtung mit weichen Schatten; Kollisionen werden rot umrandet, „Maßrahmen“ blendet die Außenmaße aller Möbel ein. „Bild speichern“ rendert die Ansicht hochaufgelöst (lädt Three.js aus dem Netz).
- **Audio-Planung:** Musik im ganzen Raum (2, 4 oder 6 Lautsprecher) oder Stereo/Heimkino 2.0 bis 7.1 mit Hörplatz und Frontwand; Positionen verschiebbar, als Bild speicherbar.
- **Hausplan einlesen:** Bild oder PDF (Seite wählen), Raum markieren, Maße eintragen – danach funktionieren Möbel, Prüfung, Audio und 3D auch auf dem eingescannten Plan.
- **Dachkanten aus Foto:** lange diagonale Kanten im Raumfoto als Vorschlag, Übernahme nur mit gemessenem Kniestock und Tiefe.
- **Freistellen:** zusätzlich Radierer und Zuschnitt für Produktbilder; im Raumfoto Höhe und Neigung eines Möbels anpassbar.
- **Einrichtungs-Assistent:** 18 Stile (z. B. Industrial, Skandinavisch, Japandi, Modern & Dunkel) und drei Preisklassen (Budget, Mittel, Premium). Stil und Preisklasse fließen als Suchbegriff und Preisfilter in die Shop-Suche ein.
- **Lieblingsstück hochladen:** Foto eines Möbels, das gefällt – Farben, Materialien und der passende Stil werden abgeleitet (im Browser per Farbanalyse, in der claude.ai-Version optional durch Claude). Suche, Farben und Vorschläge richten sich danach.
- **Fertige Vorschläge:** für das Beispiel „Konrads Zimmer“ 30 Einrichtungen (10 Stile × 3 Preisklassen; davon 18 neue Katalogkombinationen) mit echten Produkten, Preisen (Stand 15.11.2026) und Passprüfung. Standard ist „Industrial · Premium“. Die Produktfotos werden direkt von den Servern der Shops geladen (nicht im Repo gespeichert); dabei sieht der jeweilige Shop die Anfrage des Browsers.
- **36 Händler und Suchportale:** IKEA, OTTO, home24, XXXLutz, JYSK, mömax, POCO, ROLLER, porta, Höffner, Möbel Kraft, Segmüller, Westwing, Connox, AmbienteDirect, KARE, Tikamoon, massivum, Car-Möbel, Lampenwelt, benuta, Thomann, MediaMarkt, Amazon, moebel.de, Google Shopping, eBay, Kleinanzeigen sowie SKLUM, Beliani, Maisons du Monde, Kave Home, Tylko, Nordic Nest, BAUR und Rugvista – sortiert nach Möbelart und Preisklasse, mit Preisfilter, wo der Shop ihn in der Adresse unterstützt.
- **3D direkt ziehen:** Möbel im 3D-Raum mit Maus oder Finger auf dem Boden verschieben, „3D“ an jedem Möbel öffnet es im Raum.
- **Moodboard:** alle gewählten Produkte mit Bild, Preis und Farbpalette, als Bild speicherbar.
- **Möbel finden:** Suche direkt bei IKEA, OTTO, home24, Wayfair, Amazon, Google Shopping, eBay und Kleinanzeigen; Produktlink einfügen, Name und Händler werden erkannt.
- **Budget:** Gesamt- und Kategoriebudgets, Versand je Händler, Alternativen, Einkaufsliste als CSV oder Text.
- **Sicherung:** Räume als JSON speichern und wieder laden.

## Nutzung

`index.html` im Browser öffnen – keine Installation nötig. Alle Räume werden nur lokal im Browser gespeichert (IndexedDB).

### Verbesserte 3D-Grafik

Die 3D-Ansicht stellt Möbel nun als räumliche, aus Einzelteilen aufgebaute Kategorienmodelle dar: Tischbeine, offene Regalböden, Schranktüren, Schubladen, Sitzflächen, Bett und Kissen. Materialien orientieren sich an der gespeicherten Möbelfarbe; weiche Schatten und ein neutraler Holzboden erleichtern die räumliche Orientierung. Die Geometrie bleibt innerhalb der äußeren Möbelmaße. Es sind schematische Modelle, keine rekonstruierten Originalprodukte. Produktfotos sind weiterhin in Auswahl und Moodboard verfügbar.

Über der Ansicht stehen „Ansicht zurücksetzen“, „Draufsicht“ und „Auswahl ansehen“ zur Verfügung. Dach, Bodenplan und Maßrahmen lassen sich zuschalten. Das Dach startet ausgeblendet. Möbel können direkt gezogen werden; das optionale 5-cm-Raster rastet ihre Position ein. Die Pfeiltasten verschieben das ausgewählte Möbel im Grundriss und in 3D um 1 cm, mit Umschalt um 10 cm. Kollisionsrahmen zeigen die konservative Maßprüfung. Die 3D-Bibliothek wird beim ersten Öffnen aus dem Netz geladen; ein API-Schlüssel ist nicht erforderlich.

Die detaillierten Modelle, Oberflächen, Fenster und der hochauflösende Bildexport stammen aus dem zusammengeführten Branch `3d-moebelmodelle` (Stand `ef6dcf9`). Ergänzt wurden präzise Platzierung, Kameraansichten, transparente Dachanzeige und die Begrenzung aller Modelle auf die eingegebenen Außenmaße.

Nachtrag 16.11.2026: Die Modelle passen jetzt von sich aus in die Außenmaße, statt nachträglich gestaucht zu werden (Lautsprecher, Arbeits- und Wandleuchten, Pflanzen, Sitzsack, niedrige Betten). Dünne Wandbretter erscheinen in voller Brettstärke; ihre Konsolen hängen bis zu 12 cm darunter und sind die einzige Ausnahme von der Maßbegrenzung, weil die Produktmaße nur das Brett beschreiben. Neu sind Modelle für Verstärker, Plattenspieler und das HiFi-Möbel mit offenem Gerätefach. Das ausgewählte Möbel bekommt einen gelben Maßrahmen; „Boden: Holz/Plan“ und „Maßrahmen“ schalten ohne Neuaufbau der Szene um.

Zusätzliche Entwicklerprüfungen: `THREE_MODULE=<Pfad oder URL zur Three.js-Moduldatei> node tests/models3d.test.mjs` baut alle Katalogmöbel und typische Produktnamen als Modell und prüft, dass sie mehrteilig sind, in den Außenmaßen liegen und um höchstens 10 % gestaucht werden. `node tests/geometry3d.test.mjs` prüft die Modellauswahl nach Kategorie und Produktname. `tests/graphics-browser.mjs` prüft echte WebGL-Darstellung, äußere Modellgrenzen, Kameraschalter, Möbelziehen mit Raster, Zentimeterschritte und Mobilansicht. Dafür werden Playwright, Chromium und `THREE_TEST_FILE` mit der Three.js-0.170-Moduldatei benötigt; `PLAYWRIGHT_MODULE` und `CHROMIUM_PATH` können die lokalen Installationen angeben.

### Mehr Stile und Einzelvorschläge

Neu sind Wabi-Sabi, Mediterran, Küstenstil, Art déco, Retro & Farbe, Soft Modern, Urban Jungle und Vintage. Jeder Stil hat Suchbegriffe, eine Farbpalette, Regeln für die lokale Farbanalyse und passende Händler.

Unter „Möbel finden“ Stil, Möbelarten und Preisgrenzen wählen und „Einzelvorschläge ansehen“ öffnen. Für alle Räume werden Produkte aus dem vorhandenen Katalog und drei neu recherchierte Modelle angeboten. Die Auswahl priorisiert zugeordnete Stile und anschließend Farbähnlichkeit; sie zeigt bis zu drei unterschiedliche Händler je Möbelart. „Prüfen & übernehmen“ öffnet das bearbeitbare Formular mit Produktlink, Preis und Maßen. Vorhandene Möbel und ihre Farben bleiben unverändert.

Preisgrenzen, Preisklasse, Restbudget und Kategoriegrenzen gelten pro Vorschlag, nicht als Gesamtbudget für alle angezeigten Alternativen. Versand und fehlende Preise können zusätzliche Kosten verursachen. Artikel mit offenem Preis erscheinen getrennt und werden nicht als budgetpassend bezeichnet. Produktpreise und Lieferbarkeit werden nicht live abgefragt. Die neuen Händler-Suchlinks sind ausdrücklich als Google-Suche innerhalb der jeweiligen Shop-Domain gekennzeichnet; sie behaupten keinen Preisfilter.

Neue Produktquellen (abgerufen am 16.11.2026):
- [SKLUM Ralik Nachttisch](https://www.sklum.com/de/kaufen-nachttisch/70351-nachttisch-aus-holz-ralik.html): 76,95 €, 40 × 40 × 50 cm; Lieferzeit und Maßtoleranz stehen in der Produktnotiz.
- [Beliani BUTTE Nachttisch](https://www.beliani.de/nachttisch-hellbraun-butte.html): 40 × 30 × 60 cm; Preis war nicht auslesbar und bleibt offen.
- [Maisons du Monde Griffith Kommode](https://www.maisonsdumonde.com/DE/de/p/vintage-kommode-mit-3-schubladen-w91-griffith-248546.htm): 399 €, 90,8 × 45 × 89,8 cm; Hinweis auf die beim Abruf schwachen Kundenbewertungen.

Prüfungen: `node --test tests/recommendations.test.mjs` prüft Stile, Händlervielfalt, Produktarten und Budgetgrenzen. `tests/browser-smoke.mjs` prüft Auswahl, Preisfilter, offene Preise, Übernahme, Speicherung und Mobilansicht mit Playwright/Chromium.

### Zusätzliche Komplettvorschläge

18 neue Kombinationen für Konrads Zimmer: Japandi, Boho, Mid-Century, Minimalistisch, Vintage und Soft Modern, jeweils Budget, Mittel und Premium. Die Kombinationen verwenden reale Produkte aus dem bestehenden Katalog mit unveränderten Preisen und Maßen. Sie sind stilistische Annäherungen. Die gesamte Aufstellung muss nach dem Übernehmen mit der Passprüfung geprüft werden; es gibt keine pauschale Passgarantie. Karten zeigen Überschreitungen des Raumbudgets ohne Versand. Prüfung: `node tests/sets.test.mjs`.

### Wunschmöbel „Industrial · PANAMA“ (16.11.2026)

Zusätzlicher 31. Vorschlag für Konrads Zimmer mit vier Möbeln der Serie PANAMA von SIT (Kaufland-Angebote vom 16.11.2026): Dielenschrank 80 × 45 × 180 cm (912,25 €), Highboard 75 × 35 × 110 cm (676,66 €), Kommode 50 × 34 × 73 cm (208,51 €) und Sideboard 140 × 40 × 90 cm (969 €). Sie ersetzen den PAX aus „Industrial · Premium“; alle übrigen Produkte stammen von dort. Der Vorschlag steht als lesbarer Block direkt hinter der Zeile `KONRAD_SETS` (`PANAMA_ITEMS`), nicht in der erzeugten JSON-Zeile – `tests/sets.test.mjs` zählt deshalb weiter 30.

Der Vorschlag hat eine eigene Aufstellung (`layout: 'bett-bestand'` in `layoutKonradSet`): Konrads Bett bleibt wie im Ist-Zustand in der rechten Ecke am Kniestock, Kopfende an der rechten Wand. Dielenschrank, Highboard und Kommode stehen an der oberen Wand, das Sideboard mit den Wandbrettern an der Giebelwand unterhalb des Fensters, das Lowboard links am Kniestock, Schreibtisch und Nachttisch an der rechten Wand. Der Rollcontainer aus dem Bestand hat darin keinen Platz. Die Passprüfung meldet für diese Aufstellung keinen Konflikt; zwischen Schreibtisch, Nachttisch und Bett bleiben aber nur rund 2 cm Luft. Die Checkliste des Raums wird beim Übernehmen durch `PANAMA_CHECKLIST` ersetzt.

In 3D werden Möbel mit Metallrahmen und Frontangabe im Namen („Altmetall“, „1 Schublade, 2 Türen“) als Holzkorpus im schwarzen Rahmen mit Metallschubladen oben und Türen unten gezeichnet (Modellart `framecab`).

### HiFi und Kabelplanung

Im Grundriss „Audio“ öffnen: Stereo-Hörplatz, vier verteilte Boxen oder 5.1-Heimkino vorschlagen lassen. Die Stilpalette beeinflusst den HiFi-Möbelentwurf; seine Maße und Preise müssen eingetragen werden. Verstärkername, unabhängige Kanalzahl, X/Y-Position, Anschlusshöhe und Kabelreserve werden pro Plan gespeichert. Kabelwege zeigen den kürzeren Weg entlang des rechteckigen Raumrahmens mit Anschlussstrecken. Höhen und Reserve fließen in die Längenliste ein. Türen, Nischen und Hindernisse werden nicht umgangen. Subwoofer gelten als aktiv und sind nicht in der Passivkabelliste. Kanalzahl ist keine elektrische Kompatibilitätsprüfung. Keine gemessene Schallabdeckung. Test: `node tests/audio-cables.test.mjs`.
