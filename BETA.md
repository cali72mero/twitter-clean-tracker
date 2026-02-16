# 🧪 BETA TESTING & TROUBLESHOOTING

> **Für v4.2 BETA Tester & Problem-Löser**

---

## 📍 AKTUELLE VERSION: v4.2 BETA

**Release:** 16.02.2026
**Status:** 🟡 BETA (stabil, aber mit bekannten Limitationen)
**Nächste Version:** v5.0 STABLE (wenn möglich)

---

## ✅ WAS IN v4.2 FUNKTIONIERT:

```diff
+ ♾️ Unbegrenzter Cache
+ 💾 Download-Buttons bei Tweets
+ 🖼️/🎥/🎬 Medien-Download (Bilder, Videos, GIFs)
+ 📥 HTML-Export
+ 🗂️ ZIP-Export
+ 📊 Storage-Warnung bei >5MB
+ ⚙️ Settings (Download-Buttons on/off)
+ 📱 Mobile-Optimierung
+ 👀 Dashboard Import via View-Button (Feature)
```

---

## ⚠️ BEKANNTE LIMITATIONEN (v4.2)

### 1. Kein Rate Limit Protection

**Status:** v4.2 scannt in einem festen Intervall (1.5s) und hat keinen Stealth/Pause-Mode.

**Workaround:**
- Langsam scrollen
- Regelmäßige Pausen machen
- Seite neu laden = Stop

**Geplant (wenn möglich):** v5.0

---

### 2. Keine Smart Features

**Fehlt in v4.2:**
- ❌ Thread-Erkennung
- ❌ Link-Extraktion
- ❌ Retweet-Filter
- ❌ Tägliche Stats

**Geplant (wenn möglich):** v5.0

---

### 3. Badge Design

**v4.2:**
- 🔴 Rot, statisch

**Geplant (wenn möglich):** v5.0
- ♾️ Grün, animiert
- ⏸️ Pause/Resume

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
3. Console checken (F12): siehst du `[CT]v4.2`?

---

## 🛠️ DEBUG (kurz)

- Wenn etwas nicht passt: Screenshot + Console-Logs (F12) machen.
- Bitte immer Browser + OS dazuschreiben.

---

## 📅 RELEASE-TIMELINE (Ziele, keine Garantie)

```
📍 16.02.2026
   ✅ v4.2 BETA

📍 Wenn möglich (unter der Woche)
   🔄 v4.3 BETA (kleine Verbesserungen/Docs)

📍 Wenn möglich (Wochenende/nächste Woche)
   🎉 v5.0 STABLE

📍 Später
   🚀 v5.1 Performance
```

---

## 📄 BUG-REPORT TEMPLATE

```markdown
## Bug Report

**Version:** v4.2 BETA
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
```

---

## 🔗 WICHTIGE LINKS

- **README:** [README.md](README.md)
- **Live Demo:** [GitHub Pages](https://cali72mero.github.io/twitter-clean-tracker/)
- **Issues:** [Bug Reports](https://github.com/cali72mero/twitter-clean-tracker/issues)
- **Releases:** [Alle Versionen](https://github.com/cali72mero/twitter-clean-tracker/releases)

---

**Last Updated:** v4.2 BETA (16.02.2026)
