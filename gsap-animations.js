/* ═══════════════════════════════════════
   GSAP PREMIUM ANIMATIONS
   Irene Household Collections
   Smooth scroll-triggered & interactive
═══════════════════════════════════════ */

(function () {
  'use strict';

  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({ ease: 'power3.out' });

  /* ── LOADER ── */
  function initLoader() {
    var loader = document.getElementById('loader');
    if (!loader) return;
    var tl = gsap.timeline();
    tl.from('#loader img',   { scale: 0.5, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' })
      .from('#loader h2',    { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')
      .from('#loader small', { y: 10, opacity: 0, duration: 0.3 }, '-=0.1')
      .from('.loader-fill',  { scaleX: 0, transformOrigin: 'left center', duration: 1.6, ease: 'power2.inOut' }, '+=0.1');
  }

  /* ── NAV ── */
  function initNav() {
    gsap.from('.top-nav', { y: -70, opacity: 0, duration: 0.6, delay: 0.2 });
    gsap.from('.promo-bar', { y: -40, opacity: 0, duration: 0.5, delay: 0.1 });
  }

  /* ── TRUST STRIP ── */
  function initTrust() {
    if (!document.querySelector('.trust-item-badge')) return;
    gsap.from('.trust-item-badge', { y: 30, opacity: 0, duration: 0.45, stagger: 0.08, delay: 0.6 });
  }

  /* ── HERO ── */
  function initHero() {
    if (!document.querySelector('.hero-banner')) return;
    var tl = gsap.timeline({ delay: 0.9 });
    tl.from('.hero-tag',       { y: 24, opacity: 0, duration: 0.5 })
      .from('.hero-banner h1', { y: 44, opacity: 0, duration: 0.7, ease: 'power4.out' }, '-=0.25')
      .from('.hero-banner p',  { y: 28, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-search',    { y: 20, opacity: 0, duration: 0.4 }, '-=0.2')
      .from('.hero-stat',      { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.15');
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
  function animateGrid(grid) {
    var cards = grid.querySelectorAll('.card');
    if (!cards.length) return;
    gsap.fromTo(cards,
      { y: 42, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.46, stagger: 0.055, ease: 'power3.out',
        scrollTrigger: { trigger: grid, start: 'top 88%' } }
    );
  }

  function initProductCards() {
    document.querySelectorAll('.products-grid').forEach(function (grid) {
      setTimeout(function () { animateGrid(grid); }, 120);
      new MutationObserver(function () {
        var cards = grid.querySelectorAll('.card');
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.42, stagger: 0.05, ease: 'power3.out' }
        );
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }).observe(grid, { childList: true });
    });

    /* card hover lift */
    document.addEventListener('mouseover', function (e) {
      var c = e.target.closest('.card');
      if (c) gsap.to(c, { y: -7, boxShadow: '0 14px 36px rgba(26,61,43,.18)', duration: 0.22 });
    });
    document.addEventListener('mouseout', function (e) {
      var c = e.target.closest('.card');
      if (c) gsap.to(c, { y: 0, boxShadow: '0 2px 10px rgba(0,0,0,.07)', duration: 0.22 });
    });
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
      gsap.from('.drawer-footer', { y: 22, opacity: 0, duration: 0.38, delay: 0.18 });
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
    gsap.from('.bottom-nav', { y: 80, opacity: 0, duration: 0.6, delay: 1 });
    gsap.from('.bnav-item',  { y: 20, opacity: 0, duration: 0.4, stagger: 0.08, delay: 1.1 });
  }

  /* ── WA FLOAT ── */
  function initWaFloat() {
    var wa = document.querySelector('.wa-float');
    if (!wa) return;
    gsap.from('.wa-float', { scale: 0, opacity: 0, duration: 0.5, delay: 1.5, ease: 'back.out(2)' });
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
      if (t) gsap.fromTo(t, { y: 30, opacity: 0, scale: 0.88 }, { y: 0, opacity: 1, scale: 1, duration: 0.32, ease: 'back.out(1.6)' });
    };
  }

  /* ── BROWSE DROPDOWN ── */
  function initBrowse() {
    var orig = window.toggleBrowse;
    if (!orig) return;
    window.toggleBrowse = function () {
      orig();
      var cats = document.getElementById('browse-cats');
      if (cats && cats.classList.contains('open')) {
        gsap.from('.browse-cat', { y: -10, opacity: 0, duration: 0.24, stagger: 0.025 });
      }
    };
  }

  /* ── INIT ── */
  function init() {
    initLoader();
    initNav();
    initTrust();
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
