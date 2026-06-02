
/*/* ═══════════════════════════════════════
   FEATURE 5 — FREE DELIVERY PROGRESS BAR
═══════════════════════════════════════ */
var FREE_DELIVERY_THRESHOLD = 5000;

function updateDeliveryBar() {
  var bar     = document.getElementById('delivery-bar');
  var msg     = document.getElementById('delivery-msg');
  var barWrap = document.getElementById('delivery-bar-wrap');
  if (!bar || !msg) return;

  var total = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var pct   = Math.min((total / FREE_DELIVERY_THRESHOLD) * 100, 100);
  var remaining = FREE_DELIVERY_THRESHOLD - total;

  bar.style.width = pct + '%';

  if (total >= FREE_DELIVERY_THRESHOLD) {
    bar.style.background = '#22c55e';
    msg.innerHTML = '<span style="color:#22c55e;font-weight:700;">🎉 You qualify for FREE delivery!</span>';
  } else {
    bar.style.background = 'var(--gold)';
    msg.innerHTML = 'Add <strong style="color:var(--green);">KSh ' + remaining.toLocaleString() + '</strong> more for <strong style="color:var(--green);">FREE delivery</strong> 🚚';
  }
}


/* ═══════════════════════════════════════
   FEATURE 4 — FLASH SALE COUNTDOWN TIMER
═══════════════════════════════════════ */
function startFlashSaleTimer() {
  var timerEl = document.getElementById('flash-timer');
  if (!timerEl) return;

  // Sale ends at midnight tonight
  function getEndTime() {
    var end = new Date();
    end.setHours(23, 59, 59, 0);
    return end;
  }

  function updateTimer() {
    var now  = new Date();
    var end  = getEndTime();
    var diff = end - now;

    if (diff <= 0) {
      timerEl.innerHTML = '<span>Sale Ended</span>';
      return;
    }

    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    var pad = function(n) { return n < 10 ? '0' + n : n; };

    timerEl.innerHTML =
      '<div class="timer-block"><span class="timer-num">' + pad(h) + '</span><span class="timer-label">HRS</span></div>' +
      '<span class="timer-sep">:</span>' +
      '<div class="timer-block"><span class="timer-num">' + pad(m) + '</span><span class="timer-label">MIN</span></div>' +
      '<span class="timer-sep">:</span>' +
      '<div class="timer-block"><span class="timer-num">' + pad(s) + '</span><span class="timer-label">SEC</span></div>';
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}


/* ═══════════════════════════════════════
   FEATURE 3 — RECENTLY VIEWED PRODUCTS
═══════════════════════════════════════ */
var recentlyViewed = [];

function trackView(id) {
  recentlyViewed = recentlyViewed.filter(function(i) { return i !== id; });
  recentlyViewed.unshift(id);
  if (recentlyViewed.length > 4) recentlyViewed = recentlyViewed.slice(0, 4);
  renderRecentlyViewed();
}

function renderRecentlyViewed() {
  var container = document.getElementById('recently-viewed-grid');
  if (!container) return;

  var items = recentlyViewed
    .map(function(id) { return PRODUCTS.find(function(p) { return p.id === id; }); })
    .filter(Boolean);

  if (!items.length) {
    var section = document.getElementById('recently-viewed-section');
    if (section) section.style.display = 'none';
    return;
  }

  var section = document.getElementById('recently-viewed-section');
  if (section) section.style.display = 'block';
  container.innerHTML = items.map(buildCard).join('');
  setTimeout(initZoom, 100);
}


/* ═══════════════════════════════════════
   FEATURE 2 — PRODUCT IMAGE ZOOM
═══════════════════════════════════════ */
function initZoom() {
  document.querySelectorAll('.card-img img').forEach(function(img) {
    if (img.dataset.zoomInit) return;
    img.dataset.zoomInit = '1';

    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.12)';
      this.style.transition = 'transform .4s ease';
    });
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });

    // Mobile: tap to open full zoom
    img.addEventListener('click', function(e) {
      if (window.innerWidth > 768) return;
      openZoomModal(this.src, this.alt);
    });
  });
}

