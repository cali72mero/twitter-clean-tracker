# 🧪 BETA / TROUBLESHOOTING GUIDE

> **Für alle die Probleme haben oder testen wollen**

---

## 🐛 AKTUELLE BEKANNTE PROBLEME

### ✅ GEFIXT in v5.1.3:

**Problem:** Dashboard zeigt keine Tweets obwohl Tool sammelt
- **Grund:** localStorage-Key Mismatch
- **Fix:** v5.1.3 unified alle Keys auf `twitter_clean_cache`
- **Status:** ✅ GEFIXT

**Problem:** Auto-Pause kommt ständig
- **Grund:** v5.1.0 hatte Auto-Pause default ON
- **Fix:** v5.1.2 komplett entfernt
- **Status:** ✅ GEFIXT

**Problem:** Badge zeigt 🛡️ statt ♾️
- **Grund:** Alte Version läuft noch
- **Fix:** Cache leeren, neue Version ziehen
- **Status:** ✅ GEFIXT

---

## ⚠️ HÄUFIGE FEHLER (NICHT UNSER TOOL!)

### 1. ERR_PROXY_CONNECTION_FAILED

```
main.da71110a.js:31 net::ERR_PROXY_CONNECTION_FAILED
```

**Was ist das?**
- Twitter's eigene API-Calls scheitern
- Proxy-Server antwortet nicht
- Twitter-internes Problem

**Woher kommt es?**
- `main.da71110a.js` = Twitter's eigener Code!
- Nicht unser Tool (unser Tool: `VM462:1`)

**Was tun?**
```
1. Ignorieren! Tool funktioniert trotzdem
2. Oder: Proxy in Browser deaktivieren
3. Oder: VPN aus/an schalten
4. Oder: Warten bis Twitter's Server wieder ok
```

**Beweise dass es Twitter ist:**
```javascript
// TWITTER's Code:
main.da71110a.js:31 → ERR_PROXY_CONNECTION_FAILED
vendor.dd6f616a.js:112 → dispatch error

// UNSER Tool (funktioniert!):
VM462:1 [CT]v5.1.3 HOTFIX
VM462:1 [CT]+4 T:4  ← Sammelt Tweets!
VM462:1 [CT]+2 T:6
```

---

### 2. HTTP 503 Errors

```
Failed to load resource: the server responded with a status of 503
/i/api/graphql/y_gEr8-rsIu-XEOVAkh00A/HomeTimeline
```

**Was ist das?**
- Twitter's Server sind überlastet
- 503 = Service Unavailable
- Twitter-Server-Problem

**Woher kommt es?**
- `/i/api/graphql/` = Twitter's API-Endpoint!
- Nicht unser Tool (wir machen keine API-Calls!)

**Was tun?**
```
1. 5-10 Minuten warten
2. Seite neu laden (F5)
3. Hard Refresh (Strg+Shift+R)
4. Inkognito-Modus probieren
```

---

### 3. ApiError HTTP-200 codes:[null]

```
ApiError: https://api.twitter.com/graphql/.../Viewer HTTP-200 codes:[null]
```

**Was ist das?**
- Twitter's API antwortet (200 OK)
- Aber Daten sind leer/null
- Twitter-internes Problem

**Ist das schlimm?**
- Nein! Tweets werden trotzdem angezeigt
- Nur Twitter's Sidebar-Features fehlen
- Unser Tool funktioniert trotzdem!

**Was tun?**
```
1. Ignorieren
2. Solange Tweets sichtbar = Tool funktioniert
```

---

## 🛡️ WIE ERKENNE ICH OB ES UNSER TOOL IST?

### Check Console (F12):

**UNSER Tool:**
```javascript
VM462:1 [CT]v5.1.3 HOTFIX        ← UNSERE Logs!
VM462:1 [CT]+4 T:4
VM271:1 [CT]v5.1.2 UNLIMITED

Präfix: VM + Nummer
Inhalt: [CT] = CleanTwitter
```

**TWITTER's Code:**
```javascript
main.da71110a.js:31 ApiError     ← TWITTER's Logs!
vendor.dd6f616a.js:112 dispatch
home:353 Promise.then

Präfix: Dateiname (.js)
Inhalt: Keine [CT] Logs
```

---

## 🐛 ECHTE PROBLEME ERKENNEN:

