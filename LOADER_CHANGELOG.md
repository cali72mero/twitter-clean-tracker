# 📜 loader.js - Versionshistorie

Diese Datei dokumentiert alle Änderungen zwischen den Versionen von `loader.js`.

---

## ✅ v4.2.2 — AKTUELL (19.02.2026)

### Warum wurde v4.2.2 entwickelt?
Version 3.4 hatte einen **kritischen Bug**: Nach 200 gespeicherten Tweets wurden die ältesten automatisch gelöscht. Außerdem wurde bei Tweets mit mehreren Bildern nur das erste Bild gespeichert. Diese Probleme machten v3.4 unbrauchbar für längere Sessions.

### Was ist neu?

| Feature | v3.4 (alt) | v4.2.2 (neu) |
|---|---|---|
| Tweet-Limit | ❌ Hard-Limit: 200 | ✅ Unbegrenzt ♾️ |
| Bilder pro Tweet | ❌ Nur 1 Bild | ✅ Alle Bilder (`imgs[]`) |
| Download-Buttons | ❌ Nicht vorhanden | ✅ Direkt auf Tweets |
| Video/GIF Support | ⚠️ Nur Video | ✅ Video + GIF getrennt |
| User-Agent Spoofing | ❌ Fälschlich auf iPhone | ✅ Entfernt (verursachte Probleme) |
| Badge | 🔴 Rot | 🔴 Rot (Badge-Style beibehalten) |
| Werbung entfernen | ✅ Ja | ✅ Ja |
| Skeleton entfernen | ✅ Ja | ✅ Ja |
| Heartbeat (Panel-Neustart) | ✅ Ja | ✅ Ja |

### Behobene Bugs:
- 🐛 **200er Limit:** `cache.slice(-200)` aus dem Code entfernt → Jetzt wirklich unbegrenzt
- 🐛 **Single-Image nur:** `img: imgEl.src` ersetzt durch `imgs: Array.from(imgs).map(...)` → Alle Bilder werden gespeichert
- 🐛 **UA Spoofing:** `Object.defineProperty(navigator, 'userAgent', ...)` entfernt → Keine falschen Mobile-Header mehr

---

## ❌ v3.4 — VERALTET (nicht mehr verwenden!)

### Was war drin:
- Rotes 🔴 Badge
- Scan alle 1500ms (fix)
- Heartbeat alle 2000ms
- User-Agent Spoofing auf iPhone (verursachte Probleme)
- View-Button → Dashboard öffnen (via postMessage)
- Werbung & Skeleton entfernen

### Bekannte Bugs in v3.4:
- ❌ **Hard-Limit 200 Tweets** — älteste Tweets werden bei jedem Scan gelöscht
- ❌ **Nur 1 Bild pro Tweet** — bei Tweets mit 4 Bildern gehen 3 verloren
- ❌ **User-Agent Spoofing** — Desktop-Browser meldet sich als iPhone
- ❌ **Kein Download-Button** auf Tweets
- ❌ **Kein GIF-Support** (GIFs wurden als Videos gespeichert, ohne Unterscheidung)

---

## 🔮 Geplant: v5.0 BETA Integration

Die v5.0 BETA (`index_v5_beta.html`) bringt **Stealth Mode** und **Rate Limit Protection** direkt ins Bookmarklet. Ein zukünftiges loader.js Update wird diese Features übernehmen, wenn v5.0 als Stable markiert wird.

```
v4.2.2 STABLE  →  Aktuell empfohlen
v5.0 BETA      →  Experimentell (Bookmarklet in index_v5_beta.html)
v5.1 STABLE    →  Geplant (v5.0 Features + Stealth in loader.js)
```

---

**Made with ❤️ by cali72mero | 2026**
