// «Цифровой цех» — настройки интеграции сбора заявок.
// Заполнить один раз после создания бота и деплоя воркера.

// 1. Username бота-приёмной (создать у @BotFather), без @.
//    Пусто — кнопки ведут в канал @cifrovoj_ceh (как раньше).
var BOT_USERNAME = 'cifrovoj_ceh_bot';

// 2. URL Cloudflare Worker (см. worker/README.md), например:
//    'https://cifrovoj-ceh-leads.xxx.workers.dev'
//    Пусто — форма покажет подсказку «напишите в Telegram» вместо отправки.
var LEAD_ENDPOINT = 'https://cifrovoj-ceh-leads.cifrovoj-ceh-leads.workers.dev';

// 3. Яндекс.Метрика: номер счётчика (metrika.yandex.ru → «Создать счётчик»).
//    Пусто — счётчик не подключается (сайт работает как раньше).
//    Цели: buy_click (клик по кнопке «Купить/Написать», параметр product),
//    lead_form (отправка формы заявки). Логика — в js/metrika-init.js.
var METRIKA_ID = '';
