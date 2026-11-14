// «Цифровой цех» — форма идеи/отзыва на сайте (секция «Идеи и отзывы»).
// Отправка на Cloudflare Worker (LEAD_ENDPOINT из site-config.js) → /api/feedback;
// если endpoint не задан — мягкий фолбэк на Telegram.
(function () {
  'use strict';

  var form = document.getElementById('feedback-form');
  if (!form) return;

  var statusEl = form.querySelector('.lf-status');
  var submitBtn = form.querySelector('.lf-submit');

  function show(text, isError) {
    statusEl.textContent = text;
    statusEl.hidden = false;
    statusEl.classList.toggle('err', !!isError);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
      type: form.elements.type.value || 'other',
      product: form.elements.product.value.trim(),
      name: form.elements.name.value.trim(),
      contact: form.elements.contact.value.trim(),
      message: form.elements.message.value.trim(),
      source: form.getAttribute('data-source') || 'site_feedback',
      website: form.elements.website.value, // honeypot
    };

    if (!data.message) {
      show('Напишите хотя бы пару предложений — без текста нечего записать.', true);
      return;
    }

    if (!window.LEAD_ENDPOINT) {
      show('Форма ещё не подключена — напишите, пожалуйста, напрямую: t.me/cifrovoj_ceh', true);
      return;
    }

    // LEAD_ENDPOINT — базовый URL воркера; форма шлёт на его маршрут /api/feedback
    var endpoint = String(window.LEAD_ENDPOINT || '').replace(/\/+$/, '') + '/api/feedback';

    submitBtn.disabled = true;
    show('Отправляю…', false);

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (res) {
        if (res && res.ok) {
          form.reset();
          submitBtn.disabled = false;
          show('✅ Спасибо! Записал — это уже в работе.', false);
        } else {
          throw new Error((res && res.error) || 'unknown');
        }
      })
      .catch(function (err) {
        submitBtn.disabled = false;
        var why = (err && err.message) ? ' (' + err.message + ')' : '';
        show('Не получилось отправить' + why + '. Напишите напрямую: t.me/cifrovoj_ceh', true);
      });
  });
})();