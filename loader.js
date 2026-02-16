// CleanTwitter v3.4 - External Loader Script
(function() {
    'use strict';
    
    console.log('[CleanTwitter] v3.4 Loading...');
    
    // Cleanup old instances
    var old = document.getElementById('ctw-panel');
    if(old) old.remove();
    
    var P, B;
    
    function createPanel() {
        var panel = document.createElement('div');
        panel.id = 'ctw-panel';
        panel.style.cssText = 'position:fixed!important;bottom:20px!important;right:20px!important;z-index:2147483647!important;display:flex!important;flex-direction:column!important;gap:8px!important;pointer-events:auto!important';
        
        var badge = document.createElement('div');
        badge.id = 'ctw-badge';
        badge.innerText = '🔴 0';
        badge.style.cssText = 'background:rgba(0,0,0,0.95)!important;color:#ff4444!important;padding:8px 12px!important;border-radius:8px!important;font:bold 12px monospace!important;border:2px solid #333!important;min-width:70px!important;text-align:center!important;box-shadow:0 2px 8px rgba(0,0,0,0.5)!important';
        
        var btn = document.createElement('button');
        btn.innerText = '👀 View Dashboard';
        btn.style.cssText = 'background:#00ff88!important;color:#000!important;border:none!important;padding:10px 16px!important;border-radius:20px!important;font:bold 13px system-ui!important;cursor:pointer!important;box-shadow:0 4px 12px rgba(0,255,136,0.5)!important';
        
        btn.onmouseover = function() { this.style.transform = 'scale(1.08)'; };
        btn.onmouseout = function() { this.style.transform = 'scale(1)'; };
        
        btn.onclick = function() {
            console.log('[CleanTwitter] Opening dashboard...');
            var cache = JSON.parse(localStorage.getItem('tw_clean_cache') || '[]');
            var win = window.open('https://cali72mero.github.io/twitter-clean-tracker/', 'tw_viewer');
            
            if(win) {
                badge.innerText = '⏳ Sync';
                var attempts = 0;
                var interval = setInterval(function() {
                    win.postMessage({type: 'import_tweets', data: cache}, '*');
                    attempts++;
                    if(attempts > 8) {
                        clearInterval(interval);
                        badge.innerText = '✅ Sent!';
                        setTimeout(function() {
                            badge.innerText = '🔴 ' + cache.length;
                        }, 2000);
                    }
                }, 800);
            } else {
                alert('❌ Popup blocked! Enable popups for Twitter.');
            }
        };
        
        panel.appendChild(badge);
        panel.appendChild(btn);
        P = panel;
        B = badge;
        return panel;
    }
    
    function ensureButton() {
        var existing = document.getElementById('ctw-panel');
        if(!existing || !document.body.contains(existing)) {
            console.log('[CleanTwitter] Injecting button...');
            document.body.appendChild(createPanel());
        }
    }
    
    // Heartbeat: Check every 2 seconds
    setInterval(ensureButton, 2000);
    
    // User-Agent Spoofing
    try {
        Object.defineProperty(navigator, 'userAgent', {
            get: function() {
                return 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1';
            }
        });
        console.log('[CleanTwitter] User-Agent spoofed');
    } catch(e) {
        console.warn('[CleanTwitter] UA spoofing failed:', e);
    }
    
    // Tweet Scanner
    var seenIds = new Set();
    
    function scan() {
        // Remove ads and skeletons
        var junk = document.querySelectorAll('[data-testid="skeleton"], [data-testid="PromotedTweet"], [aria-label*="Who to follow"]');
        junk.forEach(function(el) { el.remove(); });
        
        // Capture tweets
        var tweets = document.querySelectorAll('article[data-testid="tweet"]');
        var cache = JSON.parse(localStorage.getItem('tw_clean_cache') || '[]');
        var added = 0;
        
        tweets.forEach(function(t) {
            var txtEl = t.querySelector('[data-testid="tweetText"]');
            var userEl = t.querySelector('[data-testid="User-Name"]');
            var imgEl = t.querySelector('img[src*="media"]');
            
            if(userEl && (txtEl || imgEl)) {
                var text = txtEl ? txtEl.innerText : '';
                var user = userEl.innerText.split('\n')[0];
                var id = user + '|' + text.substring(0, 30);
                
                if(!seenIds.has(id)) {
                    seenIds.add(id);
                    if(!cache.some(function(c) { return c.text === text && c.user === user; })) {
                        cache.push({
                            user: user,
                            text: text,
                            img: imgEl ? imgEl.src : null,
                            date: Date.now()
                        });
                        added++;
                    }
                }
            }
        });
        
        if(added > 0) {
            // Keep last 200 tweets
            if(cache.length > 200) cache = cache.slice(-200);
            localStorage.setItem('tw_clean_cache', JSON.stringify(cache));
            
            if(B) {
                B.innerText = '🔴 ' + cache.length;
                B.style.borderColor = '#00ff88';
                setTimeout(function() {
                    B.style.borderColor = '#333';
                }, 500);
            }
            
            console.log('[CleanTwitter] Captured ' + added + ' new tweets');
        }
    }
    
    // Start scanning
    setInterval(scan, 1500);
    
    // Initial run
    ensureButton();
    scan();
    
    console.log('[CleanTwitter] v3.4 loaded successfully!');
    alert('🐦 CleanTwitter v3.4 gestartet!\n\nButton unten rechts aktiviert.\nÖffne Konsole (F12) für Debug-Infos.');
    
})();