### Dashboard ist leer ABER Console zeigt Tweets:

```javascript
[CT]+4 T:4   ← 4 Tweets gefunden!
[CT]+2 T:6   ← 6 Tweets gesamt!

ABER: Dashboard zeigt 0 Tweets
```

**Problem:** localStorage-Key Mismatch

**Lösung:**
```bash
1. Cache leeren (Strg+Shift+Del)
2. Browser neu starten
3. Neue Version holen (v5.1.3)
4. Altes Bookmarklet LÖSCHEN
5. Neues v5.1.3 ziehen
6. Auf Twitter testen
```

---

### Tool pausiert ständig:

```javascript
[CT]PAUSED
[CT]PAUSED
[CT]PAUSED
```

**Problem:** Alte Version (v5.1.0/v5.1.1) läuft noch

**Lösung:**
```bash
1. Twitter-Tab KOMPLETT schließen
2. F12 Console öffnen in neuem Tab
3. Eingeben: localStorage.clear()
4. Neuen Tab: twitter.com
5. NUR neue Version (v5.1.3) klicken
```

---

### Mehrere Versionen laufen gleichzeitig:

```javascript
VM203:1 [CT]PAUSED           ← Alte Version
VM271:1 [CT]v5.1.2 UNLIMITED ← Neue Version
```

**Problem:** Beide blockieren sich gegenseitig

**Lösung:**
```bash
1. Seite neu laden (F5)
2. Console leeren (console.clear())
3. NUR EINE Version klicken!
4. Alte Bookmarklets LÖSCHEN
```

---

## ✅ SO SOLLTE ES AUSSEHEN:

### Richtige Console-Logs:

```javascript
[CT]v5.1.3 HOTFIX | Interval:2776ms | KEIN LIMIT!
[CT]+4 T:4
[CT]+2 T:6
[CT]+3 T:9
[CT]+5 T:14
... etc ...
```

### Dashboard zeigt Tweets:

```
📦 Gespeicherte Tweets

📦 14 Tweets
🖼️ 8 Bilder
🎥 2 Videos
🎬 1 GIF
💾 245 KB
```

### Badge funktioniert:

```
♾️ 14  ← Grün, zählt hoch
👀      ← View-Button funktioniert
```

---

## 🛠️ DEBUG-BEFEHLE

### In Console (F12) eingeben:

**1. Check localStorage:**
```javascript
JSON.parse(localStorage.getItem('twitter_clean_cache') || '[]').length
// Zeigt: Anzahl gespeicherter Tweets
```

**2. Check Settings:**
```javascript
JSON.parse(localStorage.getItem('ct_settings'))
// Zeigt: Aktuelle Einstellungen
```

**3. Check Tweets:**
```javascript
document.querySelectorAll('article[data-testid="tweet"]').length
// Zeigt: Anzahl Tweets auf Seite
```

**4. Cache komplett löschen:**
```javascript
localStorage.clear();
location.reload();
// Löscht ALLES, Seite lädt neu
```

**5. Nur Tool-Daten löschen:**
```javascript
localStorage.removeItem('twitter_clean_cache');
localStorage.removeItem('twitter_links');
localStorage.removeItem('ct_settings');
location.reload();
```

---

## 📊 VERSION-CHECK

### Welche Version läuft?

**In Console schauen:**
```javascript
[CT]v5.1.3 HOTFIX  ← Aktuell! ✅
[CT]v5.1.2 UNLIMITED ← Ok, aber alt
[CT]v5.1.1 SAFE    ← Veraltet! Update!
[CT]v5.1.0         ← BUGS! Update!
```

**Badge-Check:**
```
♾️  ← v5.1.2 oder v5.1.3 ✅
🛡️  ← v5.1.0 oder v5.1.1 ❌
```

### Update auf v5.1.3:

```bash
1. https://cali72mero.github.io/twitter-clean-tracker
2. Strg+Shift+R (Hard Refresh!)
3. Siehst du "v5.1.3 - HOTFIX!"? ✅
4. Altes Bookmarklet LÖSCHEN
5. Neues "CleanTwitter v5.1.3" ziehen
6. Auf Twitter testen
```

---

## 🚀 BEST PRACTICES

### Optimale Nutzung:

