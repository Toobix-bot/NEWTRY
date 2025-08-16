# Lokale KI (Ollama) – Kurzguide

## Worum es geht
Die öffentliche GitHub-Pages-Seite läuft über **HTTPS**. Der lokale Ollama-Dienst ist **http://localhost:11434** (HTTP). Browser blocken HTTPS→HTTP-Aufrufe (Mixed Content).

## So testest du lokal
1. **Ollama starten** (App oder Dienst). Modell: `gemma3:1b`.
2. Öffne im Projekt die Datei `local/ollama-local-test.html` **lokal**:
   - Doppelklick (file://) oder
   - VS Code → *Live Server* Erweiterung → „Go Live“ (http://127.0.0.1:PORT)
3. Auf der Seite:
   - **Dienst prüfen**: `/api/tags`
   - **Modell ziehen**: `/api/pull` (falls noch nicht vorhanden)
   - **Chat senden**: `/api/chat`

### Hinweis zu CORS
Falls der Browser CORS meldet, musst du Ollama für Cross-Origin freigeben (Stichwort `OLLAMA_ORIGINS`). Das ist je nach OS/Version etwas unterschiedlich. Wir lösen das gemeinsam, wenn es auftritt.

--
Bleibt alles lokal. Die öffentliche Seite ruft deinen lokalen Dienst **nicht** an.
