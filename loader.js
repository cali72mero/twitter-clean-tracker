// ============================================================
// CleanTwitter v4.2.2 - External Loader Script
// Update: 19.02.2026
// ============================================================
// WICHTIGE ÄNDERUNGEN GEGENÜBER v3.4:
//   - ♾️  Kein 200 Tweet Limit mehr (war kritischer Bug!)
//   - 🖼️  Multi-Image Support (imgs[] statt nur einem Bild)
//   - 💾  Download-Buttons direkt auf Tweets (Bilder/Videos/GIFs)
//   - 🗑️  User-Agent Spoofing entfernt (verursachte Probleme)
//   - ✅  Stabilerer, saubererer Code
// ============================================================

(function() {
    'use strict';

    console.log('[CT] v4.2.2 Loading...');

    var SHOW_DL = true; // Download-Buttons anzeigen
    var P, B;
    var seen = new Set();

    // -------------------------------------------------------
    // PANEL ERSTELLEN
    // -------------------------------------------------------
    function createPanel() {
        var old = document.getElementById('ct-p');
        if(old) old.remove();

        var p = document.createElement('div');
        p.id = 'ct-p';
        p.style.cssText = 'position:fixed!important;bottom:20px!important;right:20px!important;z-index:2147483647!important;display:flex!important;flex-direction:column!important;gap:8px!important';

        var b = document.createElement('div');
        b.id = 'ct-b';
        b.innerText = '🔴 0';
        b.style.cssText = 'all:initial!important;background:rgba(0,0,0,0.95)!important;color:#f44!important;padding:8px 12px!important;border-radius:8px!important;font:bold 11px monospace!important;border:2px solid #333!important;text-align:center!important;display:block!important;min-width:70px!important';

        var s = document.createElement('button');
        s.innerText = '👀 View';
        s.style.cssText = 'all:initial!important;background:#0f8!important;color:#000!important;border:none!important;padding:10px 14px!important;border-radius:20px!important;font:bold 12px system-ui!important;cursor:pointer!important;display:block!important';

        s.onclick = function() {
            var c = JSON.parse(localStorage.getItem('tw_clean_cache') || '[]');
            console.log('[CT] Opening Dashboard with', c.length, 'tweets');
            var w = window.open('https://cali72mero.github.io/twitter-clean-tracker/', 'tw_v');
            if(w) {
                b.innerText = '⏳ Sync';
                var i = 0;
                var t = setInterval(function() {
                    w.postMessage({ type: 'import_tweets', data: c }, '*');
                    if(++i > 8) {
                        clearInterval(t);
                        b.innerText = '✅ Sent!';
                        setTimeout(function() { updateBadge(); }, 2000);
                    }
                }, 800);
            } else {
                alert('❌ Popup blockiert! Erlaube Popups für Twitter.');
            }
        };

        p.appendChild(b);
        p.appendChild(s);
        P = p;
        B = b;
        return p;
    }

    function updateBadge() {
        var c = JSON.parse(localStorage.getItem('tw_clean_cache') || '[]');
        if(B) B.innerText = '🔴 ' + c.length;
    }

    // -------------------------------------------------------
    // DOWNLOAD-BUTTONS DIREKT AUF TWEETS
    // -------------------------------------------------------
    function downloadMedia(url, name) {
        fetch(url)
            .then(function(r) { return r.blob(); })
            .then(function(blob) {
                var a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = name;
                a.click();
                console.log('[CT] Downloaded:', name);
            })
            .catch(function(e) {
                console.error('[CT] Download Error:', e);
                alert('❌ Download fehlgeschlagen');
            });
    }

    function addDownloadButtons() {
        if(!SHOW_DL) return;
        document.querySelectorAll('article[data-testid="tweet"]').forEach(function(t) {
            if(t.dataset.ctDl) return;
            t.dataset.ctDl = '1';

            var imgs = t.querySelectorAll('img[src*="media"]');
            var vid  = t.querySelector('video[src]');
            var gif  = t.querySelector('video[src*="tweet_video"]');

            var btn = document.createElement('button');
            btn.style.cssText = 'all:initial!important;background:#44f!important;color:#fff!important;border:none!important;padding:6px 10px!important;border-radius:8px!important;font:bold 11px system-ui!important;cursor:pointer!important;position:absolute!important;top:8px!important;left:8px!important;z-index:9999!important;display:block!important;box-shadow:0 2px 8px rgba(0,0,0,0.5)!important';

            if(vid && !gif) {
                btn.innerText = '💾 DL';
                btn.onclick = function(e) {
                    e.stopPropagation(); e.preventDefault();
                    downloadMedia(vid.src, 'video_' + Date.now() + '.mp4');
                };
                t.style.position = 'relative';
                t.appendChild(btn);
            } else if(gif) {
                btn.innerText = '💾 GIF';
                btn.onclick = function(e) {
                    e.stopPropagation(); e.preventDefault();
                    downloadMedia(gif.src, 'gif_' + Date.now() + '.mp4');
                };
                t.style.position = 'relative';
                t.appendChild(btn);
            } else if(imgs.length > 0) {
                btn.innerText = '💾 DL (' + imgs.length + ')';
                btn.onclick = function(e) {
                    e.stopPropagation(); e.preventDefault();
                    imgs.forEach(function(img, idx) {
                        var src = img.src;
                        var ext = (src.match(/\.(jpg|jpeg|png|webp)/i) || ['', 'jpg'])[1];
                        downloadMedia(src, 'image_' + Date.now() + '_' + idx + '.' + ext);
                    });
                };
                t.style.position = 'relative';
                t.appendChild(btn);
            }
        });
    }

    // -------------------------------------------------------
    // TWEET SCANNER
    // -------------------------------------------------------
    function scan() {
        // Werbung & Skeleton entfernen
        document.querySelectorAll('[data-testid="skeleton"], [data-testid="PromotedTweet"]').forEach(function(e) { e.remove(); });

        var tweets = document.querySelectorAll('article[data-testid="tweet"]');
        var cache  = JSON.parse(localStorage.getItem('tw_clean_cache') || '[]');
        var added  = 0;

        tweets.forEach(function(t) {
            var txtEl  = t.querySelector('[data-testid="tweetText"]');
            var userEl = t.querySelector('[data-testid="User-Name"]');
            var imgs   = t.querySelectorAll('img[src*="media"]');
            var vid    = t.querySelector('video[src]');
            var gif    = t.querySelector('video[src*="tweet_video"]');

            if(userEl && (txtEl || imgs.length > 0 || vid || gif)) {
                var text = txtEl ? txtEl.innerText : '';
                var user = userEl.innerText.split('\n')[0];
                var id   = user + '|' + text.substring(0, 30);

                if(!seen.has(id)) {
                    seen.add(id);
                    if(!cache.some(function(x) { return x.text === text && x.user === user; })) {
                        var item = { user: user, text: text, date: Date.now() };

                        // Multi-Media Support
                        if(vid && !gif)       item.video = vid.src;
                        else if(gif)          item.gif   = gif.src;
                        else if(imgs.length > 0) item.imgs = Array.from(imgs).map(function(i) { return i.src; });

                        cache.push(item);
                        added++;
                    }
                }
            }
        });

        if(added > 0) {
            // ♾️ KEIN LIMIT! (v3.4 hatte festes 200er Limit - wurde entfernt!)
            localStorage.setItem('tw_clean_cache', JSON.stringify(cache));
            updateBadge();
            if(B) {
                B.style.borderColor = '#0f8';
                setTimeout(function() { B.style.borderColor = '#333'; }, 500);
            }
            console.log('[CT] +' + added + ' Total: ' + cache.length);
        }
    }

    // -------------------------------------------------------
    // HEARTBEAT - Panel sicherstellen
    // -------------------------------------------------------
    function ensurePanel() {
        var existing = document.getElementById('ct-p');
        if(!existing || !document.body.contains(existing)) {
            console.log('[CT] Re-injecting panel...');
            document.body.appendChild(createPanel());
        }
    }

    // -------------------------------------------------------
    // START
    // -------------------------------------------------------
    setInterval(ensurePanel,         2000);
    setInterval(addDownloadButtons,  2000);
    setInterval(scan,                1500);

    ensurePanel();
    scan();
    addDownloadButtons();

    console.log('[CT] v4.2.2 loaded successfully!');
    alert('🐦 CleanTwitter v4.2.2 gestartet!\n\n♾️ Cache: UNBEGRENZT\n🖼️ Multi-Image: AN\n💾 Download-Buttons: AN');

})();
