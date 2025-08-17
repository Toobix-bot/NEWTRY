# Architektur – Projekt „Vom Leben fürs Leben“

## 1. Nordstern (Leitlinie)
> *„Dieses Projekt verbindet Himmel und Erde: es ist ein wachsender Raum für Spiel, Klarheit und Verbindung.  
> Es soll mir und anderen helfen, mutig, echt und getragen durchs Leben zu gehen – mit Freude, Nutzen und Sinn.“*

---

## 2. Hauptsäulen

### 🎮 Spiel
- Regal (Shelf) als zentrale, lokale Artefakt-Sammlung (`localStorage: vlfl_shelf`).  
- Modularer Spiele‑Hub (`/games/`): eigenständige Demos (Mining, Karten, später Garden/Tower/…).  
- Story „Der Zwischenraum“ (offline JSON; optional lokale KI‑Varianten).  
- Prinzip: **kein Verlieren** → kleine Gesten, Einsichten, Mini‑Rituale statt Grind.

### 🤖 Begleiter
- Journal pro Tag (`vlfl_journal`) mit Feldern: plan, reflect, insight, artifact.  
- Auto‑Save, Import/Export (Merge + Auto‑Backup).  
- Optional: lokale KI via Ollama (HTTPS‑Gating, Mixed‑Content) mit Konnektivitäts‑Check.

### 📚 Wissen & Ausdruck
- Sammlung von Deep Researches, Essays und Recherchen.  
- Blog/Schaufenster für Familie, Freunde, Community.  
- Ort für geteiltes Wissen und bleibenden Ausdruck.

---

## 3. Philosophie
- **Individuell**: Jeder hat seinen Raum (Spiel + Begleiter).  
- **Gemeinsam**: Es gibt einen kollektiven Raum (Blog, geteilte Inhalte, Erfolge).  
- **Zwischenraum**: Experimentierfelder, wo Neues entsteht.  
- **Prinzip:** Kein Gegeneinander. Fehler = Erfahrung = XP. Wachstum ist immer gemeinsam.

---

## 4. Story (Rahmen)
- Alles ist eine **Reise**. Jeder Schritt ein Quest, jede Erfahrung ein Kapitel.  
- Symbole: **Pfad** (individuell), **Begegnung** (gemeinsam), **Forschung** (Entdeckung).  
- Kein abgeschlossenes Spiel, sondern eine fortlaufende Saga.

---

## 5. Entwicklungsphasen

**Phase 1**  
Startseite mit Nordstern, drei Türen (Spiel, Begleiter, Wissen).  

**Phase 2**  
Erste Prototypen:  
- Regal + Spiel‑Aggregation (Journal + Shelf)  
- Journal im Begleiter  
- Wissen statisch  

**Phase 3**  
Verknüpfung: Story/Minispiele/Demos befüllen Shelf; Anzeige im Regal.  

**Phase 4**  
KI‑Varianten lokal (Ollama), weitere Module (Garden/Tower/…), Politur & Doku.

---

## 6. Technik & Privacy by Design
- Statisch, ohne Frameworks (HTML/CSS/JS), GitHub Pages‑fähig.
- Lokaler Speicher: `localStorage` (Journal, Shelf, modul‑spezifische Keys).  
- Lokale KI nur auf http:// (Mixed‑Content‑Regel); zentrale Helper `shared/ai.js` (Ping + Anfrage).  
- Sicherheitsgrundsatz: kein Tracking, sicheres Rendering (DOM APIs, kein innerHTML für Nutztexte).
