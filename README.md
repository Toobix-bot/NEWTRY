# Vom Leben fürs Leben (NEWTRY)

Eine kleine, statische Umgebung zum Nachdenken, Spielen und Gestalten. Alles läuft lokal im Browser (HTML/CSS/JS) und speichert nur in deinem localStorage. Optional kannst du eine lokale KI (Ollama) nutzen – das geht aus dem Browser nur über http:// wegen Mixed‑Content.

## Schnellstart (lokal)

So startest du einen kleinen lokalen Webserver unter Windows (PowerShell), damit die optionale KI funktioniert und Dateien wie JSON sauber geladen werden:

1) Ordner in PowerShell öffnen und folgenden Befehl starten:

```powershell
# Variante A: Python (falls installiert)
python -m http.server 8000

# Variante B: Node.js (falls installiert)
npx http-server -p 8000 -c-1
```

2) Öffne im Browser: http://localhost:8000

3) Seiten:
- /begleiter/ – Journal (Plan, Reflexion, Einsicht, Artefakte)
- /spiel/ – Regalansicht (Artefakte aus Journal & Shelf)
- /spiel/story/ – Interaktive Geschichte (lädt Szenen aus scenes.json)
- /spiel/minispiele/ – Atem, Echo‑Karten, Ordnung
- /games/ – Demo‑Spiele (Mining, Karten)
- /wissen/ – Statische Info‑Seite

## Lokale KI (Ollama)

- Installiere und starte Ollama separat. Beispielmodell: gemma3:1b
- Variante A (einfach): Seiten per http:// serven; KI wird direkt via localhost:11434 angesprochen.
- Variante B (empfohlen): Node‑Server mit Proxy nutzen, damit die KI über gleiche Origin läuft:

```powershell
npm install
npm start
# öffne http://localhost:8000, KI läuft über /ollama/*
```
- Statusanzeigen findest du im Begleiter und in der Story. Wenn HTTPS aktiv ist, wird KI deaktiviert angezeigt.

## Datenschutz

Alle Daten bleiben auf deinem Gerät (localStorage). Import/Export erfolgt als lokale Datei mit optionalem Auto‑Backup.

## Entwicklung

Kein Build nötig. Reines HTML/CSS/JS. Struktur siehe ARCHITEKTUR.md.

