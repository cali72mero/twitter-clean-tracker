# 🐦 CleanTwitter v4.2.1 BETA

> **Twitter Media Tracker - Jetzt mit Multi-Image Support!**

[![License: Custom](https://img.shields.io/badge/License-Custom-blue.svg)](#-nutzungsbedingungen)
[![Version](https://img.shields.io/badge/Version-4.2.1_BETA-orange.svg)](https://github.com/cali72mero/twitter-clean-tracker)
[![Status](https://img.shields.io/badge/Status-Beta-yellow.svg)](https://cali72mero.github.io/twitter-clean-tracker/)
[![Safe](https://img.shields.io/badge/Ban--Risk-NONE-green.svg)](#️-sicherheit)

---

## 🚨 BETA VERSION - Was bedeutet das?

**v4.2.1 ist aktuell in BETA:**
- ✅ Stabil genug für täglichen Gebrauch
- ⚠️ Einige Features fehlen noch
- 🐛 Bugs möglich (siehe "Bekannte Probleme")
- 🔄 Updates wenn möglich (beste Bemühungen!)

---

## ⚡ Version 4.2.1 BETA - Aktuell

### ✅ WAS FUNKTIONIERT:

```diff
+ ♾️ Unbegrenzter Cache - Keine Auto-Löschung!
+ 🖼️ Multi-Image Support (alle Bilder eines Posts werden gespeichert!)
+ 💾 Download-Buttons (laden alle Bilder auf einmal)
+ 🎥 Videos & GIFs speichern (MP4)
+ 📥 HTML-Export (Archiv mit Bilder-Grid)
+ 🗂️ ZIP-Export (alle Medien ordentlich sortiert)
+ 📊 Storage-Warnung bei >5MB
+ ⚙️ Download-Buttons on/off
+ 👀 Dashboard View-Button (manueller Import - Feature!)
```

### 🐛 BEKANNTE PROBLEME (v4.2.1):

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

### 📅 RELEASE-PLAN (KEINE GARANTIE!):

```
v4.2.1 BETA:   ✅ JETZT (16.02.2026)
               (Multi-Image Fix)

v5.0 STABLE:   🚀 Wenn möglich am Wochenende
               (beste Bemühungen!)
               
v5.1:          💫 Später (Performance-Boost)
```

**⚠️ WICHTIG:** Dies sind Ziele, keine Versprechen! Ich gebe mein Bestes, das Programm zu updaten, aber kann keine festen Termine garantieren.

---

## 📖 WAS MACHT CleanTwitter?

CleanTwitter ist ein **Browser-Bookmarklet**, das deinen Twitter/X Feed analysiert und automatisch:
- ✅ **Tweets speichert** (Text, User, Datum)
- ✅ **ALLE Bilder downloadet** (auch bei 4 Bildern pro Post!)
- ✅ **Videos & GIFs speichert** (MP4)
- ✅ **Exportiert als HTML/ZIP**
- ✅ **100% lokal** - keine Server!
- ♾️ **Unbegrenzt** - kein Cache-Limit!

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

**Du bist sicher! 💚**

---

## 🚀 Installation

### Option 1: Drag & Drop (Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Ziehe** den Button "💾 CleanTwitter v4.2.1" in deine Lesezeichenleiste
3. **Fertig!** Auf Twitter/X klicken um zu starten

### Option 2: Manuell (Mobile/Desktop)

1. **Öffne:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
2. **Klick:** "📋 Code kopieren"
3. **Erstelle** ein neues Lesezeichen
4. **Füge** den Code als URL ein
5. **Fertig!** Auf Twitter/X nutzen

---

## 📋 Features v4.2.1 BETA

### ♾️ Unbegrenzter Cache
- **Kein Limit** mehr wie in v4.0/v4.1
- Alle Tweets werden gespeichert
- Warnung bei >5MB

### 🖼️ Multi-Image Support (NEU!)
- Erkennt Posts mit 2, 3 oder 4 Bildern
- Speichert **ALLE** Bilder, nicht nur das erste
- Zeigt sie im Dashboard als Grid an
- Download-Button lädt alle Bilder nacheinander

### 💾 Download-Buttons
- **Bei jedem Tweet** (optional)
- Funktioniert auf Twitter UND Dashboard
- Einstellbar: An/Aus

### 📤 Export-Optionen
- **HTML Export**: Archiv-Datei zum Browsen
- **ZIP Download**: Alle Medien gebündelt
- **Dashboard View**: Live-Ansicht (manueller Import)

---

## ⚙️ Einstellungen

### Verfügbare Settings:

```javascript
✅ Download-Buttons anzeigen (default: AN)
```

**Hinweis:** Nach Änderung Bookmarklet neu in Leiste ziehen!

---

## 🎮 Nutzung

### Schritt 1: Aktivieren

1. Gehe auf [twitter.com](https://twitter.com) / [x.com](https://x.com)
2. Klicke das Bookmarklet in deiner Leiste
3. Alert erscheint: **"🐦 CleanTwitter v4.2.1!"**
4. Badge erscheint unten rechts: **🔴 0**

### Schritt 2: Scrollen

1. **Scrolle LANGSAM** durch deinen Feed
2. Warte bis Bilder/Videos laden
3. Badge zählt hoch
4. **Unbegrenzt!** Kein Limit!

### Schritt 3: Dashboard öffnen

1. Klicke **"👀 View"** Button
2. Dashboard öffnet sich in neuem Tab
3. Warte 2-3 Sekunden (Import läuft)
4. Sieh alle gespeicherten Tweets

---

## 🐛 Bekannte Bugs & Workarounds

### 1. Zu schnell - Bilder fehlen

**Problem:** 1.5s Intervall zu schnell beim schnellen Scrollen

**Workaround:**
- Langsam scrollen!
- Warten bis Bilder laden
- Skeleton-Loader ignorieren

---

## 🔄 Changelog

### v4.2.1 BETA (16.02.2026) - HOTFIX
- ✨ **Multi-Image Support:** Speichert jetzt ALLE Bilder eines Posts! (Fix für #Bug)
- 🖼️ **Dashboard:** Zeigt Bilder im 2x2 Grid an
- 💾 **Download-Logik:** Lädt alle Bilder eines Tweets
- 🐛 **Fix:** "Nur erstes Bild gespeichert"-Bug behoben

### v4.2 BETA (16.02.2026)
- ♾️ **Unbegrenzter Cache** - Keine Auto-Löschung
- 💾 **Download-Buttons** bei jedem Tweet
- 📥 **HTML-Export** verbessert
- 🗂️ **ZIP-Export** mit Ordner-Struktur

### v4.1 (2026-02-15)
- 📦 Cache-Limit erhöht (500 Tweets)
- 🐛 Badge-Display gefixt

### v4.0 (2026-02-15)
- 🗂️ ZIP-Export neu!
- 📥 HTML-Export neu!
- 🎬 GIF-Support

---

## 🤝 Contributing

Beiträge sind willkommen!

1. **Fork** das Repository
2. **Feature Branch** erstellen
3. **Pull Request** öffnen

---

## 📄 Nutzungsbedingungen

### ✅ ERLAUBT:
- Nutzung über GitHub Pages & Lokal
- Eigener Server (nur für dich)
- Code ändern (für Fixes/Features)
- Mit Freunden teilen (Link)

### ❌ NICHT ERLAUBT:
- Verkaufen
- Für andere hosten
- Als eigenes ausgeben
- Credit entfernen

---

## 🔗 Links

- **Live Demo**: [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
- **GitHub**: [github.com/cali72mero/twitter-clean-tracker](https://github.com/cali72mero/twitter-clean-tracker)
- **Issues**: [Bug Reports](https://github.com/cali72mero/twitter-clean-tracker/issues)

---

**Made with ❤️ by cali72mero | v4.2.1 BETA | 2026**
