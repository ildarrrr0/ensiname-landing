/* Общая шапка сайта Ensina-me — подключается на КАЖДОЙ странице.
   Разметка идентична для всех страниц, вставляется через document.write
   СИНХРОННО в момент разбора HTML (без async/defer) — поэтому шапка
   появляется сразу при загрузке страницы, без "прыжка" вёрстки.

   Параметры задаются атрибутами самого <script>-тега:
   - data-root — префикс до корня сайта: "" на страницах в корне,
     "../" на страницах внутри подпапки (ekzameny/, magazin/ и т.д.).
   - data-nav-home — куда ведут пункты меню («Расписание», «Преподаватели»
     и т.д.): "" на самой главной странице (тогда это простые #якоря
     на этой же странице), иначе "draft1.html" или "../draft1.html"
     (переход на главную и скролл к разделу).

   Пример подключения с корня сайта:      <script src="assets/site-header.js" data-root="" data-nav-home="draft1.html"></script>
   Пример подключения из подпапки:        <script src="../assets/site-header.js" data-root="../" data-nav-home="../draft1.html"></script>
   Пример подключения на самой главной:   <script src="assets/site-header.js" data-root="" data-nav-home=""></script> */
(function(){
  var s = document.currentScript;
  var root = s.getAttribute('data-root') || '';
  var nh = s.getAttribute('data-nav-home');
  if (nh === null) nh = root + 'draft1.html';

  document.write(
    '<header class="site-header">' +
      '<div class="wrap header-inner">' +
        '<a href="' + (nh || '#') + '" class="logo" aria-label="Ensina-me — языковой центр">' +
          '<img class="brand-logo" src="' + root + 'assets/logo.png" alt="Ensina-me — языковой центр" loading="eager">' +
        '</a>' +
        '<nav class="nav" id="nav">' +
          '<a href="' + root + 'o-centre.html">О центре</a>' +
          '<a href="' + nh + '#schedule">Расписание</a>' +
          '<a href="' + nh + '#teachers">Преподаватели</a>' +
          '<a href="' + nh + '#courses">Курсы</a>' +
          '<a href="' + nh + '#reviews">Отзывы</a>' +
          '<a href="' + nh + '#contacts">Контакты</a>' +
        '</nav>' +
        '<div class="header-cta"><a href="#" onclick="openChat();return false" class="btn btn-cta">Записаться на курс</a></div>' +
        '<button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</header>'
  );

  document.addEventListener('DOMContentLoaded', function(){
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ nav.classList.remove('open'); });
    });
  });
})();