function openZoomModal(src, alt) {
  var existing = document.getElementById('zoom-modal');
  if (existing) existing.remove();

  var modal = document.createElement('div');
  modal.id = 'zoom-modal';
  modal.innerHTML =
    '<div style="position:fixed;inset:0;z-index:5000;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:16px;" onclick="this.parentElement.remove()">' +
    '<img src="' + src + '" alt="' + alt + '" style="max-width:95vw;max-height:90vh;object-fit:contain;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,.5);"/>' +
    '<button style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,.2);border:none;color:#fff;width:36px;height:36px;border-radius:50%;font-size:18px;cursor:pointer;" onclick="document.getElementById(\"zoom-modal\").remove()">✕</button>' +
    '<p style="position:absolute;bottom:20px;color:rgba(255,255,255,.5);font-size:12px;">Tap anywhere to close</p>' +
    '</div>';
  document.body.appendChild(modal);
}

/* ═══════════════════════════════════════
   IRENE HOUSEHOLD COLLECTIONS — script.js
   ═══════════════════════════════════════
   
   ➕ HOW TO ADD NEW PRODUCTS:
   
   1. Upload photo to GitHub (e.g. carpet.10.jpg)
   
   2. Find the PRODUCTS array below
   
   3. Add a new line at the END (before the ];)
      Copy this template and fill it in:
   
   { id:96, cat:'duvets', name:'Egyptian Duvet Cover', note:'Size 6x7 and 6x6 — 1 duvet cover, 1 bedsheet and 2 pillowcases', price:4000, old:0, img:'duvet.22.jpg', imgs:['duvet.22.jpg','duvet.22b.jpg','duvet.22c.jpg','duvet.22d.jpg'], badge:'HOT', badgeType:'hot' },
   
   CATEGORIES: nets | duvets | kitchenware |
               carpets | seatcovers | bath |
               furniture | kids
   
   BADGES: HOT/hot | SALE/sale | NEW/new |
           HOTEL/hotel | leave blank for none
   
   ID: Always use next number (last is 95)
   OLD PRICE: Set old:0 for no strikethrough
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   IRENE HOUSEHOLD COLLECTIONS
   Main JavaScript File
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   PRODUCTS DATABASE
═══════════════════════════════════════ */
/* ═══════════════════════════════════════
   PRODUCTS — Loaded from products.json
   To add/edit/delete products use:
   irenehousehold.co.ke/admin.html
═══════════════════════════════════════ */
var PRODUCTS = [];
var PRODUCTS_LOADED = false;

function loadProducts(callback) {
  if (PRODUCTS_LOADED) { if (callback) callback(); return; }
  fetch('products.json?v=' + Date.now())
    .then(function(r) { return r.json(); })
    .then(function(data) {
      PRODUCTS = data;
      PRODUCTS_LOADED = true;
      if (callback) callback();
      // Fire event so page-specific scripts can react
      document.dispatchEvent(new CustomEvent('productsLoaded'));
    })
    .catch(function(err) {
      console.error('Failed to load products:', err);
      // Try fallback - fire event with empty products so page doesnt hang
      PRODUCTS_LOADED = true;
      if (callback) callback();
      document.dispatchEvent(new CustomEvent('productsLoaded'));
    });
}



/* ═══════════════════════════════════════
   FEATURE 1 — WHATSAPP SHARE
═══════════════════════════════════════ */
function shareOnWhatsApp(name, price, img) {
  var p = price > 0 ? 'KSh ' + price.toLocaleString() : 'Call for Price';
  var msg = 'Hi! Check out ' + name + ' (' + p + ') from Irene Household Collections. Shop at irenehousehold.co.ke or order on WhatsApp: wa.me/254716060029';
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
}

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let cart      = [];
let wishlist  = [];
let payStatus = '';
let qvProduct = null;

/* ═══════════════════════════════════════
   LOADER
═══════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hide');
  }, 1100);
});

/* ═══════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════ */
window.addEventListener('scroll', () => {
  // Sticky nav
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);

  // Active nav link
  const sections = ['home','categories','shop','payment','hotel','about','contact'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 110) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });

  // Progress ring
  const ring = document.getElementById('progress-ring');
  if (ring) {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const circle = document.getElementById('ring-circle');
    if (circle) circle.style.strokeDashoffset = 113.1 - pct * 113.1;
    ring.classList.toggle('show', window.scrollY > 300);
  }
});

function toggleMobileNav() {
  const mn = document.getElementById('mobile-nav');
  if (mn) mn.classList.toggle('open');
}
function closeMobileNav() {
  const mn = document.getElementById('mobile-nav');
  if (mn) mn.classList.remove('open');
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════
   CART
═══════════════════════════════════════ */
function addToCart(btn, id, name, cat, price, img) {
  if (price === 0) { showToast('Please call us for this item price'); return; }
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, cat, price, img, qty: 1 });
  }
  updateCartUI();
  showToast('✓ ' + name + ' added to cart!');
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Added!';
    btn.classList.add('added');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('added'); }, 1800);
  }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) cart = cart.filter(i => i.id !== id);
  updateCartUI();
  renderCartItems();
}

