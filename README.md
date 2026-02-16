# 🐦 CleanTwitter v5.1.2 - UNBEGRENZT!

> **Smart Twitter Media Tracker mit Stealth Mode - OHNE LIMITS!**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-5.1.2-blue.svg)](https://github.com/cali72mero/twitter-clean-tracker)
[![Status](https://img.shields.io/badge/Status-Active-success.svg)](https://cali72mero.github.io/twitter-clean-tracker/)

---

## ⚡ Version 5.1.2 - UNBEGRENZT!

```diff
+ ♾️ KEIN Tweet-Limit mehr!
+ 🚀 Scrolle so lange du willst - 1000, 5000, 10000+ Tweets!
+ ✅ Auto-Pause KOMPLETT entfernt
+ 🛡️ Stealth Mode mit zufälligen Delays
+ 📊 Nur Storage-Limit (ca. 2000-3000 Tweets)
```

---

## 🎯 Was macht CleanTwitter?

CleanTwitter ist ein **Browser-Bookmarklet**, das deinen Twitter/X Feed analysiert und automatisch:
- ✅ **Tweets speichert** (Text, User, Datum)
- ✅ **Bilder downloadet** (JPG, PNG, WebP)
- ✅ **Videos & GIFs speichert** (MP4)
- ✅ **Links extrahiert** (alle URLs)
- ✅ **Threads erkennt** (zusammenhängende Tweets)
- ✅ **Duplikate filtert** (Retweets automatisch skippen)
- ♾️ **UNBEGRENZT** (kein Tweet-Limit!)

### ❌ Was macht es NICHT?

- ❌ **Keine API-Calls** an Twitter/X Server
- ❌ **Keine externen Server** - alles läuft lokal
- ❌ **Kein Ban-Risiko** - nur DOM-Scraping
- ❌ **Keine Datenübertragung** - 100% privat
- ❌ **Keine Installation nötig** - reines Bookmarklet
- ❌ **KEIN Tweet-Limit** - scrolle unbegrenzt!

---

## 🛡️ SICHERHEIT - Warum KEIN Ban-Risiko?

### 🔒 Der entscheidende Unterschied:

```diff
❌ Twitter Bots/Apps (GEFÄHRLICH):
   fetch('https://api.twitter.com/...')
   → Sendet HTTP-Requests an Twitter Server
   → Twitter registriert JEDEN Request
   → Rate Limits: 300 Requests/15min
   → Bei Überschreitung: ACCOUNT BAN!
   → Beispiele: Twitter API Apps, Drittanbieter-Tools

✅ CleanTwitter (100% SICHER):
   document.querySelectorAll('article')
   → Liest nur HTML im Browser-Speicher
   → Keine Server-Requests = Twitter merkt NICHTS
   → Wie normales Lesen von Tweets
   → Browser zeigt eh alle Daten an
   → Wir lesen nur was schon da ist!
```

### 🔬 Technische Erklärung:

**Was Twitter sieht:**
```
1. Du öffnest twitter.com
2. Du scrollst durch Feed
3. Du liest Tweets
4. Du scrollst weiter
```

**Was Twitter NICHT sieht:**
```
❌ KEINE zusätzlichen API-Calls
❌ KEINE erkennbare Automatisierung
❌ KEINE Bot-Signatur
❌ KEINE Requests an deren Server
```

### 🛡️ Warum Stealth Mode?

**Auch wenn kein Ban-Risiko:**
- Wirkt noch **menschlicher** durch zufällige Delays
- Verhindert Browser-Überlastung
- Gibt Bildern Zeit zum Laden
- Best Practice für Web-Scraping

**Aber wichtig:**
> Selbst OHNE Stealth Mode = KEIN Ban-Risiko!
> Stealth ist nur zusätzliche Vorsicht.

---

## 🚀 Installation

### Option 1: Drag & Drop (Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Ziehe** den Button "💾 CleanTwitter v5.1.2" in deine Lesezeichenleiste
3. **Fertig!** Auf Twitter/X klicken um zu starten

### Option 2: Manuell (Mobile/Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Klick:** "📋 Code kopieren"
3. **Erstelle** ein neues Lesezeichen
4. **Füge** den Code als URL ein
5. **Fertig!** Auf Twitter/X nutzen

### ⚠️ Alte Version? Cache leeren!

**Wenn du noch alte Einstellungen siehst:**

```bash
# Desktop:
1. Strg+Shift+R (Windows/Linux)
2. Cmd+Shift+R (Mac)
3. Oder: Strg+F5

# Sicher gehen:
1. Altes Bookmarklet LÖSCHEN
2. Browser-Cache leeren (Strg+Shift+Del)
3. Seite neu laden
4. Neues Bookmarklet ziehen
```

---

## 📋 Features v5.1.2

### ♾️ Unbegrenztes Scrollen
- **Kein Tweet-Limit** mehr!
- Scrolle so lange du willst
- 1000, 5000, 10000+ Tweets möglich
- Nur Storage-Limit (ca. 2000-3000 Tweets)

### 🛡️ Rate Limit Protection
- **Stealth Mode**: Zufällige Delays (2-5s)
- **Manuelle Pause**: Badge anklicken
- **Kein Ban-Risiko**: Keine API-Calls!

### 🧠 Smart Detection
- **Duplicate-Detection**: Retweets werden übersprungen
- **Thread-Erkennung**: Zusammenhängende Tweets gruppiert
- **Link-Extractor**: URLs separat gespeichert

### 💾 Storage Management
- **Unbegrenzter Cache**: Bis zu ~5MB (2000-3000 Tweets)
- **Storage-Warnung**: Progressbar bei >80%
- **Tägliche Stats**: Heute gespeicherte Tweets

### 📱 Mobile-Optimierung
- **Responsive Design**: Funktioniert auf allen Geräten
- **Touch-Friendly**: Große Buttons
- **iOS PWA-Ready**: Als App speicherbar

### 📤 Export-Optionen
- **HTML Export**: Archiv-Datei
- **ZIP Download**: Alle Medien gebündelt
- **Links TXT**: Alle URLs als Textdatei

---

## ⚙️ Einstellungen

### Empfohlene Settings (v5.1.2)

```javascript
✅ Stealth Mode: AN
✅ Scan-Intervall: 3s (Normal)
✅ Retweets skippen: AN
✅ Threads erkennen: AN
✅ Links extrahieren: AN

❌ Auto-Pause: ENTFERNT (gibt's nicht mehr!)
❌ Max. Tweets: ENTFERNT (unbegrenzt!)
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
3. Alert erscheint: **"🐦 CleanTwitter v5.1.2!"**
4. Badge erscheint unten rechts: **♾️ 0**

### Schritt 2: Scrollen

1. **Scrolle LANGSAM** durch deinen Feed
2. Warte bis Bilder/Videos laden
3. Badge zählt hoch: **♾️ 5**, **♾️ 12**, etc.
4. **KEIN Limit!** Läuft unbegrenzt weiter!

### Schritt 3: Dashboard öffnen

1. Klicke **"👀 View"** Button
2. Dashboard öffnet sich in neuem Tab
3. Sieh alle gespeicherten Tweets
4. Exportiere als HTML/ZIP

### Schritt 4: Pause/Resume

- **Badge anklicken** → Pausiert
- **Badge wieder anklicken** → Fortsetzen
- **Grün** = Aktiv | **Gelb** = Pausiert

---

## 📊 Console-Logs (F12)

### v5.1.2 UNLIMITED:

```javascript
[CT]v5.1.2 UNLIMITED | Interval:3247ms | KEIN LIMIT!
[CT]+3 T:3      // +3 neue Tweets, 3 gesamt
[CT]+5 T:8      // +5 neue, 8 gesamt
[CT]+12 T:20
[CT]+7 T:27
...
[CT]+5 T:1024   // 1000+ Tweets!
[CT]+3 T:1027
...
[CT]+8 T:5238   // 5000+ Tweets!
[CT]+2 T:5240
... UNBEGRENZT! ♾️
```

### Badge-Anzeige:

```
♾️ 0      → Start
♾️ 124    → Nach 5 Minuten
♾️ 523    → Nach 20 Minuten
♾️ 1284   → Nach 1 Stunde
♾️ 5420   → Nach 4 Stunden
... KEIN LIMIT! ...
```

---

## ❓ FAQ

### 🛡️ Sicherheit

**Q: Kann Twitter mich bannen?**
A: **NEIN!** Wir machen keine API-Calls. Wir lesen nur HTML wie ein normaler Browser. Twitter sieht nur dass du scrollst und Tweets liest.

**Q: Sieht Twitter unser Tool?**
A: **NEIN!** Alles läuft lokal im Browser. Keine Server-Kommunikation. Keine Requests an Twitter's API.

**Q: Was ist mit Rate Limits?**
A: Rate Limits gelten nur für API-Calls. Wir machen keine → Keine Rate Limits!

**Q: Brauche ich VPN oder Proxy?**
A: **NEIN!** Völlig unnötig. Das Tool ist 100% sicher ohne VPN.

**Q: Ist es legal?**
A: **JA!** Wir scrapen nur öffentliche Tweets die du eh siehst. Wie ein Browser mit Notizblock.

### 📊 Limits

**Q: Wie viele Tweets kann ich speichern?**
A: **UNBEGRENZT** bis zum Browser-Storage-Limit (~5MB = ca. 2000-3000 Tweets).

**Q: Was passiert bei 2000 Tweets?**
A: Storage-Warnung erscheint. Exportiere als ZIP, clear Cache, weiter scrollen!

**Q: Gibt es ein Tweet-Limit pro Session?**
A: **NEIN!** v5.1.2 hat KEIN Limit mehr. Auto-Pause ist komplett entfernt.

**Q: Wie viele Tweets pro Stunde?**
A: Bei 3s Intervall: ~1200 Tweets/Stunde. Abhängig von Feed-Dichte.

### 🔧 Technisch

**Q: Wo werden Daten gespeichert?**
A: Nur in deinem Browser (`localStorage`). Nirgendwo sonst.

**Q: Was passiert beim Browser-Close?**
A: Daten bleiben erhalten! Außer du leerst Browser-Cache.

**Q: Kann ich Daten exportieren?**
A: **JA!** HTML, ZIP (alle Medien), TXT (Links).

**Q: Wie lösche ich Daten?**
A: Dashboard → "🗑️ Clear" Button.

**Q: Funktioniert es auf privaten Accounts?**
A: **JA**, wenn du ihnen folgst und sie siehst.

### 🐛 Probleme

**Q: Badge erscheint nicht?**
A: Seite neu laden (F5) und Bookmarklet erneut klicken.

**Q: Bilder werden nicht gespeichert?**
A: Zu schnell gescrollt! Langsam scrollen, Bilder müssen laden.

**Q: GitHub Pages zeigt alte Version?**
A: Cache leeren! Strg+Shift+R oder Strg+F5. Altes Bookmarklet löschen!

**Q: Tool pausiert ständig?**
A: Du hast noch v5.1.0/v5.1.1! Neue Version holen, Cache leeren!

**Q: Dashboard zeigt nichts?**
A: Noch keine Tweets gespeichert. Auf Twitter scrollen!

---

## 🔄 Changelog

### v5.1.2 (2026-02-16) - UNBEGRENZT!
- ♾️ **KEIN Tweet-Limit** mehr!
- 🚀 Scrolle so lange du willst - 1000, 5000, 10000+ Tweets!
- 🐛 **Auto-Pause KOMPLETT entfernt**
- 🐛 **Max. Tweets Setting entfernt**
- ✅ Badge zeigt ♾️ statt 🛡️
- 📊 Console: "UNLIMITED | KEIN LIMIT!"
- 🛡️ Stealth Mode bleibt aktiv

### v5.1.1 (2026-02-16) - Auto-Pause Fix
- 🐛 Auto-Pause default OFF (war bug in v5.1.0)
- 📈 Max. Tweets auf 1000 erhöht
- ✅ Badge-Klick für Pause/Resume gefixt

### v5.1.0 (2026-02-16) - Rate Limit Protection
- ✅ Rate Limit Protection
- ✅ Stealth Mode mit zufälligen Delays
- ✅ Auto-Pause nach X Tweets
- ✅ Session Counter
- ✅ Pause/Resume Button

### v5.0 (2026-02-16) - Smart Features
- ✅ Duplicate-Detection (Retweets skippen)
- ✅ Thread-Erkennung
- ✅ Link-Extractor
- ✅ Tägliche Zusammenfassung
- ✅ Storage-Warnung mit Progressbar
- ✅ Mobile-Optimierung

### v4.2 (2026-02-16) - Unbegrenzter Cache
- ✅ Unbegrenzter Cache
- ✅ Cache-Größe Anzeige
- ✅ Warnung bei großem Cache
- ✅ Verbesserte Console-Logs

### v4.0 (2026-02-15) - Media Download
- ✅ ZIP Download
- ✅ HTML Export
- ✅ GIF Support
- ✅ Tweet-Text Anzeige

---

## 🛠️ Entwicklung

### Lokaler Test:

```bash
# Repo klonen
git clone https://github.com/cali72mero/twitter-clean-tracker.git
cd twitter-clean-tracker

# index.html im Browser öffnen
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### Code-Struktur:

```
twitter-clean-tracker/
├── index.html       # Dashboard + Bookmarklet Generator
├── loader.js        # (optional) Alternativer Loader
├── README.md        # Diese Datei
└── LICENSE          # MIT License
```

---

## 🤝 Contributing

Beiträge sind willkommen!

1. **Fork** das Repository
2. **Create** einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** deine Changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Open** einen Pull Request

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
AUTHRS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 Links

- **Live Demo**: [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
- **GitHub**: [github.com/cali72mero/twitter-clean-tracker](https://github.com/cali72mero/twitter-clean-tracker)
- **Issues**: [github.com/cali72mero/twitter-clean-tracker/issues](https://github.com/cali72mero/twitter-clean-tracker/issues)
- **Latest Release**: [github.com/cali72mero/twitter-clean-tracker/releases](https://github.com/cali72mero/twitter-clean-tracker/releases)

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

**Wichtig:**
- Scraped nur öffentliche Tweets
- Respektiere private Accounts
- Keine kommerzielle Nutzung ohne Erlaubnis
- Kein Spam oder Missbrauch

---

**Made with ❤️ by cali72mero | v5.1.2 | 2026**

---

## 📚 Weitere Infos

### Warum DOM-Scraping sicher ist:

1. **Browser lädt Tweets bereits:**
   - Twitter sendet HTML an deinen Browser
   - Browser rendert die Tweets
   - Wir lesen nur was schon da ist

2. **Keine zusätzlichen Requests:**
   - Keine fetch()-Calls
   - Keine XMLHttpRequest
   - Keine WebSocket-Verbindungen

3. **Unsichtbar für Twitter:**
   - Läuft nur in deinem Browser
   - Keine Server-Kommunikation
   - Keine erkennbare Signatur

4. **Vergleichbar mit:**
   - Browser DevTools (F12)
   - Copy & Paste
   - Screenshot-Tool
   - "Seite speichern als..."

### Rate Limits erklärt:

**Twitter API Rate Limits:**
```
GET /tweets/:id          → 900 Requests / 15min
GET /users/:id/tweets    → 1500 Requests / 15min
POST /tweets             → 200 Requests / 15min

Bei Überschreitung:
→ HTTP 429 (Too Many Requests)
→ Account-Warnung
→ Temporärer Ban möglich
```

**CleanTwitter:**
```
document.querySelectorAll() → Unbegrenzt!
Keine API-Calls             → Keine Rate Limits!
Keine HTTP-Requests         → Kein Ban-Risiko!
```

---

**🚀 Viel Spaß mit CleanTwitter v5.1.2 - UNLIMITED! ♾️**