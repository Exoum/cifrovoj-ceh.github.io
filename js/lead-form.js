// «Цифровой цех» — форма заявки на сайте.
// Отправка на Cloudflare Worker (LEAD_ENDPOINT из site-config.js);
// если endpoint не задан — мягкий фолбэк на Telegram.
(function () {
  'use strict';

  var form = document.getElementById('lead-form');
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
      name: form.elements.name.value.trim(),
      contact: form.elements.contact.value.trim(),
      task: form.elements.task.value,
      message: form.elements.message.value.trim(),
      source: form.getAttribute('data-source') || 'site_index',
      website: form.elements.website.value, // honeypot
    };

    if (!data.name || !data.contact) {
      show('Заполните имя и контакт — без них не ответить.', true);
      return;
    }

    if (!window.LEAD_ENDPOINT) {
      show('Форма ещё не подключена — напишите, пожалуйста, напрямую: t.me/cifrovoj_ceh', true);
      return;
    }

    submitBtn.disabled = true;
    show('Отправляю…', false);

    fetch(window.LEAD_ENDPOINT, {
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
          show('✅ Заявка отправлена! Отвечу в течение дня.', false);
        } else {
          throw new Error((res && res.error) || 'unknown');
        }
      })
      .catch(function () {
        submitBtn.disabled = false;
        show('Не получилось отправить. Напишите напрямую: t.me/cifrovoj_ceh', true);
      });
  });
})();
