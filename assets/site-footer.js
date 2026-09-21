/* Общий футер сайта Ensina-me — подключается на КАЖДОЙ странице.
   Те же параметры data-root / data-nav-home, что и у site-header.js
   (см. комментарий там) — подключать оба скрипта с ОДИНАКОВЫМИ
   значениями атрибутов на одной странице. */
(function(){
  var s = document.currentScript;
  var root = s.getAttribute('data-root') || '';
  var nh = s.getAttribute('data-nav-home');
  if (nh === null) nh = root + 'draft1.html';

  document.write(
    '<footer class="site-footer">' +
      '<div class="wrap">' +
        '<div class="footer-top">' +
          '<div class="footer-brand">' +
            '<img class="brand-logo" src="' + root + 'assets/logo.png" alt="Ensina-me — языковой центр" loading="lazy">' +
            '<p>Языковой центр Ensina-me. Португальский (европейский и бразильский) и испанский с носителями языка. Очно на Новослободской и онлайн.</p>' +
            '<div class="social">' +
              '<a class="tg" href="https://t.me/ensiname" target="_blank" rel="noopener" aria-label="Telegram"><svg viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>Telegram</a>' +
              '<a class="yt" href="https://www.youtube.com/channel/UClU_gAe1w84oNW5YKFG47iw" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>YouTube</a>' +
              '<a class="max" href="https://max.ru/join/V7MAUSksEswL24x2_EuCzcFgmSzxM_NtwJ1zhRQRChY" target="_blank" rel="noopener" aria-label="Max"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 5.9 2 10.7c0 2.6 1.35 4.93 3.47 6.5-.11 1.13-.6 2.5-1.47 3.6 1.62-.19 3.24-.76 4.5-1.63A11.6 11.6 0 0 0 12 19.4c5.52 0 10-3.9 10-8.7S17.52 2 12 2z"/></svg>Max</a>' +
              '<a class="vk" href="https://vk.com/ensinameportuguese" target="_blank" rel="noopener" aria-label="VK"><svg viewBox="0 0 24 24"><path d="M13.16 17.4c-6.26 0-9.84-4.3-9.99-11.45h3.13c.1 5.27 2.42 7.5 4.26 7.96V5.95h2.95v4.53c1.8-.2 3.7-2.26 4.34-4.53h2.95a8.7 8.7 0 0 1-3.98 5.7A9 9 0 0 1 21 17.4h-3.26a5.6 5.6 0 0 0-3.63-3.99v3.99h-.35c-.2 0-.4 0-.6-.01z"/></svg>VK</a>' +
              '<a class="wa" href="https://api.whatsapp.com/send/?phone=%2B79031404451&text&type=phone_number&app_absent=0" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z"/></svg>WhatsApp</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Обучение</h4>' +
            '<a href="' + nh + '#schedule">Расписание</a>' +
            '<a href="' + nh + '#courses">Наборы в группы</a>' +
            '<a href="' + nh + '#courses">Индивидуальные занятия</a>' +
            '<a href="' + nh + '#courses">Подготовка к экзаменам</a>' +
            '<a href="' + root + 'pay.html">Оплата обучения</a>' +
            '<a href="' + root + 'skhema-proezda/">Схема проезда</a>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h4>Центр</h4>' +
            '<a href="' + root + 'o-centre.html">О центре</a>' +
            '<a href="' + nh + '#teachers">Преподаватели</a>' +
            '<a href="' + nh + '#reviews">Отзывы</a>' +
            '<a href="' + nh + '#articles">Статьи</a>' +
            '<a href="' + nh + '#contacts">Контакты</a>' +
            '<a href="' + nh + '#level-test">Тест на уровень</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<div class="copy">&copy; 2010&ndash;2026 Ensina-me. Языковой центр португальского и испанского.</div>' +
          '<div class="legal">' +
            '<a href="' + nh + '#contacts">Реквизиты</a>' +
            '<a href="' + root + 'privacy.html">Политика конфиденциальности</a>' +
            '<a href="' + root + 'vacancies.html">Вакансии</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-dev">' +
          '<span>О разработчике сайта</span>' +
          '<a href="https://idm-ai.ru/cases/" target="_blank" rel="noopener">idm-ai.ru &rarr;</a>' +
        '</div>' +
      '</div>' +
    '</footer>'
  );
})();
