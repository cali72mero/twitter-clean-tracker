# 🐦 CleanTwitter v4.2 BETA

> **Twitter Media Tracker - Jetzt mit unbegrenztem Cache!**

[![License: Custom](https://img.shields.io/badge/License-Custom-blue.svg)](#-nutzungsbedingungen)
[![Version](https://img.shields.io/badge/Version-4.2_BETA-orange.svg)](https://github.com/cali72mero/twitter-clean-tracker)
[![Status](https://img.shields.io/badge/Status-Beta-yellow.svg)](https://cali72mero.github.io/twitter-clean-tracker/)
[![Safe](https://img.shields.io/badge/Ban--Risk-NONE-green.svg)](#️-sicherheit)

---

## 🚨 BETA VERSION - Was bedeutet das?

**v4.2 ist aktuell in BETA:**
- ✅ Stabil genug für täglichen Gebrauch
- ⚠️ Einige Features fehlen noch
- 🐛 Bugs möglich (siehe "Bekannte Probleme")
- 🔄 Updates wenn möglich (beste Bemühungen!)

---

## ⚡ Version 4.2 BETA - Aktuell

### ✅ WAS FUNKTIONIERT:

```diff
+ ♾️ Unbegrenzter Cache - Keine Auto-Löschung!
+ 💾 Download-Buttons bei jedem Tweet
+ 🖼️ Bilder speichern (JPG, PNG, WebP)
+ 🎥 Videos speichern (MP4)
+ 🎬 GIFs speichern (MP4)
+ 📥 HTML-Export (Archiv-Datei)
+ 🗂️ ZIP-Export (alle Medien)
+ 📊 Storage-Warnung bei >5MB
+ ⚙️ Download-Buttons on/off
+ 👀 Dashboard View-Button (manueller Import - kein Bug!)
```

### 🐛 BEKANNTE PROBLEME (v4.2):

```diff
- ⚠️ Kein Rate Limit Protection
- ⚠️ Kein Stealth Mode (immer 1.5s Intervall)
- ⚠️ Keine Thread-Erkennung
- ⚠️ Keine Link-Extraktion
- ⚠️ Keine Retweet-Filter
- ⚠️ Badge rot statt grün (🔴 statt ♾️)
```

**WICHTIG:** Dashboard-Import per View-Button ist KEIN Bug - das ist ein Feature! Es gibt dir Kontrolle darüber wann Daten synchronisiert werden.

---

## 🔮 VERSION 5.0 - KOMMT WENN MÖGLICH!

### 🎯 GEPLANTE FIXES:

**1. Rate Limit Protection:**
```javascript
// v5.0 (wenn möglich):
- 🛡️ Stealth Mode mit zufälligen Delays
- ⏱️ Flexible Intervalle (1.5s - 10s)
- ⏸️ Pause/Resume-Button
- 🔄 Auto-Pause Schutz optional
```

**2. Smart Features:**
```javascript
// v5.0 (wenn möglich):
- 🧵 Thread-Erkennung (zusammenhängende Tweets)
- 🔗 Link-Extraktion (URLs separat speichern)
- ✂️ Retweet-Filter (automatisch überspringen)
- 📊 Tägliche Stats (heute gesammelte Tweets)
```

**3. Badge-Verbesserungen:**
```javascript
// Aktuell (v4.2):
🔴 24  // Rot, statisch

// v5.0 (wenn möglich):
♾️ 24  // Grün, animiert bei neuen Tweets
⏸️ 24  // Gelb bei Pause
```

**4. Dashboard-Integration:**
```javascript
// Aktuell (v4.2):
View-Button → manueller Import (Feature!)

// v5.0 (wenn möglich):
View-Button → automatische Sync (optional)
```

### 🚀 NEUE FEATURES (v5.0):

- 📈 **Storage-Progressbar** (visuell statt nur Warnung)
- 📅 **Datumsfilter** (Tweets nach Tag gruppieren)
- 🔍 **Suche** im Dashboard (User, Text, Datum)
- 📑 **Pagination** (nicht alle Tweets auf einmal laden)
- 🌓 **Dark/Light Mode** Toggle
- 📱 **PWA-Support** (als App installierbar)
- 🔔 **Notifications** bei Storage-Limit
- 📊 **Detaillierte Stats** (Tweets pro Tag, Medien-Typen)

### 📅 RELEASE-PLAN (KEINE GARANTIE!):

```
v4.2 BETA:     ✅ JETZT (16.02.2026)

v4.3 BETA:     🔄 Wenn möglich unter der Woche
               (kleine Verbesserungen/Docs/Stabilität)
               
v5.0 STABLE:   🚀 Wenn möglich am Wochenende/nächste Woche
               (beste Bemühungen!)
               
v5.1:          💫 Später (Performance-Boost)
```

**⚠️ WICHTIG:** Dies sind Ziele, keine Versprechen! Ich gebe mein Bestes, das Programm zu updaten, aber kann keine festen Termine garantieren. Updates kommen wenn möglich - wahrscheinlich besser am Wochenende (Samstag/Sonntag) als unter der Woche.

---

## 📖 WAS MACHT CleanTwitter?

CleanTwitter ist ein **Browser-Bookmarklet**, das deinen Twitter/X Feed analysiert und automatisch:
- ✅ **Tweets speichert** (Text, User, Datum)
- ✅ **Bilder downloadet** (JPG, PNG, WebP)
- ✅ **Videos & GIFs speichert** (MP4)
- ✅ **Exportiert als HTML/ZIP**
- ✅ **100% lokal** - keine Server!
- ♾️ **Unbegrenzt** - kein Cache-Limit!

### ❌ Was macht es NICHT?

- ❌ **Keine API-Calls** an Twitter/X
- ❌ **Keine externen Server**
- ❌ **Kein Ban-Risiko** (nur DOM-Scraping)
- ❌ **Keine Installation** nötig
- ❌ **Keine Datenübertragung**

---

## 🛡️ SICHERHEIT & BAN-RISIKO

### ✅ WARUM KEIN BAN-RISIKO?

**CleanTwitter ist 100% sicher vor Bans weil:**

```diff
+ 🏠 Alles läuft LOKAL in deinem Browser
+ 🚫 KEINE API-Calls an Twitter/X
+ 👁️ Wir lesen nur HTML wie ein normaler Browser
+ 👻 Kein Bot-Verhalten - nur DOM-Scraping
+ 🔒 Keine Server-Kommunikation
+ ✍️ Keine Schreib-Operationen (nur Lesen!)
```

**Twitter/X KANN NICHT:**
- Dein Tool erkennen (sieht aus wie normales Browsen)
- Dich bannen (keine Regel-Verstöße)
- Deine Daten sehen (alles lokal)

**In zukünftigen Versionen (v5.0+):**
- 🛡️ Noch besserer Schutz durch Stealth Mode
- ⏱️ Zufällige Delays (wirkt noch menschlicher)
- 🎭 Rate Limit Protection (extra Sicherheit)

**Du bist sicher! 💚**

---

## 🚀 Installation

### Option 1: Drag & Drop (Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Ziehe** den Button "💾 CleanTwitter v4.2" in deine Lesezeichenleiste
3. **Fertig!** Auf Twitter/X klicken um zu starten

### Option 2: Manuell (Mobile/Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Klick:** "📋 Code kopieren"
3. **Erstelle** ein neues Lesezeichen
4. **Füge** den Code als URL ein
5. **Fertig!** Auf Twitter/X nutzen

---

## 📋 Features v4.2 BETA

### ♾️ Unbegrenzter Cache
- **Kein Limit** mehr wie in v4.0/v4.1
- Alle Tweets werden gespeichert
- Warnung bei >5MB (ca. 2000-3000 Tweets)
- Empfohlen: Regelmäßig exportieren

### 💾 Download-Buttons
- **Bei jedem Tweet** (optional)
- Funktioniert auf Twitter UND Dashboard
- Direkt-Download ohne Export
- Einstellbar: An/Aus

### 📦 Storage Management
- **Cache-Größe** Anzeige (KB)
- **Warnung** bei großen Daten
- **Tweet-Counter** (Bilder, Videos, GIFs)
- **Empfehlung** für Export

### 📤 Export-Optionen
- **HTML Export**: Archiv-Datei zum Browsen
- **ZIP Download**: Alle Medien gebündelt
- **Dashboard View**: Live-Ansicht (manueller Import)

### 📱 Mobile-Ready
- **Responsive Design**
- **Touch-optimiert**
- Funktioniert auf iOS/Android

---

## ⚙️ Einstellungen (v4.2)

### Verfügbare Settings:

```javascript
✅ Download-Buttons anzeigen (default: AN)
```

**Hinweis:** Nach Änderung Bookmarklet neu in Leiste ziehen!

### In v5.0 kommen:

```javascript
🔄 Stealth Mode (zufällige Delays)
🔄 Scan-Intervall (1.5s - 10s)
🔄 Auto-Pause (nach X Tweets)
🔄 Retweets überspringen
🔄 Threads erkennen
🔄 Links extrahieren
```

---

## 🎮 Nutzung

### Schritt 1: Aktivieren

1. Gehe auf [twitter.com](https://twitter.com) / [x.com](https://x.com)
2. Klicke das Bookmarklet in deiner Leiste
3. Alert erscheint: **"🐦 CleanTwitter v4.2!"**
4. Badge erscheint unten rechts: **🔴 0**

### Schritt 2: Scrollen

1. **Scrolle LANGSAM** durch deinen Feed
2. Warte bis Bilder/Videos laden
3. Badge zählt hoch: **🔴 5**, **🔴 12**, etc.
4. **Unbegrenzt!** Kein Limit!

### Schritt 3: Dashboard öffnen

1. Klicke **"👀 View"** Button
2. Dashboard öffnet sich in neuem Tab
3. Warte 2-3 Sekunden (Import läuft)
4. Sieh alle gespeicherten Tweets

### Schritt 4: Export

- **📥 HTML** → Archiv zum Browsen
- **🗂️ ZIP** → Alle Medien herunterladen
- **🗑️ Clear** → Cache leeren

---

## 📊 Console-Logs (F12)

### v4.2 BETA:

```javascript
[CT]v4.2 Unlimited
[CT]+3 Total:3      // +3 neue Tweets, 3 gesamt
[CT]+5 Total:8      // +5 neue, 8 gesamt
[CT]+12 Total:20
[CT]+7 Total:27
...
```

### Badge-Anzeige:

```
🔴 0      → Start
🔴 124    → Nach 5 Minuten
🔴 523    → Nach 20 Minuten
🔴 1284   → Nach 1 Stunde
... Unbegrenzt! ...
```

---

## 🐛 Bekannte Bugs & Workarounds

### 1. Zu schnell - Bilder fehlen

**Problem:** 1.5s Intervall zu schnell beim schnellen Scrollen

**Workaround:**
- Langsam scrollen!
- Warten bis Bilder laden
- Skeleton-Loader ignorieren

**Fix kommt:** v5.0 (Stealth Mode - wenn möglich!)

### 2. Kein Pause-Button

**Problem:** Badge nicht klickbar (v4.2)

**Workaround:**
- Seite neu laden stoppt Tool
- localStorage bleibt erhalten

**Fix kommt:** v5.0 (Pause/Resume - wenn möglich!)

---

## ❓ FAQ

### 🛡️ Sicherheit

**Q: Kann Twitter mich bannen?**
A: **NEIN!** Wir machen keine API-Calls. Wir lesen nur HTML wie ein normaler Browser. Code läuft 100% lokal client-seitig.

**Q: Sieht Twitter unser Tool?**
A: **NEIN!** Alles läuft lokal im Browser. Keine Server-Kommunikation. In v5.0+ kommt noch besserer Schutz durch Stealth Mode.

**Q: Ist es legal?**
A: **JA!** Wir scrapen nur öffentliche Tweets die du eh siehst.

### 📊 Limits

**Q: Wie viele Tweets kann ich speichern?**
A: **Unbegrenzt** bis zum Browser-Storage-Limit (~50MB = ca. 10.000 Tweets).

**Q: Was passiert bei vollem Storage?**
A: Warnung erscheint. Exportiere als ZIP, clear Cache, weiter scrollen!

**Q: Wie oft exportieren?**
A: Empfohlen: Alle 500-1000 Tweets (oder bei >5MB).

### 🔧 Technisch

**Q: Wo werden Daten gespeichert?**
A: Nur in deinem Browser (`localStorage`). Nirgendwo sonst.

**Q: Was passiert beim Browser-Close?**
A: Daten bleiben erhalten! Außer du leerst Browser-Cache.

**Q: Kann ich Daten exportieren?**
A: **JA!** HTML, ZIP (alle Medien).

**Q: Funktioniert es auf privaten Accounts?**
A: **JA**, wenn du ihnen folgst und sie siehst.

### 🐛 Probleme

**Q: Badge erscheint nicht?**
A: Seite neu laden (F5) und Bookmarklet erneut klicken.

**Q: Bilder werden nicht gespeichert?**
A: Zu schnell gescrollt! Langsam scrollen, Bilder müssen laden.

**Q: Dashboard zeigt nichts?**
A: Klicke auf **"👀 View"** (Popup erlauben), warte 2-3 Sekunden, dann ist alles da.

---

## 🔄 Changelog

### v4.2 BETA (2026-02-16) - AKTUELL
- ♾️ **Unbegrenzter Cache** - Keine Auto-Löschung
- 💾 **Download-Buttons** bei jedem Tweet
- 📊 **Storage-Warnung** bei >5MB
- 📥 **HTML-Export** verbessert
- 🗂️ **ZIP-Export** mit Ordner-Struktur
- ⚙️ **Settings** für Download-Buttons

### v4.1 (2026-02-15)
- 📦 Cache-Limit erhöht (500 Tweets)
- 🐛 Badge-Display gefixt
- 📊 Stats verbessert

### v4.0 (2026-02-15)
- 🗂️ ZIP-Export neu!
- 📥 HTML-Export neu!
- 🎬 GIF-Support
- 📝 Tweet-Text Anzeige

### v3.x (2026-02-14)
- 🖼️ Bilder speichern
- 🎥 Videos speichern
- 📦 Cache-System
- 🎨 Dashboard UI

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
├── BETA.md          # Troubleshooting Guide
└── LICENSE          # Nutzungsbedingungen
```

---

## 🤝 Contributing

Beiträge sind willkommen!

1. **Fork** das Repository
2. **Create** einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** deine Changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** zum Branch (`git push origin feature/AmazingFeature`)
5. **Open** einen Pull Request

### Roadmap Mithelfen:

**Für v5.0 gesucht:**
- 🛡️ Rate Limit Protection implementieren
- 🧵 Thread-Detection Code
- 🔗 Link-Extractor
- 📊 Progressbar statt Warnung
- 🔍 Dashboard-Suche

**⚠️ WICHTIG:** Wenn du Code änderst (Bugfixes, neue Features), teile deine Änderungen bitte mit mir (@cali72mero) via Pull Request. So können alle davon profitieren!

---

## 📄 Nutzungsbedingungen

### ✅ ERLAUBT:

```diff
+ 🌐 Nutzung über GitHub Pages (cali72mero.github.io)
+ 💻 Lokale Nutzung auf eigenem PC
+ 🖥️ Eigener Server NUR für dich selbst
+ 👥 Mit Freunden teilen (via GitHub Pages Link!)
+ 🔧 Code bearbeiten für Bugfixes/Features
+ 🐛 Bugs melden & fixen
+ ⭐ Code verbessern & erweitern
```

### ❌ NICHT ERLAUBT:

```diff
- 🚫 Code als eigenes ausgeben
- 🚫 Verkaufen oder kommerziell nutzen
- 🚫 Auf eigenem Server für ANDERE hosten
- 🚫 Code klauen ohne Namensnennung
- 🚫 Änderungen NICHT zurückgeben
- 🚫 Als eigenes Projekt deklarieren
- 🚫 Mein Name (cali72mero) entfernen
```

### 📝 DETAILS:

**Was du machen DARFST:**
1. **GitHub Pages nutzen** - Immer ok!
2. **Lokal ausführen** - Auf deinem PC, kein Problem!
3. **Eigener Server** - Ok wenn NUR du Zugriff hast
4. **Mit Freunden teilen** - Gib ihnen den GitHub Pages Link!
5. **Code ändern** - Für Bugfixes & Features
6. **Verbesserungen** - Sehr gerne! Aber:

**Wenn du Code änderst:**
- ✅ Teile deine Änderungen mit mir (Pull Request)
- ✅ Behalte Namensnennung (cali72mero)
- ✅ Erwähne dass es ein Fork/Mod ist

**Was du NICHT machen darfst:**
- ❌ Auf Server hosten wo ANDERE es nutzen
- ❌ Code als dein eigenes verkaufen
- ❌ Code klauen & umbenennen
- ❌ Änderungen für dich behalten
- ❌ Mich (cali72mero) nicht erwähnen
- ❌ Als dein Projekt ausgeben

### 🤝 ZUSAMMENFASSUNG:

```
✅ Nutzen: JA!
✅ Lokal: JA!
✅ Ändern: JA! (aber teilen)
✅ Verbessern: JA! (mit Attribution)

❌ Verkaufen: NEIN!
❌ Für andere hosten: NEIN!
❌ Als eigenes ausgeben: NEIN!
❌ Ohne Credit: NEIN!
```

**Einfach gesagt:** Nutze es frei, verbessere es gerne, aber gib Credit und teile Verbesserungen! ❤️

---

## 🔗 Links

- **Live Demo**: [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
- **GitHub**: [github.com/cali72mero/twitter-clean-tracker](https://github.com/cali72mero/twitter-clean-tracker)
- **Issues**: [github.com/cali72mero/twitter-clean-tracker/issues](https://github.com/cali72mero/twitter-clean-tracker/issues)
- **Troubleshooting**: [BETA.md](BETA.md)
- **Releases**: [github.com/cali72mero/twitter-clean-tracker/releases](https://github.com/cali72mero/twitter-clean-tracker/releases)

---

## 💖 Support

Wenn dir das Projekt gefällt:
- ⭐ **Star** auf GitHub
- 🐛 **Melde Bugs** via Issues
- 💡 **Schlage Features vor** via Issues
- 🔄 **Teile** den GitHub Pages Link
- 🤝 **Contribut** zum Code (mit Pull Requests!)

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

**Sicherheit:**
- 🛡️ Kein Ban-Risiko (100% lokal)
- 🔒 Keine API-Calls
- 🏠 Alles client-seitig
- 💚 In v5.0+ noch besserer Schutz!

---

## 📢 Was kommt in v5.0? (Wenn möglich!)

### Vergleich: v4.2 BETA → v5.0 STABLE

| Feature | v4.2 BETA | v5.0 STABLE |
|---------|-----------|-------------|
| Unbegrenzter Cache | ✅ | ✅ |
| Download-Buttons | ✅ | ✅ |
| HTML/ZIP Export | ✅ | ✅ |
| Rate Limit Protection | ❌ | ✅ Stealth Mode |
| Flexible Intervalle | ❌ 1.5s fix | ✅ 1.5-10s |
| Pause/Resume | ❌ | ✅ Badge-Click |
| Thread-Erkennung | ❌ | ✅ |
| Link-Extraktion | ❌ | ✅ |
| Retweet-Filter | ❌ | ✅ |
| Tägliche Stats | ❌ | ✅ |
| Storage-Progressbar | ❌ | ✅ |
| Badge-Design | 🔴 Rot | ♾️ Grün |
| Dashboard-Sync | 👀 Manuell | ✅ Auto (optional) |

### Geplante Timeline (Keine Garantie!):

```
📍 JETZT (16.02.2026)
   v4.2 BETA - Stabil, funktioniert!
   
📍 WENN MÖGLICH (unter der Woche)
   v4.3 BETA - Kleine Verbesserungen/Docs
   
📍 WENN MÖGLICH (Wochenende/nächste Woche)
   v5.0 STABLE - Alle Features!
   (Beste Bemühungen - wahrscheinlich Samstag/Sonntag)
   
📍 SPÄTER
   v5.1 - Performance-Optimierungen
```

**⚠️ Ich gebe mein Bestes, kann aber keine festen Termine versprechen!**

---

**Made with ❤️ by cali72mero | v4.2 BETA | 2026**

**→ Nächste Updates wenn möglich! 🚀**