function clearCart() {
  cart = [];
  payStatus = '';
  document.querySelectorAll('.pay-option').forEach(o => o.className = 'pay-option');
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Badges
  ['cart-badge', 'cart-badge-bottom'].forEach(id => {
    const b = document.getElementById(id);
    if (!b) return;
    b.textContent = count;
    b.classList.toggle('show', count > 0);
  });

  // Count and total text
  const cc = document.getElementById('cart-count');
  if (cc) cc.textContent = count + ' item' + (count !== 1 ? 's' : '');
  const ct = document.getElementById('cart-total');
  if (ct) ct.textContent = 'KSh ' + total.toLocaleString();
}

function renderCartItems() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  if (!cart.length) {
    container.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <small style="color:#9ca3af;font-size:11px;margin-top:6px;display:block;">Browse our products and add items!</small>
      </div>`;
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.cat}</div>
        <div class="cart-item-price">KSh ${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
    </div>`).join('');
}

function openCart() {
  renderCartItems();
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function selectPayStatus(type) {
  payStatus = type;
  document.getElementById('opt-paid').className  = 'pay-option' + (type === 'paid'  ? ' selected-paid'  : '');
  document.getElementById('opt-nopay').className = 'pay-option' + (type === 'nopay' ? ' selected-nopay' : '');
  showToast(type === 'paid' ? '✅ Marked as Already Paid' : '💵 Marked as Pay on Delivery');
}

function checkout() {
  if (!cart.length)    { showToast('⚠️ Your cart is empty!'); return; }
  if (!payStatus)      { showToast('⚠️ Please select payment status!'); return; }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let msg = '';

  if (payStatus === 'paid') {
    msg  = 'Hello Irene Household! 👋\n\n';
    msg += '✅ I HAVE ALREADY PAID via M-Pesa\n';
    msg += 'Paybill: 522533 | Account: 5997131\n\n';
    msg += '🛒 My Order:\n';
    cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} x${item.qty} - KSh ${(item.price * item.qty).toLocaleString()}\n`;
    });
    msg += `\nTOTAL PAID: KSh ${total.toLocaleString()}\n\nPlease confirm receipt and arrange delivery. Thank you! 🙏`;
  } else {
    msg  = 'Hello Irene Household! 👋\n\n';
    msg += '📦 ORDER - Pay on Delivery\n\n';
    msg += '🛒 My Order:\n';
    cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} x${item.qty} - KSh ${(item.price * item.qty).toLocaleString()}\n`;
    });
    msg += `\nTOTAL: KSh ${total.toLocaleString()}\n\nKindly confirm availability and delivery. Thank you! 🙏`;
  }

  window.open('https://wa.me/254716060029?text=' + encodeURIComponent(msg), '_blank');
}

/* ═══════════════════════════════════════
   WISHLIST
═══════════════════════════════════════ */
function toggleWishlist(btn, id, name, cat, price, img) {
  const idx = wishlist.findIndex(i => i.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.innerHTML = '♡'; btn.classList.remove('active'); }
    showToast('Removed from wishlist');
  } else {
    wishlist.push({ id, name, cat, price, img });
    if (btn) { btn.innerHTML = '❤️'; btn.classList.add('active'); }
    showToast('❤️ Saved to wishlist!');
  }
  updateWishlistUI();
  renderWishlistItems();
}

function updateWishlistUI() {
  const count = wishlist.length;
  ['wl-badge', 'wl-badge-bottom'].forEach(id => {
    const b = document.getElementById(id);
    if (!b) return;
    b.textContent = count;
    b.classList.toggle('show', count > 0);
  });
  const wc = document.getElementById('wl-count');
  if (wc) wc.textContent = count + ' item' + (count !== 1 ? 's' : '');
}

function renderWishlistItems() {
  const container = document.getElementById('wl-items');
  if (!container) return;

  if (!wishlist.length) {
    container.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty-icon">♡</div>
        <p>Your wishlist is empty</p>
        <small style="color:#9ca3af;font-size:11px;margin-top:6px;display:block;">Tap ♡ on any product to save it</small>
      </div>`;
    return;
  }

  container.innerHTML = wishlist.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.cat}</div>
        <div class="cart-item-price">KSh ${item.price > 0 ? item.price.toLocaleString() : 'Call for Price'}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        <button class="btn-green" style="padding:6px 12px;font-size:10px;" onclick="moveToCart(${item.id})">🛒 Add</button>
        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">🗑</button>
      </div>
    </div>`).join('');
}

