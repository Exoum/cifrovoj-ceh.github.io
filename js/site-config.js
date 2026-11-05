// «Цифровой цех» — настройки интеграции сбора заявок.
// Заполнить один раз после создания бота и деплоя воркера.

// 1. Username бота-приёмной (создать у @BotFather), без @.
//    Пусто — кнопки ведут в канал @cifrovoj_ceh (как раньше).
var BOT_USERNAME = '';

// 2. URL Cloudflare Worker (см. worker/README.md), например:
//    'https://cifrovoj-ceh-leads.xxx.workers.dev'
//    Пусто — форма покажет подсказку «напишите в Telegram» вместо отправки.
var LEAD_ENDPOINT = '';
