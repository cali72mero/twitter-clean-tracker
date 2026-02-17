# 🧪 BETA TESTING & TROUBLESHOOTING

> **Für v5.0 BETA Tester & Problem-Löser**

---

## 📍 AKTUELLE VERSION: v5.0 BETA

**Release:** 17.02.2026
**Status:** 🟡 EXPERIMENTAL (neue Features, aber mit bekannten Bugs!)
**Empfohlen:** v4.2.2 STABLE für bestes Erlebnis

---

## ⚠️ WICHTIG: v4.2.2 STABLE NUTZEN!

**Wenn du Stabilität willst, nutze v4.2.2 STABLE statt v5.0 BETA:**
- ✅ Keine Duplikat-Bugs
- ✅ Stabile Bilder-Anzeige
- ✅ Zuverlässiger ZIP-Export
- ✅ Produktiv getestet

👉 **[Zur STABLE Version](https://cali72mero.github.io/twitter-clean-tracker/)**

---

## ✅ WAS IN v5.0 BETA FUNKTIONIERT:

```diff
+ 🛡️ Stealth Mode (zufällige Intervalle 2s-6s)
+ ⏸️ Rate Limit Protection (Pause nach 50 Tweets)
+ 🧵 Thread-Erkennung
+ ✂️ Retweet-Filter
+ ♾️ Grünes Infinity-Badge statt Rot
+ 💾 Download-Buttons bei Tweets
+ 🖼️/🎥/🎬 Medien-Download (Bilder, Videos, GIFs)
+ 📥 HTML-Export
+ 🗂️ ZIP-Export
+ ⚙️ Erweiterte Settings (mehr Optionen als v4.2.2)
```

---

## ⚠️ BEKANNTE BUGS (v5.0 BETA)

### 1. Bilder werden DOPPELT angezeigt

**Status:** 🐛 Kritischer Bug! Bilder und Tweets erscheinen mehrfach im Dashboard.

**Ursache:** 
- postMessage Sync zwischen Twitter und Dashboard führt zu Duplikaten
- Deduplizierung funktioniert nicht richtig
- Import-Logik fügt Daten mehrfach hinzu

**Workaround:**
- **Nutze v4.2.2 STABLE stattdessen** (keine Duplikate!)
- ODER: Ignoriere Duplikate und nutze ZIP-Export
- ODER: Cache vor View-Button leeren

**Geplant:** Fix kommt bald!

---

### 2. Falsche Zähler beim Start

**Status:** Manchmal startet der Badge mit unrealistisch hohen Zahlen.

**Workaround:**
- Cache leeren und neu starten
- Seite neu laden

---

### 3. Keine Console Logs

**Status:** F12 Console zeigt weniger Debug-Infos als v4.2.2.

**Workaround:**
- Für Debug: v4.2.2 STABLE nutzen

---

## 🔧 HÄUFIGE PROBLEME & LÖSUNGEN

### Problem: Bilder/Videos fehlen im Cache

**Ursache:** Zu schnell gescrollt, Medien waren noch nicht vollständig geladen.

**Lösung:**
- Langsam scrollen
- Warten bis Bilder/Videos sichtbar sind
- Nicht durch Skeleton/Loader "durchrushen"

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
3. Console checken (F12): siehst du `[CT] v5.0 BETA START`?

---

### Problem: Sync funktioniert nicht

**Status:** v5.0 BETA kann Sync-Probleme haben.

**Lösung:**
- View-Button mehrfach klicken
- Warte 5 Sekunden zwischen Klicks
- **ODER: Wechsle zu v4.2.2 STABLE** für stabilen Import

---

## 🆚 v5.0 BETA vs v4.2.2 STABLE

| Feature | v4.2.2 STABLE | v5.0 BETA |
|---------|---------------|-----------|
| **Stabilität** | ✅ Produktiv | ⚠️ Experimental |
| **Duplikat-Bug** | ✅ Keine | ❌ Vorhanden |
| **Stealth Mode** | ❌ Nein | ✅ Ja (2-6s) |
| **Rate Limit** | ❌ Nein | ✅ Pause nach 50 |
| **Thread-Erkennung** | ❌ Nein | ✅ Ja |
| **Retweet-Filter** | ❌ Nein | ✅ Ja |
| **Badge-Design** | 🔴 Rot | ♾️ Grün |
| **Console Logs** | ✅ Voll | ⚠️ Reduziert |
| **Empfehlung** | ✅ **NUTZEN!** | ⚠️ Nur testen |

---

## 🛠️ DEBUG (kurz)

- Wenn etwas nicht passt: Screenshot + Console-Logs (F12) machen.
- Bitte immer Browser + OS dazuschreiben.
- Bei Duplikat-Bug: Nutze v4.2.2 STABLE statt v5.0 BETA!

---

## 📅 RELEASE-TIMELINE

```
✅ 17.02.2026
   v4.2.2 STABLE (PRODUKTIV - EMPFOHLEN!)

🧪 17.02.2026
   v5.0 BETA (EXPERIMENTAL - nur zum Testen!)

🚀 Bald
   v5.0 STABLE (wenn Duplikat-Bug behoben)

📍 Später
   v5.1 Performance-Boost
```

---

## 📄 BUG-REPORT TEMPLATE

```markdown
## Bug Report

**Version:** v5.0 BETA
**Browser:** [Chrome/Firefox/Safari] [Version]
**OS:** [Windows/Mac/Linux/Android/iOS]

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
```

---

## 🔗 WICHTIGE LINKS

- **README:** [README.md](README.md)
- **v4.2.2 STABLE (EMPFOHLEN!):** [GitHub Pages](https://cali72mero.github.io/twitter-clean-tracker/)
- **v5.0 BETA (mit Bugs!):** [Beta Version](https://cali72mero.github.io/twitter-clean-tracker/index_v5_beta.html)
- **Issues:** [Bug Reports](https://github.com/cali72mero/twitter-clean-tracker/issues)

---

**Last Updated:** v5.0 BETA (17.02.2026)
