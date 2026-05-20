/* ═══════════════════════════════════════
   IRENE HOUSEHOLD COLLECTIONS
   Main JavaScript File
═══════════════════════════════════════ */

/* ═══════════════════════════════════════
   PRODUCTS DATABASE
═══════════════════════════════════════ */
const PRODUCTS = [
  // MOSQUITO NETS
  { id:1,  cat:'nets',        name:'Tent Net',                          note:'Sizes available',                  price:2000, old:0,     img:'net.1.jpg',          badge:'',     badgeType:'' },
  { id:2,  cat:'nets',        name:'Round Nets',                        note:'Fits 3x6, 4x6 and 5x6',           price:1300, old:0,     img:'net.2.jpg',          badge:'',     badgeType:'' },
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
  { id:60, cat:'seatcovers',  name:'Printed Polyester Seat Covers',     note:'Stretchable material',             price:10500,old:0,     img:'seatcover.1.jpg',    badge:'',     badgeType:'' },
  { id:61, cat:'seatcovers',  name:'Purely Turkey Ready Made',          note:'3.2.1.1 full set',                price:6600, old:10500, img:'seatcover.2.jpg',    badge:'SALE', badgeType:'sale' },

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
];

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
  const badge    = p.badge ? `<span class="badge-tag badge-${p.badgeType}">${p.badge}</span>` : '';
  const oldPrice = p.old   ? `<span class="card-old-price">KSh ${p.old.toLocaleString()}</span>` : '';
  const priceDisplay = p.price > 0 ? 'KSh ' + p.price.toLocaleString() : 'Call for Price';
  const inWL = wishlist.some(i => i.id === p.id);

  return `
    <div class="product-card" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${badge}
        <button class="quick-view-btn" onclick="openQuickView(${p.id})">👁 Quick View</button>
        <button class="wishlist-btn ${inWL ? 'active' : ''}" data-id="${p.id}"
          onclick="toggleWishlist(this, ${p.id}, '${p.name.replace(/'/g, '')}', '${p.cat}', ${p.price}, '${p.img}')">
          ${inWL ? '❤️' : '♡'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-cat">${p.cat}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-note">${p.note}</div>
        <div class="card-price-row">
          <span class="card-price">${priceDisplay}</span>
          ${oldPrice}
        </div>
        <button class="add-to-cart-btn"
          onclick="addToCart(this, ${p.id}, '${p.name.replace(/'/g, '')}', '${p.cat}', ${p.price}, '${p.img}')">
          🛒 Add to Cart
        </button>
      </div>
    </div>`;
}

/* ═══════════════════════════════════════
   RENDER PRODUCTS
═══════════════════════════════════════ */
function renderProducts(containerId, filter = 'all', limit = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let products = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === filter);

  if (limit) products = products.slice(0, limit);

  container.innerHTML = products.length
    ? products.map(buildCard).join('')
    : '<p style="text-align:center;color:#6b7280;padding:40px;">No products found.</p>';
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
