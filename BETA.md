# 🧪 BETA TESTING & TROUBLESHOOTING

> **Für v4.2 BETA Tester & Problem-Löser**

---

## 📍 AKTUELLE VERSION: v4.2 BETA

**Release:** 16.02.2026
**Status:** 🟡 BETA (stabil, aber mit bekannten Bugs)
**Nächste Version:** v5.0 STABLE (geplant +1 Woche)

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
```

---

## 🐛 BEKANNTE BUGS in v4.2:

### 1. localStorage-Key Bug 🔥 KRITISCH

**Problem:**
```javascript
// Tool speichert unter:
'tw_clean_cache' ❌

// Dashboard liest von:
'twitter_clean_cache' ✅

// → Dashboard zeigt keine Tweets!
```

**Workaround:**
```javascript
// In Console (F12) auf Twitter eingeben:
const cache = localStorage.getItem('tw_clean_cache');
localStorage.setItem('twitter_clean_cache', cache);

// Dashboard neu laden - Tweets sollten jetzt erscheinen!
```

**Permanenter Fix:**
```javascript
// Automatische Migration hinzufügen:
if(localStorage.getItem('tw_clean_cache')) {
  localStorage.setItem('twitter_clean_cache', 
    localStorage.getItem('tw_clean_cache'));
  localStorage.removeItem('tw_clean_cache');
}
```

**Fix kommt:** v4.3 BETA (in 2 Tagen!)

---

### 2. Kein Rate Limit Protection ⚠️ MITTEL

**Problem:**
- Festes Intervall: 1.5s
- Kein Stealth Mode
- Kein Pause-Button
- Wirkt nicht "menschlich"

**Workaround:**
- Langsam scrollen
- Regelmäßige Pausen machen
- Seite neu laden = Stop

**Fix kommt:** v5.0 STABLE
```javascript
// v5.0 wird haben:
- Stealth Mode (zufällige Delays 2-5s)
- Flexible Intervalle (1.5s - 10s)
- Pause/Resume Button (Badge anklicken)
```

---

### 3. Keine Smart Features ⚠️ NIEDRIG

**Fehlt in v4.2:**
- ❌ Thread-Erkennung
- ❌ Link-Extraktion
- ❌ Retweet-Filter
- ❌ Tägliche Stats

**Fix kommt:** v5.0 STABLE

---

### 4. Badge Design 🎨 KOSMETISCH

**Problem:**
```javascript
// v4.2:
🔴 24  // Rot, statisch

// Soll sein:
♾️ 24  // Grün, animiert
```

**Fix kommt:** v5.0 STABLE

---

## 🔧 HÄUFIGE PROBLEME & LÖSUNGEN

### Problem: Dashboard zeigt 0 Tweets

**Symptom:**
```
Console zeigt: [CT]+4 Total:8  ✅
Dashboard zeigt: 0 Tweets      ❌
```

**Ursache:** localStorage-Key Mismatch (Bug #1)

**Lösung:**
```javascript
// Option 1: Console-Fix (siehe oben)
const cache = localStorage.getItem('tw_clean_cache');
localStorage.setItem('twitter_clean_cache', cache);

// Option 2: Export/Import
1. Auf Twitter: View-Button klicken
2. Dashboard: Warte 3 Sekunden
3. Tweets sollten importiert werden

// Option 3: Auf v4.3 warten (2 Tage!)
```

---

### Problem: Bilder fehlen

**Symptom:**
```
- Badge zählt Tweets
- Aber Bilder sind leer
```

**Ursache:** Zu schnell gescrollt

**Lösung:**
```
1. LANGSAM scrollen!
2. Warte bis Bilder laden (nicht mehr verschwommen)
3. Tool scannt alle 1.5s
4. Gib Bildern Zeit zum Laden
```

---

### Problem: Badge erscheint nicht

**Symptom:**
- Bookmarklet geklickt
- Alert kommt
- Aber kein Badge unten rechts

**Lösung:**
```bash
1. F5 (Seite neu laden)
2. Bookmarklet nochmal klicken
3. Console checken (F12):
   - Siehst du [CT]v4.2? ✅
   - Errors? Sag Bescheid!