function moveToCart(id) {
  const item = wishlist.find(i => i.id === id);
  if (item) addToCart(null, item.id, item.name, item.cat, item.price, item.img);
}

function removeFromWishlist(id) {
  wishlist = wishlist.filter(i => i.id !== id);
  updateWishlistUI();
  renderWishlistItems();

  // Reset heart button on product card
  const btn = document.querySelector(`.wishlist-btn[data-id="${id}"]`);
  if (btn) { btn.innerHTML = '♡'; btn.classList.remove('active'); }
}

function openWishlist() {
  renderWishlistItems();
  document.getElementById('wl-drawer').classList.add('open');
  document.getElementById('wl-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlist() {
  document.getElementById('wl-drawer').classList.remove('open');
  document.getElementById('wl-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════════
   QUICK VIEW
═══════════════════════════════════════ */
function openQuickView(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  qvProduct = p;
  trackView(id);

  document.getElementById('qv-img').src        = p.img;
  document.getElementById('qv-img').alt        = p.name;
  document.getElementById('qv-cat').textContent = p.cat;
  document.getElementById('qv-name').textContent= p.name;
  document.getElementById('qv-note').textContent= p.note;
  document.getElementById('qv-price').textContent = p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Call for Price';
  document.getElementById('qv-old').textContent   = p.old ? 'KSh ' + p.old.toLocaleString() : '';

  const wlBtn = document.getElementById('qv-wl-btn');
  const inWL  = wishlist.some(i => i.id === p.id);
  wlBtn.innerHTML = inWL ? '❤️' : '♡';
  wlBtn.classList.toggle('active', inWL);

  document.getElementById('qv-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('qv-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function qvAddToCart() {
  if (!qvProduct) return;
  addToCart(null, qvProduct.id, qvProduct.name, qvProduct.cat, qvProduct.price, qvProduct.img);
  closeQuickView();
  openCart();
}

function qvToggleWishlist() {
  if (!qvProduct) return;
  toggleWishlist(
    document.getElementById('qv-wl-btn'),
    qvProduct.id, qvProduct.name, qvProduct.cat, qvProduct.price, qvProduct.img
  );
}

/* ═══════════════════════════════════════
   PRODUCT CARD BUILDER
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   NAVIGATE TO PRODUCT PAGE
═══════════════════════════════════════ */
/* ═══════════════════════════════════════
   CATEGORY LABELS
═══════════════════════════════════════ */
var CAT_LABELS = {
  all:'All Products',
  nets:'Mosquito Nets',
  duvets:'Duvets & Covers',
  kitchenware:'Kitchenware',
  carpets:'Carpets & Mats',
  seatcovers:'Seat Covers',
  bath:'Bath & Towels',
  furniture:'Furniture',
  kids:'Kids Corner',
  electronics:'Electronics',
  cookware:'Cookware',
  travel:'Travel & Luggage',
  decor:'Home Decor'
};

function goToProduct(id) {
  window.location = 'product.html?id=' + id;
}

function buildCard(p) {
  var badge = p.badge ? '<span class="badge-tag badge-' + p.badgeType + '">' + p.badge + '</span>' : '';
  var oldPrice = p.old ? '<span style="font-size:11px;color:#bbb;text-decoration:line-through;">KSh ' + p.old.toLocaleString() + '</span>' : '';
  var price = p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Call for Price';
  var inWL = wishlist.some(function(i) { return i.id === p.id; });
  var n = p.name.replace(/'/g, '').replace(/"/g, '');
  var waMsg = encodeURIComponent('Hi Irene! I am interested in: ' + p.name + ' - ' + price + '. Website: irenehousehold.co.ke');
  
  // Build thumbnail strip - max 4 images
  var thumbs = '';
  var imgs = p.imgs || [p.img];
  var mainImgId = 'img-' + p.id;
  
  if (imgs.length > 1) {
    thumbs = '<div style="display:flex;gap:4px;padding:6px 8px;background:#f9f9f9;border-top:1px solid #eee;">';
    for (var t = 0; t < Math.min(imgs.length, 4); t++) {
      var tImg = imgs[t];
      thumbs += '<img src="' + tImg + '" ' +
        'onclick="document.getElementById(\'' + mainImgId + '\').src=\'' + tImg + '\';" ' +
        'style="width:42px;height:42px;object-fit:cover;border-radius:4px;cursor:pointer;border:2px solid ' + (t===0 ? '#1a3d2b' : '#eee') + ';" ' +
        'onerror="this.style.display=\'none\'"/>';
    }
    thumbs += '</div>';
  }

  return '<div class="product-card" style="cursor:pointer;" onclick="goToProduct(' + p.id + ')">' +
    '<div class="card-img">' +
      '<img id="' + mainImgId + '" src="' + p.img + '" alt="' + n + '" loading="lazy"/>' +
      badge +
      '<button class="card-qv" onclick="openQuickView(' + p.id + ')">&#128065; Quick View</button>' +
      '<button class="card-wish' + (inWL ? ' active' : '') + '" onclick="toggleWishlist(this,' + p.id + ',\'' + n + '\',\'' + p.cat + '\',' + p.price + ',\'' + p.img + '\')">&#9825;</button>' +
    '</div>' +
    thumbs +
    '<div class="card-body">' +
      '<div class="card-location">Kenya\'s Favourite Store</div>' +
      '<div class="card-cat">' + (CAT_LABELS[p.cat] || p.cat) + '</div>' +
      '<div class="card-name">' + p.name + '</div>' +
      '<div class="card-note">' + p.note + '</div>' +
      '<div class="card-price-row"><span class="card-price">' + price + '</span>' + oldPrice + '</div>' +
      '<div style="display:flex;gap:6px;margin-top:8px;">' +
        '<button class="card-atc" style="flex:1;" onclick="addToCart(this,' + p.id + ',\'' + n + '\',\'' + p.cat + '\',' + p.price + ',\'' + p.img + '\')">&#128722; Add to Cart</button>' +
        '<a href="https://wa.me/254716060029?text=' + waMsg + '" target="_blank" class="wa-share-btn" title="Order on WhatsApp">&#128172;</a>' +
      '</div>' +
    '</div>' +
  '</div>';
}

// Switch product image when colour thumb is clicked
function switchImg(thumb, imgSrc, productId) {
  var mainImg = document.getElementById('img-' + productId);
  if (mainImg) mainImg.src = imgSrc;
  // Update border on thumbs
  var parent = thumb.parentElement;
  parent.querySelectorAll('div').forEach(function(t) {
    t.style.border = '2px solid #e0e0e0';
  });
  thumb.style.border = '2px solid var(--green)';
}

/* ═══════════════════════════════════════
   RENDER PRODUCTS
═══════════════════════════════════════ */
function renderProducts(containerId, filter, limit) {
  filter = filter || 'all';
  const container = document.getElementById(containerId);
  if (!container) return;

  let products = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(function(p) { return p.cat === filter; });

  if (limit) products = products.slice(0, limit);

  container.innerHTML = products.length
    ? products.map(buildCard).join('')
    : '<p style="text-align:center;color:#6b7280;padding:40px;">No products found.</p>';

  // Init zoom on new cards
  setTimeout(initZoom, 100);

  // Update any count displays
  var countEl = document.getElementById('product-count');
  if (countEl && !limit) {
    countEl.textContent = products.length + ' products';
  }
}

/* ═══════════════════════════════════════
   SEARCH
═══════════════════════════════════════ */
function doSearch(inputId, containerId) {
  const q = document.getElementById(inputId).value.toLowerCase().trim();
  const container = document.getElementById(containerId);
  if (!container) return;

  const results = q
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q)  ||
        p.note.toLowerCase().includes(q))
    : PRODUCTS;

  container.innerHTML = results.length
    ? results.map(buildCard).join('')
    : `<div style="text-align:center;padding:60px;color:#6b7280;">
        <p style="font-size:2rem;margin-bottom:10px;">🔍</p>
        <p>No products found for "<strong>${q}</strong>"</p>
       </div>`;

  // Update count
  const count = document.getElementById('product-count');
  if (count) count.textContent = results.length + ' products found';
}

/* ═══════════════════════════════════════
   FILTER BY CATEGORY (shop page)
═══════════════════════════════════════ */
function filterByCategory(cat, btn) {
  // Update active tab
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Render
  renderProducts('products-grid', cat);

  // Update count
  const count = document.getElementById('product-count');
  const num = cat === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === cat).length;
  if (count) count.textContent = num + ' products';
}

/* ═══════════════════════════════════════
   SORT PRODUCTS
═══════════════════════════════════════ */
function sortProducts(value) {
  const container = document.getElementById('products-grid');
  if (!container) return;

  let sorted = [...PRODUCTS];
  if (value === 'price-asc')  sorted.sort((a, b) => a.price - b.price);
  if (value === 'price-desc') sorted.sort((a, b) => b.price - a.price);
  if (value === 'name-asc')   sorted.sort((a, b) => a.name.localeCompare(b.name));

  container.innerHTML = sorted.map(buildCard).join('');
}

/* ═══════════════════════════════════════
   COPY TO CLIPBOARD
═══════════════════════════════════════ */
function copyValue(elementId, btn) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text).catch(() => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  });
  if (btn) {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  }
  showToast('Copied: ' + text);
}

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
function sendContact() {
  const name  = document.getElementById('contact-name').value  || 'Customer';
  const phone = document.getElementById('contact-phone').value || '';
  const cat   = document.getElementById('contact-cat').value   || '';
  const msg   = document.getElementById('contact-msg').value   || '';

  const waMsg = `Hello Irene Household! 👋\nName: ${name}\nPhone: ${phone}\nInterest: ${cat}\n\n${msg}`;
  window.open('https://wa.me/254716060029?text=' + encodeURIComponent(waMsg), '_blank');
}

