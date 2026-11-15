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
- **Einrichtungs-Assistent:** 10 Stile (z. B. Industrial, Skandinavisch, Japandi, Modern & Dunkel) und drei Preisklassen (Budget, Mittel, Premium). Stil und Preisklasse fließen als Suchbegriff und Preisfilter in die Shop-Suche ein.
- **Lieblingsstück hochladen:** Foto eines Möbels, das gefällt – Farben, Materialien und der passende Stil werden abgeleitet (im Browser per Farbanalyse, in der claude.ai-Version optional durch Claude). Suche, Farben und Vorschläge richten sich danach.
- **Fertige Vorschläge:** für das Beispiel „Konrads Zimmer“ 12 geprüfte Einrichtungen (4 Stile × 3 Preisklassen) mit echten Produkten, Preisen (Stand 15.11.2026) und Passprüfung. Standard ist „Industrial · Premium“. Die Produktfotos werden direkt von den Servern der Shops geladen (nicht im Repo gespeichert); dabei sieht der jeweilige Shop die Anfrage des Browsers.
- **28 geprüfte Shops:** IKEA, OTTO, home24, XXXLutz, JYSK, mömax, POCO, ROLLER, porta, Höffner, Möbel Kraft, Segmüller, Westwing, Connox, AmbienteDirect, KARE, Tikamoon, massivum, Car-Möbel, Lampenwelt, benuta, Thomann, MediaMarkt, Amazon, moebel.de, Google Shopping, eBay, Kleinanzeigen – sortiert nach Möbelart und Preisklasse, mit Preisfilter, wo der Shop ihn in der Adresse unterstützt.
- **3D direkt ziehen:** Möbel im 3D-Raum mit Maus oder Finger auf dem Boden verschieben, „3D“ an jedem Möbel öffnet es im Raum.
- **Moodboard:** alle gewählten Produkte mit Bild, Preis und Farbpalette, als Bild speicherbar.
- **Möbel finden:** Suche direkt bei IKEA, OTTO, home24, Wayfair, Amazon, Google Shopping, eBay und Kleinanzeigen; Produktlink einfügen, Name und Händler werden erkannt.
- **Budget:** Gesamt- und Kategoriebudgets, Versand je Händler, Alternativen, Einkaufsliste als CSV oder Text.
- **Sicherung:** Räume als JSON speichern und wieder laden.

## Nutzung

`index.html` im Browser öffnen – keine Installation nötig. Alle Räume werden nur lokal im Browser gespeichert (IndexedDB).