```

---

### Problem: Tool pausiert ständig

**WICHTIG:** v4.2 hat KEIN Auto-Pause!

Wenn du `[CT]PAUSED` siehst:
- Du hast eine ALTE Version!
- Lösche alle alten Bookmarklets
- Hole v4.2 neu von GitHub Pages

---

## 🛠️ DEBUG-BEFEHLE

### 1. Check welche Version läuft:

```javascript
// In Console (F12):
// Sollte zeigen:
[CT]v4.2 Unlimited  ✅

// NICHT:
[CT]v5.1.x  ❌ (alte Versionen!)
[CT]v4.0    ❌
```

### 2. Check localStorage:

```javascript
// v4.2 Key (aktuell):
localStorage.getItem('tw_clean_cache')

// v5.0 Key (soll sein):
localStorage.getItem('twitter_clean_cache')

// Beide checken:
console.log('v4.2:', JSON.parse(localStorage.getItem('tw_clean_cache')||'[]').length);
console.log('v5.0:', JSON.parse(localStorage.getItem('twitter_clean_cache')||'[]').length);
```

### 3. Migration manuell:

```javascript
// v4.2 → v5.0 Key migrieren:
const old = localStorage.getItem('tw_clean_cache');
if(old) {
  localStorage.setItem('twitter_clean_cache', old);
  localStorage.removeItem('tw_clean_cache');
  console.log('✅ Migriert!');
}
```

### 4. Cache-Größe:

```javascript
const cache = localStorage.getItem('twitter_clean_cache') || localStorage.getItem('tw_clean_cache');
const size = new Blob([cache||'']).size;
console.log('Cache:', Math.round(size/1024), 'KB');
```

### 5. Kompletter Reset:

```javascript
localStorage.removeItem('tw_clean_cache');
localStorage.removeItem('twitter_clean_cache');
localStorage.removeItem('ct_settings');
location.reload();
```

---

## 🔮 WAS KOMMT IN v5.0?

### Hauptziele:

**1. localStorage-Key Fix 🔥**
```javascript
// Automatische Migration:
if(localStorage.getItem('tw_clean_cache')) {
  const data = localStorage.getItem('tw_clean_cache');
  localStorage.setItem('twitter_clean_cache', data);
  localStorage.removeItem('tw_clean_cache');
}

// → Dashboard funktioniert sofort!
```

**2. Rate Limit Protection 🛡️**
```javascript
// Stealth Mode:
const delay = Math.random() * 3000 + 2000; // 2-5s

// Pause/Resume:
badge.onclick = () => {
  paused = !paused;
  badge.style.color = paused ? '#ff4' : '#0f8';
};

// Flexible Intervalle:
Settings: [1.5s, 3s, 5s, 10s]
```

**3. Smart Features 🧠**
```javascript
// Thread-Detection:
if(text.includes('🧵') || text.match(/\d+\/\d+/)) {
  item.isThread = true;
}

// Link-Extraction:
const urls = text.match(/https?:\/\/[^\s]+/g);
if(urls) links.push(...urls);

// Retweet-Filter:
if(text.startsWith('RT @')) return; // Skip
```

**4. Dashboard-Upgrades 📊**
```javascript
// Progressbar:
<div id="progress" style="width: ${percent}%"></div>

// Tägliche Stats:
const today = tweets.filter(t => isToday(t.date));

// Suche:
const results = tweets.filter(t => 
  t.text.includes(query) || t.user.includes(query)
);
```

---

## 📅 RELEASE-TIMELINE

```
📍 16.02.2026 (JETZT)
   ✅ v4.2 BETA Released
   - Unbegrenzter Cache
   - Download-Buttons
   - 🐛 Bekannte Bugs

📍 18.02.2026 (+2 Tage)
   🔄 v4.3 BETA
   - 🔥 localStorage-Key Fix
   - Dashboard funktioniert!
   
📍 23.02.2026 (+1 Woche)
   🎉 v5.0 STABLE Release!
   - Rate Limit Protection
   - Smart Features
   - Badge-Redesign
   - Alle Bugs gefixt!
   
📍 02.03.2026 (+2 Wochen)
   🚀 v5.1 Performance
   - Schnellere Scans
   - Besseres Caching
   - PWA-Support