```
1. LANGSAM scrollen
   → Bilder brauchen Zeit zum Laden

2. Warte bis Feed geladen ist
   → Keine Skeleton-Loader mehr

3. Badge checken
   → Zählt es hoch? ✅

4. Console öffnen (F12)
   → Siehst du [CT]+X T:Y? ✅

5. Dashboard regelmäßig checken
   → Tweets werden gespeichert? ✅

6. Bei ~2000 Tweets exportieren
   → Storage-Limit beachten!
```

### Empfohlene Settings:

```
✅ Stealth Mode: AN
✅ Scan-Intervall: 3s (Normal)
✅ Retweets skippen: AN
✅ Threads erkennen: AN
✅ Links extrahieren: AN
```

---

## 🆘 SUPPORT

### Problem melden:

**Was brauchen wir:**
```
1. Console-Logs (F12 Screenshot)
2. Dashboard Screenshot
3. Badge Screenshot
4. Browser & Version
5. Welche Tool-Version? (siehe Console)
6. Was hast du schon probiert?
```

**Wo melden:**
- GitHub Issues: [github.com/cali72mero/twitter-clean-tracker/issues](https://github.com/cali72mero/twitter-clean-tracker/issues)

**Vor dem Melden:**
```
1. Cache geleert? (Strg+Shift+Del)
2. Browser neu gestartet?
3. Neue Version geholt? (v5.1.3)
4. Alte Bookmarklets gelöscht?
5. localStorage.clear() probiert?
```

---

## 📚 WEITERE INFOS

### Warum Twitter-Errors ignorieren?

**Twitter's Code vs Unser Tool:**

```diff
TWITTER's Code (main.da71110a.js):
- Läuft automatisch beim Seitenaufruf
- Macht API-Calls an Twitter's Server
- Kann Errors werfen wenn Server down
- Hat NICHTS mit unserem Tool zu tun!

UNSER Tool (VM462:1):
+ Läuft nur wenn Bookmarklet geklickt
+ Macht KEINE API-Calls
+ Liest nur HTML im Browser
+ Funktioniert auch wenn Twitter Errors hat!
```

### localStorage Limits:

**Browser-abhängig:**
```
Chrome:   ~10 MB
Firefox:  ~10 MB
Safari:   ~5 MB
Edge:     ~10 MB

Typisch: ~5-7 MB sicher nutzbar
→ Ca. 2000-3000 Tweets
→ Bei >80%: Warnung
→ Exportieren empfohlen!
```

### Stealth Mode erklärt:

**Was macht es:**
```javascript
// OHNE Stealth:
Scan alle 3000ms (fix)
→ 3s, 3s, 3s, 3s...
→ Erkennbares Muster

// MIT Stealth:
Scan zufällig 2000-5000ms
→ 2.3s, 4.1s, 2.8s, 3.7s...
→ Wirkt menschlich!
```

**Warum?**
- Auch wenn kein Ban-Risiko:
- Wirkt natürlicher
- Best Practice
- Verhindert Browser-Überlastung
- Gibt Bildern Zeit zum Laden

---

## ❓ FAQ (Troubleshooting)

**Q: Dashboard leer aber Console zählt Tweets?**
A: localStorage-Key Mismatch. Update auf v5.1.3!

**Q: Tool pausiert ständig?**
A: Alte Version läuft noch. Tab schließen, localStorage.clear(), neu starten!

**Q: Mehrere [CT] Logs mit unterschiedlichen Versionen?**
A: Mehrere Versionen laufen gleichzeitig. Seite neu laden, nur EINE starten!

**Q: ERR_PROXY_CONNECTION_FAILED?**
A: Twitter's Problem, nicht unseres! Tool funktioniert trotzdem.

**Q: HTTP 503 Errors?**
A: Twitter's Server down. Warte 5-10 Minuten, neu laden.

**Q: Badge erscheint nicht?**
A: Seite neu laden (F5), Bookmarklet nochmal klicken.

**Q: Keine Bilder werden gespeichert?**
A: Zu schnell gescrollt! Langsam scrollen, Bilder müssen laden.

**Q: GitHub Pages zeigt alte Version?**
A: Browser-Cache! Strg+Shift+R, oder Strg+F5.

**Q: Storage voll?**
A: Exportiere als ZIP/HTML, Clear Cache, weiter scrollen!

---

**🧪 Bei weiteren Fragen: GitHub Issues!**

---

**Last Updated: v5.1.3 (2026-02-16)**