/* ═══════════════════════════════════════
   COOKIE BAR
═══════════════════════════════════════ */
function acceptCookie() {
  document.getElementById('cookie-bar').classList.remove('show');
  try { localStorage.setItem('ihc_cookie', '1'); } catch (e) {}
}
function declineCookie() {
  document.getElementById('cookie-bar').classList.remove('show');
}

/* ═══════════════════════════════════════
   TOAST
═══════════════════════════════════════ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1, rootMargin: '0px 0px -35px 0px' });

/* ═══════════════════════════════════════
   COUNTER ANIMATION
═══════════════════════════════════════ */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting || !e.target.dataset.target) return;
    const el  = e.target;
    const tgt = +el.dataset.target;
    const sfx = el.dataset.suffix || '';
    let cur = 0;
    const step = Math.max(1, Math.ceil(tgt / 50));
    const timer = setInterval(() => {
      cur = Math.min(cur + step, tgt);
      el.textContent = cur + sfx;
      if (cur >= tgt) clearInterval(timer);
    }, 28);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

/* ═══════════════════════════════════════
   DOM READY
═══════════════════════════════════════ */
/* ═══════════════════════════════════════
   FEATURE 5 — FREE DELIVERY PROGRESS BAR
═══════════════════════════════════════ */
var FREE_DELIVERY_THRESHOLD = 5000;

