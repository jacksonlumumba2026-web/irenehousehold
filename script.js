
/* ═══════════════════════════════════════
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
   
   { id:96, cat:'carpets',
     name:'New Product Name',
     note:'Short description or size',
     price:2500, old:0,
     img:'carpet.10.jpg',
     badge:'NEW', badgeType:'new' },
   
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
const PRODUCTS = [
  // MOSQUITO NETS
  { id:2,  cat:'nets',        name:'Round Nets',                        note:'Fits 3x6, 4x6 and 5x6',           price:900,  old:1300,  img:'net.2.jpg',          badge:'SALE', badgeType:'sale' },
  { id:1,  cat:'nets',        name:'Tent Net',                          note:'Sizes available',                  price:2000, old:0,     img:'net.1.jpg',          badge:'',     badgeType:'' },
  { id:3,  cat:'nets',        name:'Four Stand Mosquito Nets',          note:'Pink, purple, white and cream',    price:1400, old:1800,  img:'net.3.jpg',          badge:'SALE', badgeType:'sale' },
  { id:4,  cat:'nets',        name:'Two Stand Rail Mosquito Net',       note:'Multiple colours available',       price:4300, old:4500,  img:'net.4.jpg',          badge:'SALE', badgeType:'sale' },
  { id:5,  cat:'nets',        name:'Decker Top Square Mosquito Net',    note:'Free size fits all beds',          price:1800, old:0,     img:'net.5.jpg',          badge:'',     badgeType:'' },

  // DUVETS AND COVERS
  { id:6,  cat:'duvets',      name:'Fluffy Duvets',                     note:'1pc duvet, ultra soft',            price:4800, old:0,     img:'duvet.1.jpg',        badge:'HOT',  badgeType:'hot' },
  { id:7,  cat:'duvets',      name:'Velvet Duvets',                     note:'Multiple sizes available',         price:3800, old:4300,  img:'duvet.2.jpg',        badge:'SALE', badgeType:'sale' },
  { id:8,  cat:'duvets',      name:'Silk Embroidered Comforter Set',    note:'Comes as a full set',              price:5500, old:0,     img:'duvet.3.jpg',        badge:'NEW',  badgeType:'new' },
  { id:9,  cat:'duvets',      name:'Luxury Tufted Home Comforter',      note:'Size 6x7 and 6x8',                price:5500, old:0,     img:'duvet.4.jpg',        badge:'',     badgeType:'' },
  { id:10, cat:'duvets',      name:'Binded Duvet Set',                  note:'Size 7x8',                        price:4000, old:0,     img:'duvet.5.jpg',        badge:'',     badgeType:'' },
  { id:11, cat:'duvets',      name:'White Stripped Binded Duvet Set',   note:'Hotel grade all white',            price:3500, old:0,     img:'duvet.6.jpg',        badge:'HOTEL',badgeType:'hotel' },
  { id:12, cat:'duvets',      name:'Single Warm Woolen Duvet',          note:'Size 5x6',                        price:1999, old:2300,  img:'duvet.7.jpg',        badge:'SALE', badgeType:'sale' },
  { id:13, cat:'duvets',      name:'Unbinded Cartoon Duvets',           note:'1 duvet included',                 price:2800, old:0,     img:'duvet.8.jpg',        badge:'',     badgeType:'' },
  { id:14, cat:'duvets',      name:'High Quality Flannel Sherpa',       note:'Size 150x225cm',                  price:3300, old:0,     img:'duvet.9.jpg',        badge:'',     badgeType:'' },
  { id:15, cat:'duvets',      name:'White Stripped Duvet Covers Set',   note:'1 duvet cover included',           price:2700, old:0,     img:'duvet.10.jpg',       badge:'HOTEL',badgeType:'hotel' },
  { id:16, cat:'duvets',      name:'3pc Tufted Wave Duvet Cover Set',   note:'Elegant comfort luxury soft',      price:3700, old:0,     img:'duvet.11.jpg',       badge:'HOT',  badgeType:'hot' },
  { id:17, cat:'duvets',      name:'Nordic Microfibre Duvet Cover',     note:'Full set included',                price:4500, old:0,     img:'duvet.12.jpg',       badge:'NEW',  badgeType:'new' },
  { id:18, cat:'duvets',      name:'Pinch Pleat Pintuck Duvet Cover',   note:'Elegant comfort design',           price:3500, old:0,     img:'duvet.13.jpg',       badge:'',     badgeType:'' },
  { id:19, cat:'duvets',      name:'Designer Duvet Covers',             note:'2 pillowcases included',           price:2600, old:0,     img:'duvet.14.jpg',       badge:'',     badgeType:'' },
  { id:20, cat:'duvets',      name:'Classy Duvet Covers',               note:'2 pillowcases included',           price:2600, old:0,     img:'duvet.15.jpg',       badge:'',     badgeType:'' },
  { id:21, cat:'duvets',      name:'2 Sided 100 Percent Cotton Duvet',  note:'Size 6x7 and 7x8',                price:2900, old:0,     img:'duvet.16.jpg',       badge:'HOTEL',badgeType:'hotel' },
  { id:22, cat:'duvets',      name:'Cartoon Themed Duvet Covers',       note:'Kids sizes available',             price:3500, old:0,     img:'duvet.17.jpg',       badge:'',     badgeType:'' },
  { id:23, cat:'duvets',      name:'Binded Cartoon Themed Cotton Duvet',note:'Size 4x6',                        price:3500, old:0,     img:'duvet.18.jpg',       badge:'NEW',  badgeType:'new' },
  { id:24, cat:'duvets',      name:'White Fitted Bedsheets',            note:'4pcs pillow case included',        price:2900, old:0,     img:'duvet.19.jpg',       badge:'HOTEL',badgeType:'hotel' },
  { id:25, cat:'duvets',      name:'Bedrunner',                         note:'1pc runner and 2 pillow covers',   price:1800, old:2200,  img:'duvet.20.jpg',       badge:'SALE', badgeType:'sale' },
  { id:26, cat:'duvets',      name:'Mattress Protectors',               note:'3x6 waterproof',                  price:0,    old:0,     img:'duvet.21.jpg',       badge:'HOTEL',badgeType:'hotel' },

  // KITCHENWARE
  { id:27, cat:'kitchenware', name:'6pcs High Quality Signature Hotpots', note:'6pcs hotpot set',              price:8000, old:0,     img:'kitchenware.1.jpg',  badge:'HOT',  badgeType:'hot' },
  { id:28, cat:'kitchenware', name:'Redberry Maximus Jumbo',            note:'3pcs set 10L 15L 20L',            price:11000,old:0,     img:'kitchenware.2.jpg',  badge:'',     badgeType:'' },
  { id:29, cat:'kitchenware', name:'Carolina Premium Stainless Steel',  note:'4pcs in a set',                   price:4000, old:0,     img:'kitchenware.3.jpg',  badge:'',     badgeType:'' },
  { id:30, cat:'kitchenware', name:'Insulated Concord Hotpot',          note:'Keeps hot 8 to 12hrs',            price:5000, old:0,     img:'kitchenware.4.jpg',  badge:'NEW',  badgeType:'new' },
  { id:31, cat:'kitchenware', name:'3pcs Alixir Insulated Hotpots',     note:'2000ml 2500ml 3000ml',            price:4000, old:0,     img:'kitchenware.5.jpg',  badge:'',     badgeType:'' },
  { id:32, cat:'kitchenware', name:'A Set of 4 Hotpots',                note:'1.2L 1.8L 2.4L and 3.5L',        price:2800, old:0,     img:'kitchenware.6.jpg',  badge:'',     badgeType:'' },
  { id:33, cat:'kitchenware', name:'Classy Insulated Balivia Hotpot',   note:'Set of 4pcs',                     price:3400, old:0,     img:'kitchenware.7.jpg',  badge:'',     badgeType:'' },
  { id:34, cat:'kitchenware', name:'Elegant Hotspots Set',              note:'Capacity 1.5L 3L 5L and 9L',      price:2800, old:0,     img:'kitchenware.8.jpg',  badge:'',     badgeType:'' },
  { id:35, cat:'kitchenware', name:'58pcs Ceramic Dinner Set',          note:'12 inch oval plate included',      price:6999, old:0,     img:'kitchenware.9.jpg',  badge:'HOT',  badgeType:'hot' },
  { id:36, cat:'kitchenware', name:'33pcs Wavy Dinner Set',             note:'6 wavy plates',                   price:9999, old:0,     img:'kitchenware.10.jpg', badge:'',     badgeType:'' },
  { id:37, cat:'kitchenware', name:'31pcs Dinner Sets',                 note:'6 plates included',               price:8999, old:0,     img:'kitchenware.11.jpg', badge:'',     badgeType:'' },
  { id:38, cat:'kitchenware', name:'24pcs Ceramic Dinner Set',          note:'24 PCs full premium set',         price:7500, old:0,     img:'kitchenware.12.jpg', badge:'NEW',  badgeType:'new' },
  { id:39, cat:'kitchenware', name:'30pcs Wavy Dinner Set',             note:'Luxury design',                   price:7000, old:0,     img:'kitchenware.13.jpg', badge:'',     badgeType:'' },
  { id:40, cat:'kitchenware', name:'24pcs Dinner Sets Black Gold Rim',  note:'24 pcs set',                      price:7000, old:0,     img:'kitchenware.14.jpg', badge:'',     badgeType:'' },
  { id:41, cat:'kitchenware', name:'24pcs Dinner Sets White Gold Line', note:'24 pcs set',                      price:7000, old:0,     img:'kitchenware.15.jpg', badge:'',     badgeType:'' },
  { id:42, cat:'kitchenware', name:'24pcs Japanese Dinner Sets',        note:'Trendy Japanese style',            price:6000, old:0,     img:'kitchenware.16.jpg', badge:'',     badgeType:'' },
  { id:43, cat:'kitchenware', name:'32pcs Quadra Dinner Set',           note:'6pcs dinner plates',              price:6999, old:0,     img:'kitchenware.17.jpg', badge:'NEW',  badgeType:'new' },
  { id:44, cat:'kitchenware', name:'16pcs Diva Dinner Set',             note:'4pcs dinner plates',              price:4300, old:0,     img:'kitchenware.18.jpg', badge:'',     badgeType:'' },
  { id:45, cat:'kitchenware', name:'Japanese Style Dinnerset',          note:'Ceramic premium pieces',           price:6500, old:0,     img:'kitchenware.19.jpg', badge:'',     badgeType:'' },
  { id:46, cat:'kitchenware', name:'13pcs Ceramic Versace Tea Set',     note:'6pcs 250ml cups',                 price:4000, old:0,     img:'kitchenware.20.jpg', badge:'NEW',  badgeType:'new' },
  { id:47, cat:'kitchenware', name:'6pcs Ceramic Plates',               note:'Marble design',                   price:1800, old:0,     img:'kitchenware.21.jpg', badge:'',     badgeType:'' },
  { id:48, cat:'kitchenware', name:'3pcs Ceramic Serving Dishes',       note:'Gold accent design',               price:4500, old:0,     img:'kitchenware.22.jpg', badge:'',     badgeType:'' },
  { id:49, cat:'kitchenware', name:'3pcs Ceramic Bowls',                note:'With lids',                        price:4500, old:0,     img:'kitchenware.23.jpg', badge:'',     badgeType:'' },
  { id:50, cat:'kitchenware', name:'3pcs Trays',                        note:'Gold trim design',                 price:3000, old:0,     img:'kitchenware.24.jpg', badge:'',     badgeType:'' },

  // CARPETS AND MATS
  { id:51, cat:'carpets',     name:'Fluffy Carpets',                    note:'5x8 size 280cm',                  price:3500, old:0,     img:'carpet.1.jpg',       badge:'HOT',  badgeType:'hot' },
  { id:52, cat:'carpets',     name:'Faux Fur Carpets',                  note:'Size 3x6',                        price:2600, old:0,     img:'carpet.2.jpg',       badge:'',     badgeType:'' },
  { id:53, cat:'carpets',     name:'Fluffy Bedside Mat',                note:'Size 4x6',                        price:2000, old:0,     img:'carpet.3.jpg',       badge:'',     badgeType:'' },
  { id:54, cat:'carpets',     name:'Home Decorative Mats',              note:'Love heart 90cmx90cm',             price:2400, old:0,     img:'carpet.4.jpg',       badge:'HOT',  badgeType:'hot' },
  { id:55, cat:'carpets',     name:'Kitchen Mats',                      note:'Multiple designs',                 price:2000, old:0,     img:'carpet.5.jpg',       badge:'',     badgeType:'' },
  { id:56, cat:'carpets',     name:'Round Anti-slip Mat',               note:'Size 55cm by 55cm',               price:950,  old:0,     img:'carpet.6.jpg',       badge:'',     badgeType:'' },
  { id:57, cat:'carpets',     name:'Kawaii Rug',                        note:'Non-slip rainbow unicorn',         price:950,  old:0,     img:'carpet.7.jpg',       badge:'NEW',  badgeType:'new' },
  { id:58, cat:'carpets',     name:'Chairpads and Comforters',          note:'Classy and elegant',               price:800,  old:0,     img:'carpet.8.jpg',       badge:'',     badgeType:'' },
  { id:59, cat:'carpets',     name:'Faux Fur Mats',                     note:'Pink faux fur',                    price:2600, old:0,     img:'carpet.9.jpg',       badge:'',     badgeType:'' },

  // SEAT COVERS
  { id:60, cat:'seatcovers', name:'Printed Polyester Seat Covers',
    note:'1 Seater @KSh2,500 | 2 Seater @KSh3,000 | 3 Seater @KSh3,300 | 5 Seater 311 @KSh7,500 | 7 Seater 3211 @KSh10,500',
    price:2500, old:0,
    img:'seatcover.1.jpg',
    imgs:['seatcover.1.jpg','seatcover.1b.jpg','seatcover.1c.jpg','seatcover.1d.jpg'],
    badge:'HOT', badgeType:'hot' },
  { id:61, cat:'seatcovers', name:'Purely Turkey Ready Made Seat Covers',
    note:'1 Seater @KSh4,000 | 2 Seater @KSh4,500 | 3 Seater @KSh5,000 — Premium quality',
    price:4000, old:0,
    img:'seatcover.2.jpg',
    imgs:['seatcover.2.jpg','seatcover.2b.jpg','seatcover.2c.jpg','seatcover.2d.jpg'],
    badge:'', badgeType:'' },
  { id:131, cat:'seatcovers', name:'5 Seater Seat Cover Set 3-1-1',   note:'Full 5 seater set — Stretchable material — Multiple colours', price:7500,  old:0, img:'seatcover.3.jpg',  imgs:['seatcover.3.jpg','seatcover.3b.jpg','seatcover.3c.jpg','seatcover.3d.jpg'], badge:'',    badgeType:''     },
  { id:132, cat:'seatcovers', name:'5 Seater Seat Cover Set 3-2',     note:'Full 5 seater set — Stretchable material — Multiple colours', price:6300,  old:0, img:'seatcover.4.jpg',  imgs:['seatcover.4.jpg','seatcover.4b.jpg','seatcover.4c.jpg','seatcover.4d.jpg'], badge:'',    badgeType:''     },
  { id:133, cat:'seatcovers', name:'3 Seater Seat Cover',              note:'Single 3 seater cover — Multiple colours available',         price:3300,  old:0, img:'seatcover.5.jpg',  imgs:['seatcover.5.jpg','seatcover.5b.jpg','seatcover.5c.jpg'],                    badge:'',    badgeType:''     },
  { id:134, cat:'seatcovers', name:'2 Seater Seat Cover',              note:'Single 2 seater cover — Multiple colours available',         price:3000,  old:0, img:'seatcover.6.jpg',  imgs:['seatcover.6.jpg','seatcover.6b.jpg','seatcover.6c.jpg'],                    badge:'',    badgeType:''     },
  { id:135, cat:'seatcovers', name:'1 Seater Seat Cover',              note:'Single 1 seater cover — Multiple colours available',         price:2500,  old:0, img:'seatcover.7.jpg',  imgs:['seatcover.7.jpg','seatcover.7b.jpg','seatcover.7c.jpg'],                    badge:'',    badgeType:''     },

  // BATH AND TOWELS
  { id:62, cat:'bath',        name:'3 in 1 Towel Set',                  note:'100 percent cotton',               price:2500, old:0,     img:'bath.1.jpg',         badge:'HOT',  badgeType:'hot' },
  { id:63, cat:'bath',        name:'Prestige Towels',                   note:'Size 90x165cm',                   price:1350, old:0,     img:'bath.2.jpg',         badge:'HOTEL',badgeType:'hotel' },
  { id:64, cat:'bath',        name:'Bath Towels Micro Fiber',           note:'Soft and absorbent',               price:1100, old:0,     img:'bath.3.jpg',         badge:'',     badgeType:'' },
  { id:65, cat:'bath',        name:'Bath Gown',                         note:'Premium quality',                  price:1999, old:2500,  img:'bath.4.jpg',         badge:'SALE', badgeType:'sale' },
  { id:66, cat:'bath',        name:'Micro Fibre Bath Wrap',             note:'Hair wrap 65cm by 25cm',           price:1300, old:0,     img:'bath.5.jpg',         badge:'NEW',  badgeType:'new' },
  { id:67, cat:'bath',        name:'Hooded Kids Bathrobe',              note:'Ages 3 to 12 years',               price:2000, old:0,     img:'bath.6.jpg',         badge:'NEW',  badgeType:'new' },
  { id:68, cat:'bath',        name:'3pcs Fluffy Toilet Set',            note:'Cover mat and rug',                price:1800, old:0,     img:'bath.7.jpg',         badge:'',     badgeType:'' },
  { id:69, cat:'bath',        name:'3 Pieces Body Cleaning Wash Clothes',note:'Shower ball included',            price:800,  old:0,     img:'bath.8.jpg',         badge:'',     badgeType:'' },

  // FURNITURE
  { id:70, cat:'furniture',   name:'Four Seater Marble Dining Table',   note:'Marble top premium',               price:48500,old:0,     img:'furniture.1.jpg',    badge:'HOT',  badgeType:'hot' },
  { id:71, cat:'furniture',   name:'Pure Marble Coffee Table',          note:'White golden 8 stands',            price:12500,old:16500, img:'furniture.2.jpg',    badge:'SALE', badgeType:'sale' },
  { id:72, cat:'furniture',   name:'3 in 1 Coffee Table',               note:'Classic side table living room',   price:19500,old:20999, img:'furniture.3.jpg',    badge:'SALE', badgeType:'sale' },
  { id:73, cat:'furniture',   name:'Four Seater Dining Table',          note:'Wooden top and chairs',            price:31900,old:0,     img:'furniture.4.jpg',    badge:'',     badgeType:'' },
  { id:74, cat:'furniture',   name:'Four Seater Dining Table White',    note:'White finish',                     price:23999,old:0,     img:'furniture.5.jpg',    badge:'',     badgeType:'' },
  { id:75, cat:'furniture',   name:'Minimalist Two Seater Dining Table',note:'Modern design',                   price:16999,old:0,     img:'furniture.6.jpg',    badge:'NEW',  badgeType:'new' },
  { id:76, cat:'furniture',   name:'Modern Luxury Marble Effect Table', note:'Color white and black',            price:9499, old:0,     img:'furniture.7.jpg',    badge:'',     badgeType:'' },
  { id:77, cat:'furniture',   name:'Luxury Creative Side Table',        note:'Size 68x40x60cm',                 price:6999, old:7999,  img:'furniture.8.jpg',    badge:'SALE', badgeType:'sale' },
  { id:78, cat:'furniture',   name:'Marbletop Luxury Double Drawer',    note:'Two drawer large capacity',        price:8999, old:9500,  img:'furniture.9.jpg',    badge:'SALE', badgeType:'sale' },
  { id:79, cat:'furniture',   name:'Nordic Luxury Double Drawer White', note:'Two drawer large capacity',        price:7500, old:8500,  img:'furniture.10.jpg',   badge:'SALE', badgeType:'sale' },
  { id:80, cat:'furniture',   name:'Verona Bistro Arm Chair',           note:'Grey and Light Pink',              price:10800,old:0,     img:'furniture.11.jpg',   badge:'NEW',  badgeType:'new' },
  { id:81, cat:'furniture',   name:'Eame Chairs',                       note:'Per chair',                        price:3600, old:0,     img:'furniture.12.jpg',   badge:'',     badgeType:'' },
  { id:82, cat:'furniture',   name:'Plastic Wardrobe Three Column',     note:'Multiple colours',                 price:5500, old:0,     img:'furniture.13.jpg',   badge:'',     badgeType:'' },
  { id:83, cat:'furniture',   name:'Metallic Shoe and Clothe Rack',     note:'Double row hook design',           price:2500, old:0,     img:'furniture.14.jpg',   badge:'',     badgeType:'' },
  { id:84, cat:'furniture',   name:'Tree Book Shelf',                   note:'Size 147.2cm x 21.5 x 34cm',      price:6300, old:0,     img:'furniture.15.jpg',   badge:'',     badgeType:'' },
  { id:85, cat:'furniture',   name:'Inflatable Deluxe Lounge Seat',     note:'Portable and inflatable 2pcs',     price:4550, old:0,     img:'furniture.16.jpg',   badge:'NEW',  badgeType:'new' },
  { id:86, cat:'furniture',   name:'Toilet and Washing Machine Rack',   note:'Space saving design',              price:2999, old:0,     img:'furniture.17.jpg',   badge:'',     badgeType:'' },
  { id:87, cat:'furniture',   name:'Balcony Privacy Shield',            note:'Colours available',                price:4500, old:0,     img:'furniture.18.jpg',   badge:'',     badgeType:'' },
  { id:88, cat:'furniture',   name:'Kids Stackable Bed',                note:'Space saving design',              price:6500, old:0,     img:'furniture.19.jpg',   badge:'',     badgeType:'' },
  { id:89, cat:'furniture',   name:'Kindergarten Tables and Chairs',    note:'Kindergarten tables',              price:10950,old:0,     img:'furniture.20.jpg',   badge:'',     badgeType:'' },
  { id:90, cat:'furniture',   name:'3 in 1 Coffee Table Round',         note:'Classic side table',               price:19999,old:0,     img:'furniture.21.jpg',   badge:'',     badgeType:'' },
  { id:91, cat:'furniture',   name:'Nordic Luxury Double Drawer Bedside',note:'Two drawer large capacity',       price:7500, old:8500,  img:'furniture.22.jpg',   badge:'SALE', badgeType:'sale' },

  // KIDS CORNER
  { id:92, cat:'kids',        name:'Biaowang Large Capacity School Bag',note:'Side pockets for water bottle',    price:2300, old:0,     img:'kid.1.jpg',          badge:'',     badgeType:'' },
  { id:93, cat:'kids',        name:'Big Size Insulated Kids Lunch Bag', note:'Fits lunch snack and water bottle',price:850,  old:0,     img:'kid.2.jpg',          badge:'',     badgeType:'' },
  { id:94, cat:'kids',        name:'Girls High Quality Leather Shoes',  note:'Material leather',                 price:2500, old:0,     img:'kid.3.jpg',          badge:'',     badgeType:'' },
  { id:95, cat:'kids',        name:'Boys High Quality Leather Shoes',   note:'Material leather',                 price:2500, old:0,     img:'kid.4.jpg',          badge:'',     badgeType:'' },
  { id:96,  cat:'duvets',      name:'Egyptian Duvet Cover',              note:'Size 6x7 and 6x6 — 1 duvet cover, 1 bedsheet, 2 pillowcases',   price:4000, old:0,    img:'duvet.22.jpg',       badge:'HOT',  badgeType:'hot'  },

  // ELECTRONICS
  { id:97,  cat:'electronics', name:'Q7S Smart WiFi Camera V380',         note:'Pan & Tilt 355° — Night Vision — Motion Detection — Two-Way Audio', price:2800, old:0,  img:'electronics.1.jpg',  badge:'NEW',  badgeType:'new'  },
  { id:98,  cat:'electronics', name:'Cute Cat Kids Watch Combo',           note:'Watch + Wireless Earbuds + Cute Case — Perfect gift for kids',       price:1350, old:0,  img:'electronics.2.jpg',  badge:'HOT',  badgeType:'hot'  },
  { id:99,  cat:'electronics', name:'Neck Pillow with Phone Holder Pocket',note:'Built-in side pocket for your phone — Travel essential',             price:950,  old:0,  img:'electronics.3.jpg',  badge:'',     badgeType:''     },

  // COOKWARE
  { id:100, cat:'cookware',    name:'Edenberg 12pcs Stainless Cookware',   note:'Capacities: 2.1L 2.9L 3.9L 5.1L 6.5L 8.2L — Code 4037',           price:9500, old:0,  img:'cookware.1.jpg',     badge:'HOT',  badgeType:'hot'  },
  { id:101, cat:'cookware',    name:'Nunix 50x55 Standing Cooker 3+1',     note:'3 Gas + 1 Electric burner — New model with gas oven',               price:18999,old:0,  img:'cookware.2.jpg',     badge:'NEW',  badgeType:'new'  },
  { id:102, cat:'cookware',    name:'Nunix Table Top Cooker 3+1',          note:'3 Gas + 1 Electric burner — Compact tabletop design',               price:6000, old:0,  img:'cookware.3.jpg',     badge:'',     badgeType:''     },
  { id:103, cat:'cookware',    name:'Nunix Full Gas Standing Cooker',      note:'Full gas cooker with shelf — Ideal for home and kitchen',            price:7900, old:0,  img:'cookware.4.jpg',     badge:'',     badgeType:''     },

  // TRAVEL & LUGGAGE
  { id:104, cat:'travel',      name:'Unbreakable PP 3-in-1 Suitcase Set',  note:'3 sizes — 360° wheels — Double zip — Scratch resistant — 4 colours', price:7999, old:0, img:'travel.1.jpg',  imgs:['travel.1.jpg','travel.1b.jpg','travel.1c.jpg','travel.1d.jpg'], badge:'HOT',  badgeType:'hot'  },
  { id:105, cat:'travel',      name:'Waterproof Outdoor Picnic Mat',        note:'150x200cm — Available in 4 colours — Foldable and portable',         price:750,  old:0, img:'travel.2.jpg',  imgs:['travel.2.jpg','travel.2b.jpg','travel.2c.jpg','travel.2d.jpg'], badge:'SALE', badgeType:'sale' },

  // HOME DECOR
  { id:106, cat:'decor',       name:'Plain Coral Fleece Throw Blanket',    note:'Sizes 4/5, 5/6, 6/6 — Soft and cosy — Multiple colours',            price:999,  old:0,  img:'decor.1.jpg',   imgs:['decor.1.jpg','decor.1b.jpg','decor.1c.jpg'], badge:'NEW',  badgeType:'new'  },
  { id:107, cat:'decor',       name:'3pcs 3D Non-Slip Toilet Mat Set',     note:'Heavy grip rubber underside — Size 45x75cm + 2pcs 40x45cm',         price:850,  old:0,  img:'decor.2.jpg',        badge:'HOT',  badgeType:'hot'  },
  { id:108, cat:'decor',       name:'3-Layer Oval Trolley Rack Table',     note:'60x30x67cm — Black or white marble — 2 round top shelves',          price:2999, old:0,  img:'decor.3.jpg',   imgs:['decor.3.jpg','decor.3b.jpg'], badge:'NEW',  badgeType:'new'  },
  // ── PILLOWS & CUSHIONS ──
  { id:109, cat:'decor',  name:'Wave Pillow Case',                    note:'Size 45x45cm — Case only',                            price:200,  old:0, img:'decor.4.jpg',        badge:'NEW',  badgeType:'new'  },
  { id:110, cat:'decor',  name:'Wave Pillow Insert',                  note:'Size 45x45cm — Insert only',                          price:200,  old:0, img:'decor.4b.jpg',       badge:'NEW',  badgeType:'new'  },
  { id:111, cat:'decor',  name:'Wave Pillow + Case Set',              note:'Size 45x45cm — Pillow and case included',             price:400,  old:0, img:'decor.4c.jpg',       badge:'HOT',  badgeType:'hot'  },
  { id:112, cat:'decor',  name:'Knot Pillow',                         note:'Size 22cm width — Decorative knot design',            price:850,  old:0, img:'decor.5.jpg',        badge:'',     badgeType:''     },
  { id:113, cat:'decor',  name:'Tufted Bohemian Throw Pillow Cover',  note:'Square 45x45cm or Lumbar 30x50cm — @750 each',        price:750,  old:0, img:'decor.6.jpg',        badge:'NEW',  badgeType:'new'  },

  // ── DOORMATS & FLOOR MATS ──
  { id:114, cat:'carpets', name:'Heavy Plastic Doormat',              note:'Size 50x80cm — Durable heavy duty',                   price:1200, old:0, img:'carpet.10.jpg',      badge:'',     badgeType:''     },
  { id:115, cat:'carpets', name:'Turkish Doormat',                    note:'Size 50x80cm — Premium Turkish design',               price:1300, old:0, img:'carpet.11.jpg',      badge:'HOT',  badgeType:'hot'  },
  { id:116, cat:'carpets', name:'Memory Foam Mat',                    note:'Size 40x60cm @550 or 50x80cm @650',                   price:550,  old:0, img:'carpet.12.jpg',      badge:'',     badgeType:''     },
  { id:117, cat:'carpets', name:'3D Smooth Doormat',                  note:'Size 50x80cm — Stylish 3D design',                    price:600,  old:0, img:'carpet.13.jpg',      badge:'NEW',  badgeType:'new'  },
  { id:118, cat:'carpets', name:'Rubber Absorbent Mat',               note:'Size 50x80cm — Non-slip rubber base',                 price:850,  old:0, img:'carpet.14.jpg',      badge:'',     badgeType:''     },
  { id:119, cat:'carpets', name:'Non-Slip Memory Foam Mat',           note:'40x60cm @850 or 50x80cm @1250 navy blue only',        price:850,  old:0, img:'carpet.15.jpg',      badge:'',     badgeType:''     },
  { id:120, cat:'carpets', name:'Translucent Bathroom Anti-Slip Mat', note:'Large 50x80cm @800 or Medium 40x60cm @650',           price:650,  old:0, img:'carpet.16.jpg',      badge:'NEW',  badgeType:'new'  },
  { id:121, cat:'carpets', name:'Heavy Large Plastic Outdoor Doormat',note:'Size 60x90cm — Extra large heavy duty',               price:1500, old:0, img:'carpet.17.jpg',      badge:'',     badgeType:''     },
  { id:122, cat:'carpets', name:'Faux Fur Carpet',                    note:'Size 60x180cm — Irregular shape — Bedside or décor',  price:2300, old:0, img:'carpet.18.jpg',      badge:'SALE', badgeType:'sale', imgs:['carpet.18.jpg','carpet.18b.jpg','carpet.18c.jpg'] },

  // ── DUVETS & BEDDING ──
  { id:123, cat:'duvets',  name:'Single Velvet Fluffy Duvet',         note:'Size 4x6 and 5x6 — 1 fluffy fleece duvet',            price:2999, old:0, img:'duvet.23.jpg',       badge:'HOT',  badgeType:'hot'  },
  { id:124, cat:'duvets',  name:'6pc Luxury Velvet Plush Duvet Set',  note:'Size 6x6 and 6x7 — 1 duvet, 1 bedsheet, 4 pillowcases', price:4300, old:0, img:'duvet.24.jpg',     badge:'HOT',  badgeType:'hot'  },
  { id:125, cat:'duvets',  name:'Fleece Blanket',                     note:'Size 6x6 — Soft and warm',                            price:999,  old:0, img:'duvet.25.jpg',       badge:'',     badgeType:''     },

  // ── FURNITURE ──
  { id:126, cat:'furniture', name:'Kids Fashion Plastic Wardrobe',    note:'Colourful kids wardrobe — Multiple sections',         price:4999, old:0, img:'furniture.23.jpg',   badge:'NEW',  badgeType:'new'  },

  // ── COOKWARE / KITCHEN ──
  { id:127, cat:'cookware',  name:'Electromate Hand Mixer',           note:'Powerful hand mixer — Perfect for baking',            price:1299, old:0, img:'cookware.5.jpg',     badge:'NEW',  badgeType:'new'  },
  { id:128, cat:'cookware',  name:'9.5L Tea Urn Double Tap',          note:'Large capacity — Double tap for easy serving',        price:2999, old:0, img:'cookware.6.jpg',     badge:'SALE', badgeType:'sale' },
  { id:129, cat:'cookware',  name:'Unique Knife Set',                 note:'Premium quality — Full knife set',                    price:2999, old:0, img:'cookware.7.jpg',     badge:'HOT',  badgeType:'hot'  },

  { id:130, cat:'nets', name:'Double Decker Mosquito Net', note:'Size 4x6 — Colours: Purple, Pink, White and Cream', price:1700, old:0, img:'net.6.jpg', imgs:['net.6.jpg','net.6b.jpg','net.6c.jpg','net.6d.jpg'], badge:'NEW', badgeType:'new' },

];


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
function buildCard(p) {
  var badge = p.badge ? '<span class="badge-tag badge-' + p.badgeType + '">' + p.badge + '</span>' : '';
  var oldPrice = p.old ? '<span style="font-size:11px;color:#bbb;text-decoration:line-through;">KSh ' + p.old.toLocaleString() + '</span>' : '';
  var price = p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Call for Price';
  var inWL = wishlist.some(function(i) { return i.id === p.id; });
  var n = p.name.replace(/'/g, '').replace(/"/g, '');
  var waMsg = encodeURIComponent('Hi Irene! I am interested in: ' + p.name + ' - ' + price + '. Website: irenehousehold.co.ke');

  // Multi-photo colour switcher
  var colourSwitch = '';
  if (p.imgs && p.imgs.length > 1) {
    colourSwitch = '<div style="display:flex;gap:5px;padding:6px 10px;background:#f9f9f9;border-top:1px solid #f0f0f0;">';
    for (var ci = 0; ci < p.imgs.length; ci++) {
      colourSwitch += '<div onclick="switchImg(this,\'' + p.imgs[ci] + '\',\'' + p.id + '\')" style="width:32px;height:32px;border-radius:4px;overflow:hidden;cursor:pointer;border:2px solid ' + (ci===0?'var(--green)':'#e0e0e0') + ';flex-shrink:0;">' +
        '<img src="' + p.imgs[ci] + '" style="width:100%;height:100%;object-fit:cover;" loading="lazy"/>' +
      '</div>';
    }
    colourSwitch += '</div>';
  }

  return '<div class="product-card" id="card-' + p.id + '">' +
    '<div class="card-img">' +
      '<img src="' + p.img + '" alt="' + n + '" loading="lazy" id="img-' + p.id + '"/>' +
      badge +
      '<button class="card-qv" onclick="openQuickView(' + p.id + ')">&#128065; Quick View</button>' +
      '<button class="card-wish' + (inWL ? ' active' : '') + '" onclick="toggleWishlist(this,' + p.id + ',\'' + n + '\',\'' + p.cat + '\',' + p.price + ',\'' + p.img + '\')">&#9825;</button>' +
    '</div>' +
    colourSwitch +
    '<div class="card-body">' +
      '<div class="card-location">Nairobi, Kenya</div>' +
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
document.addEventListener('DOMContentLoaded', () => {

  // Start flash sale timer
  startFlashSaleTimer();

  // Init image zoom
  setTimeout(initZoom, 500);

  // Observe reveal elements
  document.querySelectorAll('.rev, .rev-l, .rev-r').forEach(el => revealObserver.observe(el));

  // Observe counters
  document.querySelectorAll('[data-target]').forEach(el => {
    el.textContent = '0' + (el.dataset.suffix || '');
    counterObserver.observe(el);
  });

  // Cookie bar
  setTimeout(() => {
    try {
      if (!localStorage.getItem('ihc_cookie')) {
        const cb = document.getElementById('cookie-bar');
        if (cb) cb.classList.add('show');
      }
    } catch (e) {
      const cb = document.getElementById('cookie-bar');
      if (cb) cb.classList.add('show');
    }
  }, 2500);

  // Close modal on backdrop click
  const modal = document.getElementById('qv-modal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeQuickView();
    });
  }

  // Close drawers on overlay click
  const cartOv = document.getElementById('cart-overlay');
  if (cartOv) cartOv.addEventListener('click', closeCart);

  const wlOv = document.getElementById('wl-overlay');
  if (wlOv) wlOv.addEventListener('click', closeWishlist);

});
