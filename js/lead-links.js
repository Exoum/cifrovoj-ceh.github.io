// «Цифровой цех» — умные кнопки Telegram с атрибуцией источника.
// Ссылки с атрибутом data-bot="<payload>" переписываются на
// https://t.me/<BOT_USERNAME>?start=<payload> (см. site-config.js).
// Пока BOT_USERNAME пуст — остаётся ссылка на канал (оригинальный href).
(function () {
  'use strict';

  var bot = window.BOT_USERNAME;
  if (!bot) return;

  document.querySelectorAll('a[data-bot]').forEach(function (a) {
    var payload = (a.getAttribute('data-bot') || '').replace(/[^a-z0-9_]/gi, '');
    if (!payload) return;
    a.href = 'https://t.me/' + bot + '?start=' + payload;
  });
})();
