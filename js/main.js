// «Цифровой цех» — личный сайт.
// Плавное появление секций при скролле + текущий год в футере.
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('on'); });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Лайтбокс: клик по картинке галереи — просмотр во весь экран
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img');
    var open = function (src, alt) {
      lbImg.src = src; lbImg.alt = alt || '';
      lb.classList.add('on'); document.body.classList.add('lb-lock');
    };
    var close = function () {
      lb.classList.remove('on'); document.body.classList.remove('lb-lock');
      lbImg.src = '';
    };
    document.querySelectorAll('.gallery-item img').forEach(function (img) {
      img.parentElement.addEventListener('click', function () { open(img.currentSrc || img.src, img.alt); });
    });
    lb.addEventListener('click', close);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
});