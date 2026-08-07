/* =========================================================
   AI Career Academy — Deck controller
   - keyboard / click / swipe navigation
   - responsive stage scaling (fixed 1280x720 canvas)
   - overview grid, progress bar, hash sync
   ========================================================= */

(function () {
  'use strict';

  var STAGE_W = 1280;
  var STAGE_H = 720;

  var stage    = document.getElementById('stage');
  var slides   = Array.prototype.slice.call(stage.querySelectorAll('.slide'));
  var progress = document.getElementById('progress');
  var curEl    = document.getElementById('cur');
  var totalEl  = document.getElementById('total');
  var btnPrev  = document.getElementById('btnPrev');
  var btnNext  = document.getElementById('btnNext');
  var btnFull  = document.getElementById('btnFull');
  var btnOv    = document.getElementById('btnOverview');
  var overview = document.getElementById('overview');
  var ovGrid   = document.getElementById('ovGrid');
  var hint     = document.getElementById('hint');

  var index = 0;
  var total = slides.length;

  totalEl.textContent = total;

  /* ---------- scaling ---------- */

  function fit() {
    var pad = 0;
    var vw = window.innerWidth - pad;
    var vh = window.innerHeight - pad;
    var scale = Math.min(vw / STAGE_W, vh / STAGE_H);
    stage.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  }

  /* ---------- navigation ---------- */

  function show(i, push) {
    if (i < 0) i = 0;
    if (i > total - 1) i = total - 1;
    index = i;

    slides.forEach(function (s, n) {
      s.classList.toggle('is-active', n === i);
      s.setAttribute('aria-hidden', n === i ? 'false' : 'true');
    });

    curEl.textContent = i + 1;
    progress.style.width = ((i + 1) / total * 100) + '%';
    btnPrev.disabled = (i === 0);
    btnNext.disabled = (i === total - 1);

    Array.prototype.forEach.call(ovGrid.children, function (el, n) {
      el.classList.toggle('is-current', n === i);
    });

    if (push !== false) {
      var h = '#' + (i + 1);
      if (location.hash !== h) history.replaceState(null, '', h);
    }
  }

  function next() { if (index < total - 1) show(index + 1); }
  function prev() { if (index > 0) show(index - 1); }

  /* ---------- overview ---------- */

  slides.forEach(function (s, n) {
    var item = document.createElement('div');
    item.className = 'ov-item';
    item.innerHTML =
      '<div class="i">' + String(n + 1).padStart(2, '0') + '</div>' +
      '<div class="t"></div>';
    item.querySelector('.t').textContent = s.dataset.title || ('Slide ' + (n + 1));
    item.addEventListener('click', function () {
      closeOverview();
      show(n);
    });
    ovGrid.appendChild(item);
  });

  function openOverview()  { overview.classList.add('is-open'); }
  function closeOverview() { overview.classList.remove('is-open'); }
  function toggleOverview() {
    if (overview.classList.contains('is-open')) closeOverview();
    else openOverview();
  }

  /* ---------- fullscreen ---------- */

  function toggleFullscreen() {
    var d = document;
    if (!d.fullscreenElement && !d.webkitFullscreenElement) {
      var el = d.documentElement;
      (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
    } else {
      (d.exitFullscreen || d.webkitExitFullscreen).call(d);
    }
  }

  /* ---------- events ---------- */

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);
  btnFull.addEventListener('click', toggleFullscreen);
  btnOv.addEventListener('click', toggleOverview);

  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;

    if (overview.classList.contains('is-open')) {
      if (k === 'Escape' || k === 'o' || k === 'O') { e.preventDefault(); closeOverview(); }
      return;
    }

    switch (k) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); show(0); break;
      case 'End':
        e.preventDefault(); show(total - 1); break;
      case 'o': case 'O':
        e.preventDefault(); toggleOverview(); break;
      case 'f': case 'F':
        e.preventDefault(); toggleFullscreen(); break;
      case 'p': case 'P':
        e.preventDefault(); window.print(); break;
      case 'Escape':
        closeOverview(); break;
    }
  });

  /* click on stage: right half -> next, left edge -> prev */
  stage.addEventListener('click', function (e) {
    if (e.target.closest('a, button')) return;
    var rect = stage.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width;
    if (x > 0.5) next(); else prev();
  });

  /* swipe */
  var tx = 0, ty = 0;
  document.addEventListener('touchstart', function (e) {
    tx = e.changedTouches[0].clientX;
    ty = e.changedTouches[0].clientY;
  }, { passive: true });
  document.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - tx;
    var dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev();
    }
  }, { passive: true });

  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);

  /* ---------- auto-hide chrome ---------- */

  var chrome = document.querySelector('.chrome');
  var idleTimer = null;

  function wake() {
    chrome.classList.remove('is-idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function () {
      if (!overview.classList.contains('is-open')) chrome.classList.add('is-idle');
    }, 2800);
  }

  ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach(function (ev) {
    document.addEventListener(ev, wake, { passive: true });
  });

  /* ---------- init ---------- */

  fit();
  wake();

  var start = parseInt((location.hash || '').replace('#', ''), 10);
  show(isNaN(start) ? 0 : start - 1, false);

  setTimeout(function () { hint.classList.add('is-hidden'); }, 6000);
})();
