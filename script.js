/* ═══════════════════════════════════════════════════════════════
   template-tattoo-002 — Ink Atelier — script.js
   creative-bold-dark scroll · multi-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/tattoo-002/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // creative-bold-dark — HARD

// ── Image fallback ────────────────────────────────────────────
window.__imgFallback = function (img, label) {
  var w = img.naturalWidth  || 800;
  var h = img.naturalHeight || 600;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h
    + '" viewBox="0 0 ' + w + ' ' + h + '">'
    + '<defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0%" stop-color="#C9A227" stop-opacity="0.12"/>'
    + '<stop offset="100%" stop-color="#6B4423" stop-opacity="0.08"/>'
    + '</linearGradient></defs>'
    + '<rect width="100%" height="100%" fill="#1A1A1A"/>'
    + '<rect width="100%" height="100%" fill="url(#fg)"/>'
    + '<text x="50%" y="50%" font-family="\'Bodoni Moda\',Georgia,serif" font-size="17"'
    + ' fill="#5C5C5C" text-anchor="middle" dominant-baseline="middle">'
    + (label || 'imagem em breve')
    + '</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  img.onerror = null;
};

// ── Phosphor Light icons — SVG inline ────────────────────────
var PHOSPHOR_ICONS = {

  // WhatsApp Logo
  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,81.06l11.48,22.94L101,118.37a8,8,0,0,0-.73,7.65,56.53,56.53,0,0,0,30.15,30.15,8,8,0,0,0,7.65-.73l14.37-9.08,22.94,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a88,88,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216l12.47-37.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z"/></svg>',

  // Instagram Logo
  'InstagramLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="40"/><circle cx="180" cy="76" r="6" fill="currentColor" stroke="none"/></svg>',

  // Arrow Right
  'ArrowRight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>',

  // Arrow Up Right
  'ArrowUpRight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="56" y1="200" x2="200" y2="56"/><polyline points="88,56 200,56 200,168"/></svg>',

  // Map Pin
  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M128,24A72,72,0,1,0,200,96C200,136,128,232,128,232S56,136,56,96A72,72,0,0,1,128,24Z"/><circle cx="128" cy="96" r="24"/></svg>',

  // Clock
  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  // Phone
  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M159.38,185.79a96,96,0,0,1-89.17-89.17,8,8,0,0,1,2.19-6.4L87.6,75a8,8,0,0,1,11,.56l24,28a8,8,0,0,1-.44,11.13l-16.31,15.69a80.33,80.33,0,0,0,39.75,39.75l15.69-16.31a8,8,0,0,1,11.13-.44l28,24a8,8,0,0,1,.56,11L185.79,177.19A8,8,0,0,1,159.38,185.79Z"/></svg>',

  // Calendar Blank
  'CalendarBlank': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="32" y="48" width="192" height="176" rx="8"/><line x1="32" y1="96" x2="224" y2="96"/><line x1="88" y1="24" x2="88" y2="72"/><line x1="168" y1="24" x2="168" y2="72"/></svg>',

  // Info
  'Info': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="128" cy="128" r="96"/><line x1="128" y1="120" x2="128" y2="176"/><circle cx="128" cy="88" r="8" fill="currentColor" stroke="none"/></svg>',

  // Plus (FAQ toggle)
  'Plus': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><line x1="128" y1="40" x2="128" y2="216"/></svg>',

  // Check Circle
  'CheckCircle': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="88,136 112,160 168,104"/><circle cx="128" cy="128" r="96"/></svg>'

};

(function () {
  'use strict';

  // ── Inject Phosphor icons ──────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ────────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ────────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 48);
    }, { passive: true });
  }

  // ── Mobile nav toggle ──────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── Hero above-fold fade-up ────────────────────────────────
  setTimeout(function () {
    document.querySelectorAll('.hero .fade-up, .page-header .fade-up').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 80);

  // ── IntersectionObserver — Fade Up & Stagger ───────────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      if (!el.closest('.hero') && !el.closest('.page-header')) {
        animObserver.observe(el);
      }
    });
  } else {
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Portfolio filter ───────────────────────────────────────
  var filterBtns    = document.querySelectorAll('.filter-btn');
  var portfolioItems = document.querySelectorAll('.portfolio-item[data-style]');

  if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var style = btn.getAttribute('data-filter');
        portfolioItems.forEach(function (item) {
          if (style === 'all' || item.getAttribute('data-style') === style) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // ── FAQ accordion ──────────────────────────────────────────
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        var q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Scroll animation — canvas (cover mode) ─────────────────
  // Multi-page guard: only run on pages with the canvas
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx          = canvas.getContext('2d');
  var images       = [];
  var loaded       = 0;
  var currentFrame = 0;
  var pinEl        = section.querySelector('.scroll-anim-pin');
  var DPR          = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var w = pinEl.clientWidth;
    var h = pinEl.clientHeight;
    canvas.width  = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function renderFrame(img) {
    var cw = pinEl.clientWidth;
    var ch = pinEl.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, total > 0 ? scrolled / total : 0);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      var num = String(idx + 1);
      while (num.length < FRAME_PAD) num = '0' + num;
      img.src = FRAME_PATH + FRAME_PREFIX + num + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    setupCanvas();
    drawFrame(currentFrame);
  }, { passive: true });
  setupCanvas();

})();
