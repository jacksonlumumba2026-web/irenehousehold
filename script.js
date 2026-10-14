   IRENE HOUSEHOLD COLLECTIONS — script.js
   ============================================= */

/* ── PRODUCTS ── */
var PRODUCTS = [];

/* ── WHATSAPP COMMUNITY POPUP — shows on every page ── */
(function() {
  var KEY = 'wa_popup_ts';
  var THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
  function shouldShow() {
    try {
      var last = localStorage.getItem(KEY);
      if (!last) return true;
      return (Date.now() - parseInt(last)) > THREE_DAYS;
    } catch(e) { return true; }
  }
  function markShown() {
    try { localStorage.setItem(KEY, Date.now()); } catch(e) {}
  }
  function injectPopup() {
    if (document.getElementById('wa-popup-overlay')) return;
    var el = document.createElement('div');
    el.className = 'wa-popup-overlay';
    el.id = 'wa-popup-overlay';
    el.innerHTML = '<div class="wa-popup"><button class="wa-popup-close" id="wa-popup-close-btn">✕</button><div class="wa-popup-icon">💬</div><h3>Join Our WhatsApp Community!</h3><p>Be the first to get exclusive deals, new arrivals and special discounts straight to your WhatsApp.</p><div class="wa-popup-perks"><div class="wa-popup-perk">🎁 Exclusive deals</div><div class="wa-popup-perk">🔥 Flash sales</div><div class="wa-popup-perk">✨ New arrivals</div></div><div class="wa-popup-btns"><a href="https://chat.whatsapp.com/KLvRlQ1YQR5IRYfzxB8rxA" target="_blank" class="wa-popup-join" id="wa-popup-join-btn">💬 Join Community Now</a><button class="wa-popup-later" id="wa-popup-later-btn">Maybe later</button></div><p style="font-size:10px;color:var(--muted);text-align:center;margin-top:8px;">Free to join • No spam • Leave anytime</p></div>';
    document.body.appendChild(el);
    function closePopup() { el.classList.remove('show'); markShown(); }
    document.getElementById('wa-popup-close-btn').addEventListener('click', closePopup);
    document.getElementById('wa-popup-later-btn').addEventListener('click', closePopup);
    document.getElementById('wa-popup-join-btn').addEventListener('click', closePopup);
    el.addEventListener('click', function(e){ if (e.target === el) closePopup(); });
  }
  function showPopup() {
    var ov = document.getElementById('wa-popup-overlay');
    if (ov) ov.classList.add('show');
  }
  if (shouldShow()) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { injectPopup(); setTimeout(showPopup, 15000); });
    } else {
      injectPopup();
      setTimeout(showPopup, 15000);
    }
  }
})();
