/* ═══════════════════════════════════════
   GSAP PREMIUM ANIMATIONS
   Irene Household Collections
═══════════════════════════════════════ */

(function () {
  'use strict';

  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: 'power3.out' });

  /* ── HERO ──
     NOTE: Nav, trust strip, and loader are NOT animated here.
     - Loader is managed by script.js (window.onload adds .hide class).
     - Animating them with .from() causes FOIC (flash of invisible content).
     - Hero is safe because the loader covers it during the delay window.
  */
  function initHero() {
    if (!document.querySelector('.hero-banner')) return;
    /* Wait for loader to be hidden before starting hero animations.
       script.js fires window.onload which adds .hide to #loader.
       We hook into that same event so our animations start in sync. */
    window.addEventListener('load', function () {
      var tl = gsap.timeline({ delay: 0.15 });
      tl.from('.hero-tag',       { y: 20, opacity: 0, duration: 0.5 })
        .from('.hero-banner h1', { y: 36, opacity: 0, duration: 0.65, ease: 'power4.out' }, '-=0.2')
        .from('.hero-banner p',  { y: 22, opacity: 0, duration: 0.45 }, '-=0.25')
        .from('.hero-search',    { y: 16, opacity: 0, duration: 0.4 }, '-=0.2')
        .from('.hero-stat',      { y: 16, opacity: 0, duration: 0.35, stagger: 0.09 }, '-=0.15');
    });
  }

  /* ── CATEGORY STRIP ── */
  function initCatStrip() {
    if (!document.querySelector('.cat-strip-item')) return;
    gsap.from('.cat-strip-item', {
      scrollTrigger: { trigger: '.cat-strip-wrap', start: 'top 92%' },
      x: -20, opacity: 0, duration: 0.35, stagger: 0.04
    });
  }

  /* ── FLASH BANNER ── */
  function initFlash() {
    if (!document.querySelector('.flash-banner')) return;
    gsap.from('.flash-banner', {
      scrollTrigger: { trigger: '.flash-banner', start: 'top 90%' },
      scale: 0.95, opacity: 0, duration: 0.45, ease: 'back.out(1.2)'
    });
  }

  /* ── SECTION HEADS ── */
  function initSectionHeads() {
    document.querySelectorAll('.section-head, .sec-label, .sec-title, .sec-sub').forEach(function (el) {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        y: 20, opacity: 0, duration: 0.45
      });
    });
  }

  /* ── PRODUCT CARDS ──
     Uses MutationObserver only — no setTimeout duplicate.
     script.js calls applyFilters() / renderShop() / buildCard() which sets
     grid.innerHTML; the observer fires once and animates the cards in.
  */
  function initProductCards() {
    document.querySelectorAll('.products-grid').forEach(function (grid) {
      var firstRun = true;
      new MutationObserver(function () {
        var cards = grid.querySelectorAll('.card');
        if (!cards.length) return;
        /* Kill any existing tweens on these cards to prevent conflicts */
        gsap.killTweensOf(cards);
        gsap.fromTo(cards,
          { y: 36, opacity: 0 },
          { y: 0, opacity: 1, duration: firstRun ? 0.5 : 0.38, stagger: firstRun ? 0.055 : 0.04, ease: 'power3.out',
            clearProps: 'transform,opacity' }
        );
        firstRun = false;
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }).observe(grid, { childList: true });
    });

    /* Card hover lift — desktop only */
    if (window.matchMedia('(hover: hover)').matches) {
      document.addEventListener('mouseover', function (e) {
        var c = e.target.closest('.card');
        if (c) gsap.to(c, { y: -6, boxShadow: '0 12px 32px rgba(26,61,43,.16)', duration: 0.2 });
      });
      document.addEventListener('mouseout', function (e) {
        var c = e.target.closest('.card');
        if (c) gsap.to(c, { y: 0, boxShadow: '0 2px 8px rgba(0,0,0,.07)', duration: 0.2 });
      });
    }
  }

  /* ── PAYMENT SECTION ── */
  function initPaySection() {
    if (!document.querySelector('.pay-card')) return;
    gsap.from('.pay-card', {
      scrollTrigger: { trigger: '#payment', start: 'top 82%' },
      y: 44, opacity: 0, duration: 0.55, stagger: 0.14
    });
    gsap.from('.pay-step', {
      scrollTrigger: { trigger: '.pay-card', start: 'top 80%' },
      x: -18, opacity: 0, duration: 0.36, stagger: 0.08
    });
  }

  /* ── HOTEL SECTION ── */
  function initHotel() {
    if (!document.querySelector('.hotel-section')) return;
    gsap.from('.hotel-section h2', {
      scrollTrigger: { trigger: '.hotel-section', start: 'top 82%' },
      x: -36, opacity: 0, duration: 0.55
    });
    gsap.from('.hotel-badge', {
      scrollTrigger: { trigger: '.hotel-section', start: 'top 78%' },
      y: 18, opacity: 0, duration: 0.38, stagger: 0.07
    });
  }

  /* ── COMMUNITY ── */
  function initCommunity() {
    if (!document.querySelector('.community-section')) return;
    gsap.from('.comm-card', {
      scrollTrigger: { trigger: '.community-section', start: 'top 82%' },
      y: 36, opacity: 0, duration: 0.48, stagger: 0.11, ease: 'back.out(1.2)'
    });
  }

  /* ── FOOTER ── */
  function initFooter() {
    gsap.from('footer .footer-col', {
      scrollTrigger: { trigger: 'footer', start: 'top 88%' },
      y: 24, opacity: 0, duration: 0.38, stagger: 0.09
    });
  }

  /* ── CART DRAWER ── */
  function initCartDrawer() {
    var origOpen = window.openCart;
    if (!origOpen) return;
    window.openCart = function () {
      origOpen();
      gsap.from('#cart-items .cart-item', { x: 28, opacity: 0, duration: 0.3, stagger: 0.065, delay: 0.1 });
      gsap.from('.drawer-footer',          { y: 20, opacity: 0, duration: 0.36, delay: 0.16 });
    };
  }

  /* ── PAY OPT CLICK BOUNCE ── */
  function initPayOpts() {
    document.addEventListener('click', function (e) {
      var opt = e.target.closest('.pay-opt');
      if (opt) gsap.fromTo(opt, { scale: 0.93 }, { scale: 1, duration: 0.26, ease: 'back.out(2.5)' });
    });
  }

  /* ── ADD-TO-CART & PAY NOW PULSE ── */
  function initButtonPulse() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.atc-btn, #qv-cart-btn, button[onclick*="checkout"]');
      if (btn) gsap.fromTo(btn, { scale: 0.9 }, { scale: 1, duration: 0.42, ease: 'elastic.out(1,.5)' });
    });
  }

  /* ── WA FLOAT ── */
  function initWaFloat() {
    var wa = document.querySelector('.wa-float');
    if (!wa) return;
    /* Slide in after loader is gone */
    window.addEventListener('load', function () {
      gsap.from('.wa-float', { scale: 0, opacity: 0, duration: 0.45, delay: 0.5, ease: 'back.out(2)' });
    });
    if (window.matchMedia('(hover: hover)').matches) {
      wa.addEventListener('mouseenter', function () { gsap.to(this, { scale: 1.15, duration: 0.18 }); });
      wa.addEventListener('mouseleave', function () { gsap.to(this, { scale: 1,    duration: 0.18 }); });
    }
  }

  /* ── TOAST ENHANCEMENT ── */
  function initToast() {
    var orig = window.showToast;
    if (!orig) return;
    window.showToast = function (msg, type) {
      orig(msg, type);
      var t = document.getElementById('toast');
      if (t) gsap.fromTo(t,
        { y: 24, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.5)' }
      );
    };
  }

  /* ── BROWSE DROPDOWN (shop page) ──
     toggleBrowse is defined in shop.html’s inline script which runs AFTER
     gsap-animations.js. We defer the wrap to avoid reading undefined.
  */
  function initBrowse() {
    /* Poll once for toggleBrowse since it’s defined in the inline script below */
    setTimeout(function () {
      var orig = window.toggleBrowse;
      if (!orig) return;
      window.toggleBrowse = function () {
        orig();
        var cats = document.getElementById('browse-cats');
        if (cats && cats.classList.contains('open')) {
          gsap.from('.browse-cat', { y: -8, opacity: 0, duration: 0.22, stagger: 0.022 });
        }
      };
    }, 0);
  }

  /* ── INIT ── */
  function init() {
    /* scroll-safe animations */
    initCatStrip();
    initFlash();
    initSectionHeads();
    initProductCards();
    initPaySection();
    initHotel();
    initCommunity();
    initFooter();
    /* interaction */
    initCartDrawer();
    initPayOpts();
    initButtonPulse();
    initToast();
    /* above-fold — deferred until window.load */
    initHero();
    initWaFloat();
    /* shop-page browse dropdown */
    initBrowse();
  }

  /* Run after DOM is ready (scripts are at bottom of body, so DOM is already parsed) */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
