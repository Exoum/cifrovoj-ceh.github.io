// «Цифровой цех» — предпросмотр товаров магазина.
// Клик по карточке (кроме кнопки «Купить») открывает модалку с примерами
// «что внутри» + цены + кнопка в бота. Превью лежат в assets/img/shop/.
(function () {
  'use strict';

  var A = 'assets/img/shop/';

  function series(dir, names) {
    return names.map(function (n) { return A + dir + '/' + n; });
  }

  var P = {
    bundle: {
      tag: 'Выгоднее, чем по отдельности',
      title: 'Весь набор — 10 продуктов одним архивом',
      bullets: [
        'Все 10 шаблонов одним ZIP-архивом — от презентации до фонов для сторис',
        'START_HERE.txt: карта набора — с чего начать и что где лежит',
        'Паспорт шаблона: ваши контакты и логотип подставляются во все файлы',
        'Экономия 1 910 ₽ против покупки по отдельности'
      ],
      price: '3 990 ₽', old: '5 900 ₽', sub: 'подписчикам — 2 990 ₽', bot: 'shop_bundle',
      mosaic: [
        [A + 'pres/slide_01.jpg', 'Презентация', 'pres'],
        [A + 'kp/offer_01.jpg', 'КП', 'kp'],
        [A + 'resume/resume_01.jpg', 'Резюме', 'resume'],
        [A + 'price/price_01.jpg', 'Прайс-лист', 'price'],
        [A + 'card/card_01.jpg', 'Визитка', 'card'],
        [A + 'social/post_01.jpg', 'Соцсети', 'social'],
        [A + 'checklist/check_01.jpg', 'Чек-лист', 'checklist'],
        [A + 'invoice/invoice_01.jpg', 'Счёт', 'invoice'],
        [A + 'scripts/scripts_01.jpg', 'Скрипты', 'scripts'],
        [A + 'bg/bg_03.jpg', 'Фоны', 'bg']
      ]
    },
    pres: {
      tag: '12 слайдов · 3 палитры · PDF',
      title: 'Шаблон бизнес-презентации',
      bullets: [
        '12 готовых слайдов: титул, проблема, решение, цифры, кейсы, контакты',
        '3 палитры — меняются одной строкой в исходнике',
        'Правите текст в исходнике, а не в слоях — PDF собирается одной печатью',
        'Паспорт шаблона подставит ваши контакты во весь набор'
      ],
      price: '990 ₽', sub: 'подписчикам 690 ₽', bot: 'shop_pres_tpl',
      images: series('pres', ['slide_01.jpg', 'slide_02.jpg', 'slide_03.jpg', 'slide_04.jpg', 'slide_05.jpg', 'slide_06.jpg', 'slide_07.jpg', 'slide_08.jpg', 'slide_09.jpg', 'slide_10.jpg', 'slide_11.jpg', 'slide_12.jpg'])
    },
    kp: {
      tag: '2 стр. А4 · PDF',
      title: 'Коммерческое предложение',
      bullets: [
        'Два листа А4: задача клиента → решение → сроки и деньги',
        'Поля с подсказками — заполняется без дизайнера',
        '3 палитры под ваш бренд',
        'Выгрузка в PDF для отправки клиенту'
      ],
      price: '790 ₽', sub: 'подписчикам 550 ₽', bot: 'shop_kp',
      images: [A + 'kp/offer_01.jpg', A + 'kp/offer_02.jpg']
    },
    resume: {
      tag: 'А4 · 2 документа',
      title: 'Резюме + сопроводительное',
      bullets: [
        'Резюме и сопроводительное письмо в одном визуальном стиле',
        'Блоки под опыт, достижения и навыки — меняете только текст',
        'Аккуратная типографика, которая не разваливается в PDF',
        'Готово к отклику: PDF из браузера за пару минут'
      ],
      price: '590 ₽', sub: 'подписчикам 390 ₽', bot: 'shop_resume',
      images: [A + 'resume/resume_01.jpg', A + 'resume/resume_02.jpg']
    },
    price: {
      tag: 'А4 + квадрат 1080×1080',
      title: 'Прайс-лист',
      bullets: [
        'Список услуг и таблица с ценами — выбираете нужный вид',
        'Блок с акциями и спецпредложениями',
        'Одни данные — два формата: А4 для печати и квадрат для соцсетей',
        'PDF и PNG собираются без редакторов'
      ],
      price: '490 ₽', sub: 'подписчикам 340 ₽', bot: 'shop_price',
      images: [A + 'price/price_01.jpg', A + 'price/square_01.jpg']
    },
    card: {
      tag: '90×55 мм · PDF',
      title: 'Визитка с QR-генератором',
      bullets: [
        'Две стороны 90×55 мм: лицо и оборот',
        'QR-код генерируется прямо в шаблоне — вставьте свою ссылку',
        'PDF с вылетами — файл сразу принимают в типографии',
        'Цвет и шрифт под ваш стиль'
      ],
      price: '390 ₽', sub: 'подписчикам 250 ₽', bot: 'shop_card',
      images: [A + 'card/card_01.jpg', A + 'card/card_02.jpg']
    },
    social: {
      tag: '6 макетов · 1080×1350',
      title: 'Карточки для соцсетей',
      bullets: [
        '6 макетов под формат ленты: анонс, советы, цитата, отзыв, цифры, призыв',
        '1080×1350 — смотрятся крупно и не режутся лентой',
        'Меняете текст и фото — готовый PNG из браузера',
        'Единый стиль всей ленты без дизайнера'
      ],
      price: '690 ₽', sub: 'подписчикам 490 ₽', bot: 'shop_social',
      images: series('social', ['post_01.jpg', 'post_02.jpg', 'post_03.jpg', 'post_04.jpg', 'post_05.jpg', 'post_06.jpg'])
    },
    checklist: {
      tag: '4 стр. А4 · PDF',
      title: 'Чек-лист-гайд (лид-магнит)',
      bullets: [
        'Каркас лид-магнита на 4 страницы: структура уже собрана',
        'Место под ваш текст, чек-боксы и логотип',
        'Раздавайте за подписку или как подарок клиенту',
        'PDF собирается одной печатью из браузера'
      ],
      price: '490 ₽', sub: 'подписчикам 340 ₽', bot: 'shop_checklist',
      images: series('checklist', ['check_01.jpg', 'check_02.jpg', 'check_03.jpg', 'check_04.jpg'])
    },
    invoice: {
      tag: 'Автоподсчёт · PDF',
      title: 'Счёт и акт для самозанятого',
      bullets: [
        'Счёт и акт в одном файле — вкладки переключаются',
        'Суммы строк считаются сами, итог и НПД 6% подставляются автоматически',
        'Ошибки в цифрах исключены — считает формула',
        'Готовый PDF — одной печатью'
      ],
      price: '490 ₽', sub: 'подписчикам 340 ₽', bot: 'shop_invoice',
      images: [A + 'invoice/invoice_01.jpg']
    },
    scripts: {
      tag: '50 сообщений · 6 разделов',
      title: 'Скрипты переписки с клиентом',
      bullets: [
        '50 готовых сообщений в 6 разделах: бриф, деньги, сроки, правки',
        'Отдельные скрипты на «клиент пропал» и корректное завершение',
        'Копируете сообщение и подставляете имя клиента',
        'Снимает страх «а как написать про цену»'
      ],
      price: '590 ₽', sub: 'подписчикам 390 ₽', bot: 'shop_scripts',
      images: series('scripts', ['scripts_01.jpg', 'scripts_02.jpg', 'scripts_03.jpg', 'scripts_04.jpg', 'scripts_05.jpg', 'scripts_06.jpg'])
    },
    bg: {
      tag: '30 фонов · 1080×1920',
      title: 'Фоны для сторис',
      bullets: [
        '30 фонов 1080×1920 под вертикальные сторис',
        '10 палитр × 3 варианта: градиент, арка, пятна',
        'Готовые PNG — вставляете текст поверх в любом редакторе',
        'Единая подача сторис на месяц вперёд'
      ],
      price: '390 ₽', sub: 'подписчикам 250 ₽', bot: 'shop_bg',
      images: [A + 'bg/bg_01.jpg', A + 'bg/bg_02.jpg', A + 'bg/bg_03.jpg', A + 'bg/bg_12.jpg']
    }
  };

  var overlay = document.getElementById('pv-overlay');
  if (!overlay) return;

  var el = {
    stage: overlay.querySelector('.pv-stage'),
    gallery: overlay.querySelector('.pv-gallery'),
    img: overlay.querySelector('.pv-img'),
    count: overlay.querySelector('.pv-count'),
    thumbs: overlay.querySelector('.pv-thumbs'),
    tag: overlay.querySelector('.pv-tag'),
    title: overlay.querySelector('.pv-title'),
    bullets: overlay.querySelector('.pv-bullets'),
    price: overlay.querySelector('.pv-price'),
    sub: overlay.querySelector('.pv-sub'),
    buy: overlay.querySelector('.pv-buy'),
    bundleLink: overlay.querySelector('.pv-bundle-link'),
    close: overlay.querySelector('.pv-close'),
    prev: overlay.querySelector('.pv-prev'),
    next: overlay.querySelector('.pv-next')
  };

  var current = null, idx = 0, lastFocus = null;

  function botUrl(payload) {
    var bot = window.BOT_USERNAME;
    return bot ? 'https://t.me/' + bot + '?start=' + payload : 'https://t.me/cifrovoj_ceh';
  }

  function show(i) {
    if (!current || !current.images) return;
    var n = current.images.length;
    idx = (i + n) % n;
    el.img.src = current.images[idx];
    el.img.alt = current.title + ' — пример ' + (idx + 1);
    el.count.textContent = (idx + 1) + ' / ' + n;
    Array.prototype.forEach.call(el.thumbs.querySelectorAll('.pv-thumb'), function (t, j) {
      t.classList.toggle('on', j === idx);
    });
  }

  function buildGallery(p) {
    var oldGrid = el.gallery.querySelector('.pv-mosaic');
    if (oldGrid) oldGrid.remove();
    el.thumbs.innerHTML = '';
    if (p.mosaic) {
      el.stage.style.display = 'none';
      el.thumbs.style.display = 'none';
      el.prev.style.display = 'none';
      el.next.style.display = 'none';
      var grid = document.createElement('div');
      grid.className = 'pv-mosaic';
      p.mosaic.forEach(function (m) {
        var t = document.createElement('button');
        t.type = 'button';
        t.className = 'pv-tile';
        t.innerHTML = '<img loading="lazy" src="' + m[0] + '" alt=""><span>' + m[1] + '</span>';
        t.addEventListener('click', function () { open(m[2]); });
        grid.appendChild(t);
      });
      el.gallery.insertBefore(grid, el.thumbs);
    } else {
      el.stage.style.display = '';
      el.thumbs.style.display = '';
      el.prev.style.display = '';
      el.next.style.display = '';
      p.images.forEach(function (src, j) {
        var t = document.createElement('img');
        t.className = 'pv-thumb';
        t.loading = 'lazy';
        t.src = src;
        t.alt = '';
        t.addEventListener('click', function () { show(j); });
        el.thumbs.appendChild(t);
      });
    }
  }

  function open(id) {
    var p = P[id];
    if (!p) return;
    current = p;
    buildGallery(p);
    el.tag.textContent = p.tag;
    el.title.textContent = p.title;
    el.bullets.innerHTML = '';
    p.bullets.forEach(function (b) {
      var li = document.createElement('li');
      li.textContent = b;
      el.bullets.appendChild(li);
    });
    el.price.innerHTML = p.price + (p.old ? '<s>' + p.old + '</s>' : '');
    el.sub.textContent = p.sub || '';
    el.sub.style.display = p.sub ? '' : 'none';
    el.buy.href = botUrl(p.bot);
    el.buy.setAttribute('data-bot', p.bot);
    el.bundleLink.style.display = id === 'bundle' ? 'none' : '';
    lastFocus = document.activeElement;
    overlay.classList.add('on');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pv-lock');
    if (p.images) show(0);
    if (typeof window.cehGoal === 'function') window.cehGoal('preview_open', { product: p.bot });
    el.close.focus();
  }

  function closePv() {
    overlay.classList.remove('on');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pv-lock');
    el.img.src = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // Карточки находятся по кнопке «Купить» (data-bot="shop_*") —
  // сам index.html остаётся без дублирующих атрибутов.
  var BOT2ID = {
    shop_bundle: 'bundle', shop_pres_tpl: 'pres', shop_kp: 'kp',
    shop_resume: 'resume', shop_price: 'price', shop_card: 'card',
    shop_social: 'social', shop_checklist: 'checklist', shop_invoice: 'invoice',
    shop_scripts: 'scripts', shop_bg: 'bg'
  };

  document.querySelectorAll('a[data-bot]').forEach(function (a) {
    var id = BOT2ID[a.getAttribute('data-bot')];
    if (!id) return;
    var card = a.closest('.shop-item') || a.closest('.shop-bundle');
    if (!card) return;
    card.classList.add('pv-ready');
    var info = card.querySelector('.shop-bundle-info') || card.querySelector('div');
    if (info && !info.querySelector('.pv-hint')) {
      var hint = document.createElement('span');
      hint.className = 'pv-hint';
      hint.textContent = 'Смотреть пример';
      info.appendChild(hint);
    }
    card.addEventListener('click', function (ev) {
      if (ev.target.closest('a')) return; // кнопка «Купить» работает как раньше
      open(id);
    });
  });

  el.close.addEventListener('click', closePv);
  overlay.addEventListener('click', function (ev) { if (ev.target === overlay) closePv(); });
  el.prev.addEventListener('click', function () { show(idx - 1); });
  el.next.addEventListener('click', function () { show(idx + 1); });
  el.bundleLink.addEventListener('click', function () { open('bundle'); });

  document.addEventListener('keydown', function (ev) {
    if (!overlay.classList.contains('on')) return;
    if (ev.key === 'Escape') closePv();
    else if (ev.key === 'ArrowLeft') show(idx - 1);
    else if (ev.key === 'ArrowRight') show(idx + 1);
  });

  // Deep-link: index.html#pv-pres открывает превью сразу (удобно шарить ссылку).
  var m = /^#pv-([a-z]+)/.exec(location.hash);
  if (m && P[m[1]]) open(m[1]);
})();