/* ═══════════════════════════════════════
   GSAP PREMIUM ANIMATIONS
   Irene Household Collections
   Loads GSAP dynamically — never blocks window.load
═══════════════════════════════════════ */

(function () {
  'use strict';

  var GSAP_URL = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
  var ST_URL   = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';

  /* pageReady = true once window.load has fired (loader already hidden).
     When GSAP arrives after that point we skip above-fold .from() calls
     that would flash content invisible then back. */
  var pageReady = false;
  if (document.readyState === 'complete') {
    pageReady = true;
  } else {
    window.addEventListener('load', function () { pageReady = true; });
  }

  /* ── dynamic script loader ── */
  function loadScript(src, cb) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = cb;
    s.onerror = function () { /* GSAP unavailable — silently skip */ };
    document.head.appendChild(s);
  }

  /* ── bootstrap: load GSAP then ScrollTrigger then run ── */
  function bootstrap() {
    loadScript(GSAP_URL, function () {
      if (typeof gsap === 'undefined') return;
      gsap.defaults({ ease: 'power3.out' });
      loadScript(ST_URL, function () {
        if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
        init();
      });
    });
  }

  /* fire bootstrap after page fully loads so it never delays window.load */
  if (document.readyState === 'complete') {
    bootstrap();
  } else {
    window.addEventListener('load', bootstrap);
  }

  /* ══════════════════════════════════════════
     ANIMATION FUNCTIONS
  ══════════════════════════════════════════ */

  /* ── HERO ── (only animate if page just finished loading, i.e. loader hiding now) */
  function initHero() {
    if (!document.querySelector('.hero-banner')) return;
    if (pageReady) return; /* loader already gone — elements already visible, skip */
    var tl = gsap.timeline({ delay: 0.15 });
    tl.from('.hero-tag',       { y: 24, opacity: 0, duration: 0.5 })
      .from('.hero-banner h1', { y: 44, opacity: 0, duration: 0.7, ease: 'power4.out' }, '-=0.25')
      .from('.hero-banner p',  { y: 28, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-search',    { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')
      .from('.hero-cta-row',   { y: 20, opacity: 0, duration: 0.4 }, '-=0.15')
      .from('.hero-stat',      { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.15')
      .from('.hero-float-badge', { y: 16, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.1');
  }

  /* ── CATEGORY STRIP ── */
  function initCatStrip() {
    if (!document.querySelector('.cat-strip-item')) return;
    gsap.from('.cat-strip-item', {
      scrollTrigger: { trigger: '.cat-strip-wrap', start: 'top 92%' },
      x: -24, opacity: 0, duration: 0.38, stagger: 0.045
    });
  }

  /* ── FLASH BANNER ── */
  function initFlash() {
    if (!document.querySelector('.flash-banner')) return;
    gsap.from('.flash-banner', {
      scrollTrigger: { trigger: '.flash-banner', start: 'top 90%' },
      scale: 0.94, opacity: 0, duration: 0.5, ease: 'back.out(1.2)'
    });
  }

  /* ── SECTION HEADS ── */
  function initSectionHeads() {
    document.querySelectorAll('.section-head, .sec-label, .sec-title, .sec-sub').forEach(function (el) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        y: 22, opacity: 0, duration: 0.48
      });
    });
  }

  /* ── PRODUCT CARDS (live + dynamic) ── */
  function initProductCards() {
    document.querySelectorAll('.products-grid').forEach(function (grid) {
      var firstRun = true;
      new MutationObserver(function () {
        var cards = grid.querySelectorAll('.card');
        if (!cards.length) return;
        gsap.killTweensOf(cards);
        gsap.fromTo(cards,
          { y: 36, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration:  firstRun ? 0.5  : 0.38,
            stagger:   firstRun ? 0.055 : 0.04,
            ease: 'power3.out',
            clearProps: 'transform,opacity'
          }
        );
        firstRun = false;
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }).observe(grid, { childList: true });
    });

    /* card hover lift — pointer devices only */
    if (window.matchMedia('(hover: hover)').matches) {
      document.addEventListener('mouseover', function (e) {
        var c = e.target.closest('.card');
        if (c) gsap.to(c, { y: -7, boxShadow: '0 14px 36px rgba(22,22,22,.18)', duration: 0.22 });
      });
      document.addEventListener('mouseout', function (e) {
        var c = e.target.closest('.card');
        if (c) gsap.to(c, { y: 0, boxShadow: '0 2px 10px rgba(0,0,0,.07)', duration: 0.22 });
      });
    }
  }

  /* ── PAYMENT SECTION ── */
  function initPaySection() {
    if (!document.querySelector('.pay-card')) return;
    gsap.from('.pay-card', {
      scrollTrigger: { trigger: '#payment', start: 'top 82%' },
      y: 50, opacity: 0, duration: 0.6, stagger: 0.14
    });
    gsap.from('.pay-step', {
      scrollTrigger: { trigger: '.pay-card', start: 'top 78%' },
      x: -22, opacity: 0, duration: 0.38, stagger: 0.09
    });
  }

  /* ── HOTEL SECTION ── */
  function initHotel() {
    if (!document.querySelector('.hotel-section')) return;
    gsap.from('.hotel-section h2', {
      scrollTrigger: { trigger: '.hotel-section', start: 'top 82%' },
      x: -40, opacity: 0, duration: 0.6
    });
    gsap.from('.hotel-badge', {
      scrollTrigger: { trigger: '.hotel-section', start: 'top 78%' },
      y: 20, opacity: 0, duration: 0.4, stagger: 0.08
    });
  }

  /* ── COMMUNITY ── */
  function initCommunity() {
    if (!document.querySelector('.community-section')) return;
    gsap.from('.comm-card', {
      scrollTrigger: { trigger: '.community-section', start: 'top 82%' },
      y: 40, opacity: 0, duration: 0.5, stagger: 0.12, ease: 'back.out(1.2)'
    });
  }

  /* ── FOOTER ── */
  function initFooter() {
    gsap.from('footer .footer-col', {
      scrollTrigger: { trigger: 'footer', start: 'top 88%' },
      y: 28, opacity: 0, duration: 0.4, stagger: 0.1
    });
  }

  /* ── CART DRAWER ── */
  function initCartDrawer() {
    var origOpen = window.openCart;
    if (!origOpen) return;
    window.openCart = function () {
      origOpen();
      gsap.from('#cart-items .cart-item', { x: 32, opacity: 0, duration: 0.32, stagger: 0.07, delay: 0.12 });
      gsap.from('.drawer-footer',         { y: 22, opacity: 0, duration: 0.38, delay: 0.18 });
    };
  }

  /* ── PAY OPT CLICK BOUNCE ── */
  function initPayOpts() {
    document.addEventListener('click', function (e) {
      var opt = e.target.closest('.pay-opt');
      if (opt) gsap.fromTo(opt, { scale: 0.93 }, { scale: 1, duration: 0.28, ease: 'back.out(2.5)' });
    });
  }

  /* ── ADD-TO-CART PULSE ── */
  function initATCPulse() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.atc-btn, #qv-cart-btn');
      if (btn) gsap.fromTo(btn, { scale: 0.88 }, { scale: 1, duration: 0.45, ease: 'elastic.out(1,.5)' });
    });
  }

  /* ── PAY NOW BUTTON PULSE ── */
  function initPayNowPulse() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('button[onclick*="checkout"]');
      if (btn) gsap.fromTo(btn, { scale: 0.93 }, { scale: 1, duration: 0.4, ease: 'elastic.out(1,.5)' });
    });
  }

  /* ── BOTTOM NAV ── */
  function initBottomNav() {
    if (pageReady) return; /* already visible — skip */
    gsap.from('.bottom-nav', { y: 80, opacity: 0, duration: 0.6, delay: 0.3 });
    gsap.from('.bnav-item',  { y: 20, opacity: 0, duration: 0.4, stagger: 0.08, delay: 0.4 });
  }

  /* ── WA FLOAT ── */
  function initWaFloat() {
    var wa = document.querySelector('.wa-float');
    if (!wa) return;
    if (!pageReady) {
      gsap.from('.wa-float', { scale: 0, opacity: 0, duration: 0.5, delay: 0.5, ease: 'back.out(2)' });
    }
    wa.addEventListener('mouseenter', function () { gsap.to(this, { scale: 1.16, duration: 0.2 }); });
    wa.addEventListener('mouseleave', function () { gsap.to(this, { scale: 1,    duration: 0.2 }); });
  }

  /* ── TOAST ENHANCEMENT ── */
  function initToast() {
    var orig = window.showToast;
    if (!orig) return;
    window.showToast = function (msg, type) {
      orig(msg, type);
      var t = document.getElementById('toast');
      if (t) gsap.fromTo(t,
        { y: 30, opacity: 0, scale: 0.88 },
        { y: 0, opacity: 1, scale: 1, duration: 0.32, ease: 'back.out(1.6)' }
      );
    };
  }

  /* ── BROWSE DROPDOWN ── */
  function initBrowse() {
    /* defer so inline shop script (which defines toggleBrowse) runs first */
    setTimeout(function () {
      var orig = window.toggleBrowse;
      if (!orig) return;
      window.toggleBrowse = function () {
        orig();
        var cats = document.getElementById('browse-cats');
        if (cats && cats.classList.contains('open')) {
          gsap.from('.browse-cat', { y: -10, opacity: 0, duration: 0.24, stagger: 0.025 });
        }
      };
    }, 0);
  }

  /* ── INIT ── */
  function init() {
    initHero();
    initCatStrip();
    initFlash();
    initSectionHeads();
    initProductCards();
    initPaySection();
    initHotel();
    initCommunity();
    initFooter();
    initCartDrawer();
    initPayOpts();
    initATCPulse();
    initPayNowPulse();
    initBottomNav();
    initWaFloat();
    initToast();
    initBrowse();
  }

})();