```

---

## 📄 BUG-REPORT TEMPLATE

**Wenn du einen Bug findest:**

```markdown
## Bug Report

**Version:** v4.2 BETA
**Browser:** [Chrome/Firefox/Safari] [Version]
**OS:** [Windows/Mac/Linux/Android/iOS]

**Problem:**
[Beschreibung was nicht funktioniert]

**Console-Logs:** (F12)
```
[CT]...
[CT]...
```

**Screenshots:**
[Badge, Dashboard, Console]

**Schon probiert:**
- [ ] Cache geleert
- [ ] Browser neu gestartet
- [ ] localStorage-Fix (siehe oben)
- [ ] Bookmarklet neu gezogen

**Andere Infos:**
[Was noch wichtig sein könnte]
```

**Wo melden:**
- GitHub Issues: https://github.com/cali72mero/twitter-clean-tracker/issues

---

## 🤝 BETA-TESTER GESUCHT!

**Für v5.0 brauchen wir dich:**

**Was du machen kannst:**
1. v4.2 BETA testen
2. Bugs melden (Issues)
3. Feature-Wünsche äußern
4. Code contributen (PRs)
5. Dokumentation verbessern

**Was du bekommst:**
- Früher Zugriff auf v5.0
- Dein Name im Changelog
- Unsere Dankbarkeit! ❤️

**Kontakt:**
- GitHub: @cali72mero
- Issues: [Link](https://github.com/cali72mero/twitter-clean-tracker/issues)

---

## 📚 FAQ (BETA)

**Q: Ist v4.2 BETA sicher zu nutzen?**
A: **JA!** Bugs betreffen nur Komfort, nicht Sicherheit. Daten werden nur lokal gespeichert.

**Q: Sollte ich auf v4.3 warten?**
A: Wenn Dashboard-Bug dich stört: JA. Sonst: v4.2 ist ok!

**Q: Kann ich v4.2 und v5.0 parallel nutzen?**
A: **NEIN!** Nur eine Version zur gleichen Zeit. Alte Bookmarklets löschen!

**Q: Gehen meine Daten bei Update verloren?**
A: **NEIN!** localStorage bleibt erhalten. Aber: Vorher exportieren empfohlen!

**Q: Wie update ich von v4.2 auf v5.0?**
A:
```bash
1. Exportiere Daten (ZIP/HTML)
2. Lösche altes Bookmarklet
3. Hole v5.0 von GitHub Pages
4. Ziehe neues Bookmarklet in Leiste
5. Fertig!
```

**Q: Kann ich mehrere Browser nutzen?**
A: JA, aber localStorage ist pro Browser. Daten werden nicht synchronisiert.

---

## ✅ BEST PRACTICES (BETA)

### Während v4.2 BETA:

```
1. 💾 Regelmäßig exportieren!
   → Alle 500-1000 Tweets als ZIP
   
2. 🐌 Langsam scrollen
   → Bilder müssen laden
   
3. 📊 Storage im Auge behalten
   → Bei >5MB exportieren
   
4. 🐛 Bugs melden
   → Hilf uns v5.0 besser zu machen!
   
5. ⏸️ Pausen machen
   → Seite neu laden = Stop
```

### Vorbereitung für v5.0:

```
1. 📥 Export machen (Backup!)
2. 🗑️ Cache leeren
3. 🔄 Alte Bookmarklets löschen
4. ⭐ Repo watchen für Release
5. 📢 Feedback geben!
```

---

## 🔗 WICHTIGE LINKS

- **README:** [README.md](README.md)
- **Live Demo:** [GitHub Pages](https://cali72mero.github.io/twitter-clean-tracker/)
- **Issues:** [Bug Reports](https://github.com/cali72mero/twitter-clean-tracker/issues)
- **Releases:** [Alle Versionen](https://github.com/cali72mero/twitter-clean-tracker/releases)

---

**🧪 Happy Beta Testing! 🚀**

**Bugs gefunden? Melde sie! Zusammen machen wir v5.0 perfekt! ❤️**

---

**Last Updated:** v4.2 BETA (16.02.2026)