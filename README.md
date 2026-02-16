# 🐦 CleanTwitter v5.1 - Rate Limit Protected

> **Smart Twitter Media Tracker mit Stealth Mode & Duplicate-Detection**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-5.1-blue.svg)](https://github.com/cali72mero/twitter-clean-tracker)
[![Status](https://img.shields.io/badge/Status-Active-success.svg)](https://cali72mero.github.io/twitter-clean-tracker/)

---

## 🎯 Was macht CleanTwitter?

CleanTwitter ist ein **Browser-Bookmarklet**, das deinen Twitter/X Feed analysiert und automatisch:
- ✅ **Tweets speichert** (Text, User, Datum)
- ✅ **Bilder downloadet** (JPG, PNG, WebP)
- ✅ **Videos & GIFs speichert** (MP4)
- ✅ **Links extrahiert** (alle URLs)
- ✅ **Threads erkennt** (zusammenhängende Tweets)
- ✅ **Duplikate filtert** (Retweets automatisch skippen)

### ❌ Was macht es NICHT?

- ❌ **Keine API-Calls** an Twitter/X Server
- ❌ **Keine externen Server** - alles läuft lokal
- ❌ **Kein Ban-Risiko** - nur DOM-Scraping
- ❌ **Keine Datenübertragung** - 100% privat
- ❌ **Keine Installation nötig** - reines Bookmarklet

---

## 🛡️ Sicherheit & Rate Limit Protection

### Warum KEIN Ban-Risiko?

**Der entscheidende Unterschied:**

```diff
❌ Twitter Bots/Apps (gefährlich):
   fetch('https://api.twitter.com/...')
   → Sendet Requests an Twitter Server
   → Rate Limits: 300 Requests/15min
   → Bei Überschreitung: ACCOUNT BAN!

✅ CleanTwitter (sicher):
   document.querySelectorAll('article')
   → Liest nur lokales HTML im Browser
   → Keine Server-Requests
   → Twitter merkt NICHTS!
```

### 🕵️ Stealth Mode Features

- **Zufällige Delays** (2-5s) - wirkt menschlich
- **Auto-Pause** nach X Tweets - verhindert Überlastung
- **Einstellbare Intervalle** - 1.5s bis 10s
- **Session Counter** - behält Überblick
- **Pause/Resume** - manuelle Kontrolle

---

## 🚀 Installation

### Option 1: Drag & Drop (Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Ziehe** den Button "💾 CleanTwitter v5.1" in deine Lesezeichenleiste
3. **Fertig!** Auf Twitter/X klicken um zu starten

### Option 2: Manuell (Mobile/Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Klick:** "📋 Code kopieren"
3. **Erstelle** ein neues Lesezeichen
4. **Füge** den Code als URL ein
5. **Fertig!** Auf Twitter/X nutzen

---

## 📋 Features im Detail

### ✨ Version 5.1 (Aktuell)

#### 🛡️ Rate Limit Protection
- **Stealth Mode**: Zufällige Delays (2-5s)
- **Auto-Pause**: Nach X Tweets (Standard: 100)
- **Session Counter**: Zeigt Fortschritt
- **Pause Button**: Badge anklicken zum Pausieren

#### 🧠 Smart Detection
- **Duplicate-Detection**: Retweets werden übersprungen
- **Thread-Erkennung**: Zusammenhängende Tweets gruppiert
- **Link-Extractor**: URLs separat gespeichert

#### 💾 Storage Management
- **Unbegrenzter Cache**: Keine automatische Löschung
- **Storage-Warnung**: Progressbar bei >80%
- **Tägliche Stats**: Heute gespeicherte Tweets

#### 📱 Mobile-Optimierung
- **Responsive Design**: Funktioniert auf allen Geräten
- **Touch-Friendly**: Große Buttons
- **iOS PWA-Ready**: Als App speicherbar

#### 📤 Export-Optionen
- **HTML Export**: Archiv-Datei
- **ZIP Download**: Alle Medien gebündelt
- **Links TXT**: Alle URLs als Textdatei

---

## ⚙️ Einstellungen

### Empfohlene Settings (SAFE MODE)

```javascript
✅ Stealth Mode: AN
✅ Scan-Intervall: 3s (Normal)
✅ Max. Tweets/Session: 100
✅ Auto-Pause: AN
✅ Retweets skippen: AN
✅ Threads erkennen: AN
✅ Links extrahieren: AN
```

### Verfügbare Intervalle

| Intervall | Beschreibung | Risiko | Empfohlen |
|-----------|--------------|--------|----------|
| 1.5s | Schnell | ⚠️ Mittel | ❌ |
| 3s | Normal | ✅ Niedrig | ✅ |
| 5s | Langsam | ✅ Sehr niedrig | ✅ |
| 10s | Ultra-Safe | 🛡️ Minimal | ✅ |

---

## 🎮 Nutzung

### Schritt 1: Aktivieren

1. Gehe auf [twitter.com](https://twitter.com) / [x.com](https://x.com)
2. Klicke das Bookmarklet in deiner Leiste
3. Alert erscheint: **"🐦 CleanTwitter v5.1!"**
4. Badge erscheint unten rechts: **🛡️ 0**

### Schritt 2: Scrollen

1. **Scrolle LANGSAM** durch deinen Feed
2. Warte bis Bilder/Videos laden
3. Badge zählt hoch: **🛡️ 5**, **🛡️ 12**, etc.
4. Bei 100 Tweets: **⏸️ 100** + Auto-Pause

### Schritt 3: Dashboard öffnen

1. Klicke **"👀 View"** Button
2. Dashboard öffnet sich in neuem Tab
3. Sieh alle gespeicherten Tweets
4. Exportiere als HTML/ZIP

### Schritt 4: Pause/Resume

- **Badge anklicken** → Pausiert
- **Badge wieder anklicken** → Fortsetzen
- **Grün** = Aktiv | **Gelb** = Pausiert | **Rot** = Limit

---

## 📊 Dashboard Features

### Übersicht-Statistiken

```
📈 TÄGLICHE ZUSAMMENFASSUNG
┌─────────────────────────────────┐
│  42 Heute  │  28 Bilder        │
│  10 Videos │   5 Threads       │
│  87 Links                       │
└─────────────────────────────────┘

📦 GESAMT
┌─────────────────────────────────┐
│  230 Tweets │ 180 Bilder        │
│   35 Videos │  15 GIFs          │
│  1.2 MB Cache                   │
└─────────────────────────────────┘
```

### Storage Progress

```
┌─────────────────────────────────┐
│ [████████░░░░░░░░] 42%         │
│ 2100 KB von ~5000 KB           │
└─────────────────────────────────┘
```

### Tweet Cards

- **Thread-Badge**: 🧵 THREAD (orange)
- **Media-Badge**: 🖼️ IMG / 🎥 VIDEO / 🎬 GIF
- **Download-Button**: 💾 Direkt downloaden
- **Timestamp**: Datum & Uhrzeit

---

## 🔧 Technische Details

### Wie funktioniert es?

1. **DOM-Scraping**: Liest `document.querySelectorAll('article[data-testid="tweet"]')`
2. **Element-Extraktion**: Findet Text, User, Bilder, Videos
3. **localStorage**: Speichert alles lokal im Browser
4. **Kein Backend**: Alles Client-Side, keine Server

### Browser-Kompatibilität

- ✅ **Chrome/Edge**: Vollständig unterstützt
- ✅ **Firefox**: Vollständig unterstützt
- ✅ **Safari**: Vollständig unterstützt
- ✅ **Opera**: Vollständig unterstützt
- ✅ **Mobile**: iOS & Android unterstützt

### Storage Limits

- **localStorage**: ~5-10 MB (Browser-abhängig)
- **Empfehlung**: Export bei 5 MB
- **Alert**: Automatisch bei >80%

---

## ❓ FAQ

### Allgemein

**Q: Kann Twitter mich bannen?**
A: **NEIN!** Wir machen keine API-Calls. Wir lesen nur HTML wie ein normaler Browser.

**Q: Sieht Twitter unser Tool?**
A: **NEIN!** Alles läuft lokal. Keine Server-Kommunikation.

**Q: Ist es legal?**
A: **JA!** Wir scrapen nur öffentliche Tweets die du eh siehst.

**Q: Funktioniert es auf privaten Accounts?**
A: **JA**, wenn du ihnen folgst und sie siehst.

### Technisch

**Q: Wo werden Daten gespeichert?**
A: Nur in deinem Browser (`localStorage`). Nirgendwo sonst.

**Q: Was passiert beim Browser-Close?**
A: Daten bleiben erhalten! Außer du leerst Browser-Cache.

**Q: Kann ich Daten exportieren?**
A: **JA!** HTML, ZIP (alle Medien), TXT (Links).

**Q: Wie lösche ich Daten?**
A: Dashboard → "🗑️ Clear" Button.

### Probleme

**Q: Badge erscheint nicht?**
A: Seite neu laden (F5) und Bookmarklet erneut klicken.

**Q: Bilder werden nicht gespeichert?**
A: Zu schnell gescrollt! Langsam scrollen, Bilder müssen laden.

**Q: 503 Error in Console?**
A: Twitter-Server-Problem, nicht unser Tool. Seite neu laden.

**Q: Dashboard zeigt nichts?**
A: Noch keine Tweets gespeichert. Auf Twitter scrollen!

---

## 📸 Screenshots

### Dashboard
![Dashboard Overview](https://via.placeholder.com/800x400/1a1a1a/00ff88?text=Dashboard+Coming+Soon)

### Twitter Badge
![Twitter Badge](https://via.placeholder.com/200x150/000000/00ff88?text=Badge+Active)

### Settings Panel
![Settings](https://via.placeholder.com/600x400/1a1a1a/4444ff?text=Settings+Panel)

---

## 🛣️ Roadmap

### v5.2 (geplant)
- [ ] **Suche & Filter** - Tweets durchsuchbar
- [ ] **Favoriten-System** - Wichtige Tweets markieren
- [ ] **JSON Export** - Für Backups
- [ ] **Dark/Light Mode Toggle**
- [ ] **Masonry Layout** - Pinterest-Style Grid

### v6.0 (geplant)
- [ ] **Cloud-Sync** - Dropbox/Google Drive
- [ ] **Multi-Device Sync** - Zwischen Geräten
- [ ] **Advanced Stats** - Charts & Graphs
- [ ] **Tag-System** - Tweets kategorisieren
- [ ] **Whitelist/Blacklist** - User-Filter

---

## 🤝 Contributing

Beiträge sind willkommen!

1. **Fork** das Repository
2. **Create** einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** deine Changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Open** einen Pull Request

---

## 📝 Changelog

### v5.1 (2026-02-16)
- ✅ Rate Limit Protection
- ✅ Stealth Mode mit zufälligen Delays
- ✅ Auto-Pause nach X Tweets
- ✅ Session Counter
- ✅ Pause/Resume Button

### v5.0 (2026-02-16)
- ✅ Duplicate-Detection (Retweets skippen)
- ✅ Thread-Erkennung
- ✅ Link-Extractor
- ✅ Tägliche Zusammenfassung
- ✅ Storage-Warnung mit Progressbar
- ✅ Mobile-Optimierung

### v4.2 (2026-02-16)
- ✅ Unbegrenzter Cache
- ✅ Cache-Größe Anzeige
- ✅ Warnung bei großem Cache
- ✅ Verbesserte Console-Logs

### v4.0 (2026-02-15)
- ✅ ZIP Download
- ✅ HTML Export
- ✅ GIF Support
- ✅ Tweet-Text Anzeige

---

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) Datei.

```
MIT License

Copyright (c) 2026 cali72mero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Links

- **Live Demo**: [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
- **GitHub**: [github.com/cali72mero/twitter-clean-tracker](https://github.com/cali72mero/twitter-clean-tracker)
- **Issues**: [github.com/cali72mero/twitter-clean-tracker/issues](https://github.com/cali72mero/twitter-clean-tracker/issues)

---

## 💖 Support

Wenn dir das Projekt gefällt:
- ⭐ **Star** auf GitHub
- 🐛 **Melde Bugs** via Issues
- 💡 **Schlage Features vor** via Issues
- 🔄 **Teile** mit anderen

---

## 👤 Autor

**cali72mero**
- GitHub: [@cali72mero](https://github.com/cali72mero)

---

## ⚠️ Disclaimer

Dieses Tool ist für **persönliche Nutzung** gedacht. Bitte respektiere Twitter's Terms of Service und die Privatsphäre anderer User. Nutze es verantwortungsvoll.

---

**Made with ❤️ by cali72mero | v5.1 | 2026**