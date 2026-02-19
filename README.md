# 🐦 CleanTwitter v5.2 BETA

> **Twitter Media Tracker - Jetzt mit Auto-Scroller, Stealth Mode & echtem Cache-Clear!**

[![License: Custom](https://img.shields.io/badge/License-Custom-blue.svg)](#-nutzungsbedingungen)
[![Version](https://img.shields.io/badge/Version-5.2_BETA-orange.svg)](https://github.com/cali72mero/twitter-clean-tracker)
[![Stable](https://img.shields.io/badge/Stable-4.2.2-brightgreen.svg)](https://cali72mero.github.io/twitter-clean-tracker/)
[![Beta](https://img.shields.io/badge/Beta-5.2-orange.svg)](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta.html)

---

## ⚠️ WICHTIG: NUR DESKTOP BROWSER!

| Browser | Unterstützt? |
|---|---|
| ✅ Chrome (Desktop) | Ja |
| ✅ Firefox (Desktop) | Ja |
| ✅ Edge (Desktop) | Ja |
| ✅ Safari (Mac) | Ja |
| ❌ iOS Safari | Nein (Bookmarklets blockiert) |
| ❌ Android Chrome/Firefox | Nein (keine Lesezeichenleiste) |
| ❌ Twitter App | Nein (keine JS-Injection) |

---

## 🚀 VERSIONEN

| Version | Status | Link |
|---|---|---|
| v4.2.2 | ✅ **STABLE** (empfohlen für tägliche Nutzung) | [Dashboard](https://cali72mero.github.io/twitter-clean-tracker/) |
| v5.2 | ⚠️ **BETA** (mehr Features, könnte Bugs haben) | [Beta Dashboard](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta.html) |

---

## ✨ NEU IN v5.2 BETA

### 🗑️ Echter Cache-Clear (größter Fix!)

**Das Problem mit älteren Versionen:**
Das Dashboard (GitHub Pages) und das Bookmarklet (Twitter/x.com) haben **getrennten Browser-Speicher**. Ein "Cache leeren" im Dashboard löschte früher nur die Dashboard-Daten — die Daten auf Twitter blieben erhalten und wurden sofort wieder importiert.

**Die Lösung in v5.2:**
- **Neuer 🗑️ Clear-Button** direkt im Bookmarklet-Panel auf Twitter
- Klick → löscht Twitter-Speicher direkt, Badge springt auf 0
- Kein Zombie-Daten-Problem mehr!

```
Bookmarklet-Panel auf Twitter (v5.2):
┌─────────────────────┐
| ♾️ 1752          |
| 👀 View           |
| 🗑️ Clear  ← NEU!|
| 🔽 Scroll         |
└─────────────────────┘
```

### 🔽 Auto-Scroller
Scrollt automatisch langsam durch den Twitter-Feed, damit alle Bilder laden können.
- Einstellbare Geschwindigkeit (10–200 px/s, empfohlen: 30)
- Pausiert automatisch bei manueller Aktivität (Maus/Tastatur)
- Startet mit dem **🔽 Scroll**-Button im Panel

### 🛡️ Stealth Mode (Anti-Ban)
Statt fixer 1,5s-Intervalle nutzt v5.2 zufällige Scan-Pausen (2–6 Sekunden).
- Kein erkennbares Bot-Muster
- Aktivierbar/deaktivierbar im Dashboard

### ⏸️ Rate Limit Protection
Nach 50 gescannten Tweets automatische 30-Sekunden-Pause. Verhindert "Too Many Requests"-Fehler.

### 🧥 Smart Filter
- **Retweet-Filter:** Nur Original-Posts speichern
- **Thread-Erkennung:** Threads werden markiert

---

## ✅ WAS KANN v5.2?

```diff
+ 📷 Tweets, Bilder, Videos automatisch speichern
+ 🖼️ Multi-Image Support (alle 4 Bilder eines Posts)
+ 🎥 Video-Download (MP4)
+ 💾 Download-Buttons direkt auf Twitter
+ 👀 View-Button: Dashboard in neuem Tab öffnen
+ 🗑️ Clear-Button: Twitter-Cache direkt löschen
+ 🔽 Auto-Scroller: Automatisch durch Feed scrollen
+ 🛡️ Stealth Mode: Zufällige Scan-Intervalle
+ ⏸️ Rate Limit Protection: Pause nach 50 Tweets
+ ♾️ Unbegrenzter Cache
+ 🗂️ ZIP-Export aller Medien
+ 📥 HTML-Archiv-Export
+ ⚙️ Alle Features einstellbar im Dashboard
```

## ❌ WAS KANN v5.2 NICHT?

```diff
- 📱 Mobile / Handy (kein Bookmarklet-Support)
- 🔒 Private Tweets (kein Zugriff ohne Follow)
- 🔄 Rückwirkend laden (nur was beim Scrollen sichtbar ist)
- ☁️ Cloud-Sync (alles lokal)
- 🤖 Vollautomatisch im Hintergrund laufen
- 🌍 Andere Browser-Tabs analysieren
```

---

## 🔄 CHANGELOG

### v5.2 BETA (19.02.2026)

**🚨 Hauptfix: Echter Cache-Clear (Cross-Origin Problem gelöst)**
- ❌ **Problem vorher:** Dashboard und Bookmarklet haben getrennten Speicher (github.io vs x.com). "Cache leeren" im Dashboard löschte nur github.io — Twitter hatte die Daten noch und importierte sie sofort wieder.
- ✅ **Fix:** Neuer **🗑️ Clear**-Button direkt im Bookmarklet-Panel auf Twitter löscht den x.com Speicher direkt.
- ✅ **Bonus:** `CMD_CLEAR_CACHE` Remote-Befehl: Dashboard sendet Löschbefehl an Twitter-Tab (wenn via View-Button geöffnet).

**Weitere Änderungen:**
- `clearCache()` vereinfacht (wie v4.2.2: `removeItem` + `loadCache`, kein Reload)
- Kein unnötiger Page-Reload beim Cache-Clear mehr
- Bookmarklet-Version von v5.1 auf v5.2 aktualisiert
- Dashboard zeigt Erklärung zum 2-Schritt Cache-Clear

**Bekannte Bugs:** *Derzeit keine bekannt*

---

### v5.1 BETA (19.02.2026)
- 🔽 **Auto-Scroller** hinzugefügt (einstellbare Geschwindigkeit & Pause)
- 🛡️ **Stealth Mode** (zufällige 2–6s Intervalle)
- ⏸️ **Rate Limit Protection** (Pause nach 50 Tweets, 30s)
- 🧥 **Smart Filter** (Retweet-Filter, Thread-Erkennung)
- ♾️ **Grünes Infinity-Badge** (statt rot)
- ⚠️ Cache-Clear hatte noch Zombie-Daten Bug (in v5.2 gelöst)

---

### v4.2.2 STABLE (17.02.2026)
- ✅ ZIP-Export stabilisiert für 600+ Bilder
- ✅ Multi-Image Support (alle Bilder eines Posts)
- ✅ Lade-Anzeige beim ZIP-Erstellen
- ✅ Download-Buttons auf Twitter
- ✅ `twitter_clean_cache` Key (stabiles Format)

---

## 🗑️ Cache richtig leeren (v5.2)

```
SCHRITT 1: Auf Twitter
  → Klicke 🗑️ Clear im Bookmarklet-Panel
  → Bild-Zähler wird 0

SCHRITT 2: Im Dashboard
  → Klicke "Cache leeren"
  → Anzeige wird 0

Beide Schritte nötig! Twitter & Dashboard haben getrennten Speicher.
```

---

## 🚀 Installation

### Erstmalig installieren:
1. Gehe zu [Beta Dashboard](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta.html)
2. Ziehe den Button **"CleanTwitter v5.2 BETA"** in die Lesezeichenleiste
3. Auf Twitter klicken → Panel erscheint unten rechts

### Update von v5.1 auf v5.2:
1. Hard Reload Dashboard (Strg+Shift+R)
2. Altes Bookmarklet löschen
3. Neues Bookmarklet **v5.2** reinziehen
4. Fertig— 🗑️ Clear-Button ist jetzt verfügbar!

---

## 🛡️ Sicherheit & Ban-Risiko

```diff
+ Alles läuft LOKAL im Browser — kein Server
+ Keine API-Calls an Twitter/X
+ Nur DOM lesen (wie normales Browsen)
+ Keine Schreib-Operationen auf Twitter
+ Keine Daten werden nach außen übertragen
```

**v5.2 Stealth Mode** reduziert Ban-Risiko zusätzlich durch zufällige Scan-Intervalle.

---

## ⚠️ Disclaimer

- Nutzung auf **eigene Verantwortung**
- Keine Haftung für Konto-Sperrungen oder Datenverlust
- Nur für **private, legale Zwecke**
- Nicht gegen Twitter/X-Nutzungsbedingungen nutzen
- Beta-Version kann Fehler enthalten

---

## 🔗 Links

- **Stable v4.2.2:** [cali72mero.github.io/twitter-clean-tracker](https://cali72mero.github.io/twitter-clean-tracker/)
- **Beta v5.2:** [index_v5_beta.html](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta.html)
- **v5.2 Details:** [v5.2-beta-details.md](v5.2-beta-details.md)
- **GitHub:** [github.com/cali72mero/twitter-clean-tracker](https://github.com/cali72mero/twitter-clean-tracker)
- **Issues / Bugs:** [github.com/cali72mero/twitter-clean-tracker/issues](https://github.com/cali72mero/twitter-clean-tracker/issues)

---

**Made with ❤️ by cali72mero | v5.2 BETA | 2026**
