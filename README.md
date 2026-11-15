# Raumplaner Studio

Möbel ausprobieren, bevor man sie kauft: Raumfoto hochladen oder einen maßstäblichen Grundriss anlegen, Möbel aus Shops platzieren und das Budget samt Versand im Blick behalten.

## Funktionen

- **Raumfotos:** Möbel verschieben, skalieren, drehen, spiegeln, Helligkeit und Schatten anpassen, Hintergrund von Produktbildern entfernen, Maßstab über eine bekannte Strecke setzen.
- **Grundriss aus Maßen:** Draufsicht im Maßstab mit Fenster, Tür und Dachschräge. Möbel erscheinen in echten Maßen, zu hohe Möbel unter der Schräge werden markiert.
- **Vorher / Nachher:** Ist-Zustand und Plan per Schieberegler oder nebeneinander vergleichen, Fotos vom heutigen Zimmer sammeln, Vergleich als Bild speichern. Vorhandene Möbel laufen als „Bestand“ mit und zählen nicht ins Budget.
- **Passprüfung:** Raumhöhe, Dachschräge, Wände und Überschneidungen mit anderen Möbeln werden im Grundriss geprüft (rot = passt nicht). Höhe über Boden für Regale, Lampen oder Lautsprecher einstellbar.
- **3D-Ansicht:** Raum mit Schräge, Fenster und Tür als drehbares 3D-Modell, Möbel als Maßkörper mit Prüffarbe (lädt Three.js aus dem Netz).
- **Audio-Planung:** Musik im ganzen Raum (2, 4 oder 6 Lautsprecher) oder Stereo/Heimkino 2.0 bis 7.1 mit Hörplatz und Frontwand; Positionen verschiebbar, als Bild speicherbar.
- **Hausplan einlesen:** Bild oder PDF (Seite wählen), Raum markieren, Maße eintragen – danach funktionieren Möbel, Prüfung, Audio und 3D auch auf dem eingescannten Plan.
- **Dachkanten aus Foto:** lange diagonale Kanten im Raumfoto als Vorschlag, Übernahme nur mit gemessenem Kniestock und Tiefe.
- **Freistellen:** zusätzlich Radierer und Zuschnitt für Produktbilder; im Raumfoto Höhe und Neigung eines Möbels anpassbar.
- **Möbel finden:** Suche direkt bei IKEA, OTTO, home24, Wayfair, Amazon, Google Shopping, eBay und Kleinanzeigen; Produktlink einfügen, Name und Händler werden erkannt.
- **Budget:** Gesamt- und Kategoriebudgets, Versand je Händler, Alternativen, Einkaufsliste als CSV oder Text.
- **Sicherung:** Räume als JSON speichern und wieder laden.

## Nutzung

`index.html` im Browser öffnen – keine Installation nötig. Alle Räume werden nur lokal im Browser gespeichert (IndexedDB).

## Konkrete Möbelvorschläge

Im Bereich **Möbel finden** lassen sich jetzt ein Möbelstil und mehrere gewünschte Möbelarten auswählen. Darunter erscheinen automatisch konkrete Modelle aus einem lokalen Beispielkatalog mit 25 Einträgen: mit der vorhandenen Möbelgrafik, Modellname, Händler, Richtpreis und Modellsuchlink beim Händler. Es werden keine externen APIs benötigt.

Die Vorschläge berücksichtigen „Preis ab/bis“, das bekannte Restbudget und verbleibende Kategorienbudgets. Bestandsmöbel und ausgeschlossene Alternativen belasten das Budget weiterhin nicht. Stil und gewünschte Möbelarten werden pro Raum gespeichert und mit einer Sicherung exportiert. Der Stil ergänzt auch die vorhandenen Shop-Suchlinks.

**Vorschlag prüfen und übernehmen** öffnet das bestehende Möbelformular. Der Modellname und Händlerlink sind vorbelegt; tatsächlicher Preis und bestätigte Maße werden bewusst selbst eingetragen. Richtpreise sind keine Live-Angebote, Beispielgrößen keine bestätigten Außenmaße. Die Links führen zur Suche des benannten Modells, nicht zu einer live geprüften verfügbaren Variante. Mehrere Vorschläge sind Alternativen, kein gemeinsam budgetgeprüftes Set. Für nicht im Katalog vertretene Kombinationen bleibt die normale Shop-Suche verfügbar.

### Entwicklung prüfen

Die App bleibt eine einzelne HTML-Datei ohne Installation. Optionale Entwicklerprüfungen:

- `node --test tests/recommendations.test.mjs` prüft Stil, Kategorie, Preisgrenzen, Budget und Modelllinks ohne zusätzliche Pakete.
- `node tests/browser-smoke.mjs` prüft Auswahl, Filter, Übernahme, Speicherung und mobile Ansicht mit installiertem Playwright/Chromium. Bei Bedarf lassen sich `PLAYWRIGHT_MODULE` und `CHROMIUM_PATH` für vorhandene Installationen setzen.
