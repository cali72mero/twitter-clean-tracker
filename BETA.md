# 🧪 BETA TESTING & TROUBLESHOOTING

> **Für v5.0.1 BETA Tester & Problem-Löser**

---

## 📍 AKTUELLE VERSION: v5.0.1 BETA

**Release:** 17.02.2026
**Status:** 🟡 EXPERIMENTAL (neue Features, mögliche Bugs!)
**Vorgänger:** v5.0 BETA (beendet)
**Empfohlen:** v4.2.2 STABLE für bestes Erlebnis

---

## ✨ NEU IN v5.0.1 BETA!

**v5.0 ist beendet - Willkommen bei v5.0.1 mit erweiterten Einstellungen!**

### 🎯 Was ist neu:

**1. Einstellbare Rate Limits (🔥 HOT!)**
- 🔢 **Pause-Limit Slider:** 10-200 Tweets (Standard: 50)
- ⏱️ **Pause-Dauer Slider:** 10-300 Sekunden (Standard: 30s)
- 📊 Echtzeit-Anpassung über GitHub Page

**2. Scan-Geschwindigkeit anpassbar:**
- 🐢 **Min Intervall:** 1-10 Sekunden (Standard: 2s)
- 🐇 **Max Intervall:** 2-15 Sekunden (Standard: 6s)
- 🎲 Stealth Mode nutzt Zufallswerte zwischen Min/Max

**3. Manuelle Kontrolle auf Twitter:**
- ⏸️ **Pause-Button:** Manuell stoppen
- ▶️ **Resume-Button:** Weiter scannen
- 👀 **View-Button:** Dashboard öffnen
- 🔄 **Reset-Counter** (ohne Cache zu löschen)

**4. Alle v5.0 Features erhalten:**
- 🛡️ Stealth Mode
- 🧵 Thread-Erkennung
- ✂️ Retweet-Filter
- ♾️ Grünes Badge
- 💾 Download-Buttons

---

## ⚠️ WICHTIG: NUR DESKTOP BROWSER!

**📱 HANDY/MOBILE NICHT UNTERSTÜTZT:**
- ❌ **iOS Safari:** Bookmarklets werden blockiert (Sicherheitsgründe)
- ❌ **Android Chrome/Firefox:** Keine Lesezeichenleiste zum Ausführen
- ❌ **Twitter App:** Erlaubt keine JavaScript-Injection
- ✅ **Desktop Browser:** Chrome, Firefox, Edge, Safari (Mac)

**Grund:** Bookmarklet-Technologie funktioniert NUR auf Desktop. Mobile Browser unterstützen `javascript:` URLs nicht mehr aus Sicherheitsgründen.

**📌 Es wird NIE eine Handy-Version geben** - diese Limitation gilt für ALLE Bookmarklet-basierten Tools.

---

## ⚠️ WICHTIG: v4.2.2 STABLE NUTZEN!

**Wenn du Stabilität willst, nutze v4.2.2 STABLE statt v5.0.1 BETA:**
- ✅ Keine Duplikat-Bugs
- ✅ Stabile Bilder-Anzeige
- ✅ Zuverlässiger ZIP-Export
- ✅ Produktiv getestet

