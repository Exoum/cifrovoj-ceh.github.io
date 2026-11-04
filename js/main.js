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
});