/* ═══════════════════════════════════════
   DOM READY — Initialize page
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  loadProducts(function() {

    // Start flash sale timer
    startFlashSaleTimer();

    // Init zoom
    setTimeout(initZoom, 500);

    // Scroll reveal
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) e.target.classList.add('on');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.rev').forEach(function(el) { observer.observe(el); });

    // Progress ring
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY;
      var total    = document.documentElement.scrollHeight - window.innerHeight;
      var progress = total > 0 ? scrolled / total : 0;
      var ring     = document.getElementById('progress-ring');
      var circle   = document.getElementById('ring-circle');
      if (ring)   ring.classList.toggle('show', scrolled > 300);
      if (circle) circle.style.strokeDashoffset = 113.1 * (1 - progress);
      var nav = document.getElementById('main-nav');
      if (nav) nav.classList.toggle('scrolled', scrolled > 40);
    });

    // Cookie bar
    setTimeout(function() {
      try {
        if (!localStorage.getItem('ihc_cookie')) {
          var cb = document.getElementById('cookie-bar');
          if (cb) cb.classList.add('show');
        }
      } catch(e) {
        var cb = document.getElementById('cookie-bar');
        if (cb) cb.classList.add('show');
      }
    }, 2500);

    // Cart & wishlist overlays
    var cartOv = document.getElementById('cart-overlay');
    if (cartOv) cartOv.addEventListener('click', closeCart);
    var wlOv = document.getElementById('wl-overlay');
    if (wlOv) wlOv.addEventListener('click', closeWishlist);

    // Quick view modal
    var modal = document.getElementById('qv-modal');
    if (modal) modal.addEventListener('click', function(e) {
      if (e.target === modal) closeQuickView();
    });

    // Update badges
    updateCartUI();
    updateWishlistUI();

  });
});
