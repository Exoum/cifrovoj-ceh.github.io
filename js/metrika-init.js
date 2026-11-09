// «Цифровой цех» — Яндекс.Метрика: счётчик + цели.
// Номер счётчика задаётся в js/site-config.js (METRIKA_ID).
// Пока METRIKA_ID пуст — скрипт ничего не подключает и не ломает сайт.
(function () {
  'use strict';
  var id = (typeof METRIKA_ID === 'undefined' ? '' : String(METRIKA_ID)).trim();

  function goal(name, params) {
    if (!/^\d+$/.test(id) || typeof window.ym !== 'function') return;
    try { window.ym(Number(id), 'reachGoal', name, params || {}); } catch (e) { /* no-op */ }
  }
  window.cehGoal = goal;

  if (/^\d+$/.test(id)) {
    // Официальный сниппет Метрики, собранный программно.
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      k = e.createElement(t); a = e.getElementsByTagName(t)[0];
      k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
    window.ym(Number(id), 'init', {
      clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true
    });
    var ns = document.createElement('noscript');
    ns.innerHTML = '<div><img src="https://mc.yandex.ru/watch/' + id +
      '" style="position:absolute;left:-9999px" alt=""></div>';
    document.body.insertBefore(ns, document.body.firstChild);
  }

  // Цель: клик по любой кнопке с data-bot («Купить/Написать в Telegram»).
  document.addEventListener('click', function (ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest('[data-bot]') : null;
    if (el) goal('buy_click', { product: el.getAttribute('data-bot'), page: location.pathname });
  }, true);

  // Цель: отправка формы заявки.
  document.addEventListener('submit', function (ev) {
    var f = ev.target;
    if (f && (f.id === 'lead-form' || f.hasAttribute('data-lead'))) goal('lead_form');
  }, true);
})();