👉 **[Zur STABLE Version](https://cali72mero.github.io/twitter-clean-tracker/)**

---

## ✅ WAS IN v5.0.1 BETA FUNKTIONIERT:

```diff
+ 🎯 Einstellbare Rate Limits (10-200 Tweets)
+ ⏱️ Einstellbare Pause-Dauer (10-300s)
+ 🎲 Einstellbare Scan-Geschwindigkeit (Min/Max)
+ ⏸️ Manueller Pause/Resume Button auf Twitter
+ 🔄 Reset-Counter ohne Cache-Löschung
+ 🛡️ Stealth Mode (zufällige Intervalle)
+ ⏸️ Rate Limit Protection (anpassbar!)
+ 🧵 Thread-Erkennung
+ ✂️ Retweet-Filter
+ ♾️ Grünes Infinity-Badge
+ 💾 Download-Buttons bei Tweets
+ 🖼️/🎥 Medien-Download (Bilder, Videos, GIFs)
+ 📥 HTML-Export
+ 🗂️ ZIP-Export
+ ⚙️ Erweiterte Settings (viele Optionen!)
```

---

## ⚠️ BEKANNTE BUGS (v5.0.1 BETA)

### 1. Bilder werden möglicherweise DOPPELT angezeigt

**Status:** 🐛 Bug aus v5.0 noch vorhanden. Bilder und Tweets können mehrfach im Dashboard erscheinen.

**Ursache:** 
- postMessage Sync zwischen Twitter und Dashboard
- Deduplizierung manchmal fehlerhaft

**Workaround:**
- **Nutze v4.2.2 STABLE stattdessen** (keine Duplikate!)
- ODER: Ignoriere Duplikate und nutze ZIP-Export
- ODER: Cache vor View-Button leeren

**Geplant:** Fix kommt in v5.1 STABLE!

---

### 2. Falsche Zähler beim Start

**Status:** Manchmal startet der Badge mit unrealistisch hohen Zahlen.

**Workaround:**
- Cache leeren und neu starten
- Seite neu laden

---

### 3. Sync-Probleme

**Status:** v5.0.1 BETA kann Sync-Probleme haben.

**Lösung:**
- View-Button mehrfach klicken
- Warte 5 Sekunden zwischen Klicks
- **ODER: Wechsle zu v4.2.2 STABLE** für stabilen Import

---

## 🔧 HÄUFIGE PROBLEME & LÖSUNGEN

### Problem: Bilder/Videos fehlen im Cache

**Ursache:** Zu schnell gescrollt, Medien waren noch nicht vollständig geladen.

**Lösung:**
- Langsam scrollen
- Warten bis Bilder/Videos sichtbar sind
- Nicht durch Skeleton/Loader "durchrushen"
- **NEU:** Erhöhe Min/Max Intervall in Settings!

---

### Problem: Dashboard ist leer

**Ursache:** Normal, wenn du noch nicht importiert hast.

**Lösung:**
1. Auf Twitter/X das Bookmarklet starten
2. Scrollen und sammeln
3. Unten rechts auf **"👀 View"** klicken (Popups erlauben)
4. 2-3 Sekunden warten

---

### Problem: Badge erscheint nicht

**Lösung:**
1. Seite neu laden (F5)
2. Bookmarklet nochmal klicken
3. Console checken (F12): siehst du `[CT] v5.0.1 BETA START`?

---

### Problem: Pause-Button funktioniert nicht

**Status:** NEU in v5.0.1!

**Lösung:**
1. Stelle sicher "Pause/Resume Button zeigen" ist aktiviert
2. Bookmarklet NEU in Leiste ziehen nach Änderung
3. Seite neu laden

---

## 🆚 v5.0.1 BETA vs v5.0 BETA vs v4.2.2 STABLE

| Feature | v4.2.2 STABLE | v5.0 BETA | v5.0.1 BETA |
|---------|---------------|-----------|-------------|
| **Stabilität** | ✅ Produktiv | ⚠️ Experimental | ⚠️ Experimental |
| **Duplikat-Bug** | ✅ Keine | ❌ Vorhanden | ⚠️ Möglich |
| **Einstellbare Limits** | ❌ Nein | ❌ Nein | ✅ **JA! (Slider)** |
| **Pause-Kontrolle** | ❌ Nein | ✅ Auto | ✅ **Manuell + Auto** |
| **Scan-Geschwindigkeit** | ❌ Fix 1.5s | ✅ 2-6s | ✅ **Anpassbar!** |
| **Stealth Mode** | ❌ Nein | ✅ Ja | ✅ Ja (besser!) |
| **Thread-Erkennung** | ❌ Nein | ✅ Ja | ✅ Ja |
| **Retweet-Filter** | ❌ Nein | ✅ Ja | ✅ Ja |
| **Badge-Design** | 🔴 Rot | ♾️ Grün | ♾️ Grün |
| **Empfehlung** | ✅ **NUTZEN!** | ❌ Veraltet | 🧪 **Testen!** |

---

## 🛠️ DEBUG (kurz)

- Wenn etwas nicht passt: Screenshot + Console-Logs (F12) machen.
- Bitte immer Browser + OS dazuschreiben.
- Bei Duplikat-Bug: Nutze v4.2.2 STABLE statt v5.0.1 BETA!

---

## 📅 RELEASE-TIMELINE

```
✅ 17.02.2026
   v4.2.2 STABLE (PRODUKTIV - EMPFOHLEN!)

❌ 17.02.2026
   v5.0 BETA (BEENDET - durch v5.0.1 ersetzt)

✨ 17.02.2026
   v5.0.1 BETA (EXPERIMENTAL - erweiterte Einstellungen!)

🚀 Bald
   v5.1 STABLE (wenn Duplikat-Bug behoben)

📍 Später
   v5.2 Performance-Boost
```

---

## 📄 BUG-REPORT TEMPLATE

```markdown
## Bug Report

**Version:** v5.0.1 BETA
**Browser:** [Chrome/Firefox/Safari] [Version]
**OS:** [Windows/Mac/Linux] (KEINE Handys!)

**Einstellungen:**
- Pause-Limit: [X Tweets]
- Pause-Dauer: [X Sekunden]
- Min Intervall: [X s]
- Max Intervall: [X s]
- Stealth Mode: [An/Aus]

**Problem:**
[Beschreibung]

**Console-Logs:** (F12)
```
[CT]...
```

**Screenshots:**
[Badge, Dashboard, Console]

**Schon probiert:**
- [ ] Bookmarklet neu gezogen
- [ ] Seite neu geladen
- [ ] Langsam gescrollt
- [ ] Popups erlaubt
- [ ] v4.2.2 STABLE getestet
- [ ] Einstellungen zurückgesetzt
```

---

## 🔗 WICHTIGE LINKS

- **README:** [README.md](README.md)
- **v4.2.2 STABLE (EMPFOHLEN!):** [GitHub Pages](https://cali72mero.github.io/twitter-clean-tracker/)
- **v5.0.1 BETA (NEU!):** [Beta Version](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta.html)
- **v5.0 BETA Backup:** [Backup](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta_backup.html)
- **Issues:** [Bug Reports](https://github.com/cali72mero/twitter-clean-tracker/issues)

---

**Last Updated:** v5.0.1 BETA (17.02.2026)
