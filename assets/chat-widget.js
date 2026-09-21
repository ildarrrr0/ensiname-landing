/* Чат-виджет Ensina-me — общий компонент, подключается на КАЖДОЙ странице сайта
   (скрипт вставляет разметку кнопки+окна в конец <body> и определяет функции
   openChat/toggleChat/chatSend/chatChip, вызываемые из onclick-атрибутов на любой
   странице). Стили — assets/chat-widget.css. Бэкенд — core.py/web_server.py в
   репозитории ensina-me-ai-chat-bot, эндпоинт POST /api/chat. */
(function(){
  var markup =
    '<button class="chat-fab" id="chatFab" onclick="toggleChat()" aria-label="Открыть чат с ассистентом">' +
      '<svg viewBox="0 0 24 24"><path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.2 1 4.2 2.7 5.7-.1 1.2-.6 2.6-1.6 3.8 1.7-.2 3.4-.8 4.7-1.7 1.3.4 2.7.7 4.2.7 5.5 0 10-3.8 10-8.5S17.5 3 12 3z"/></svg>' +
      '<span class="badge">AI</span>' +
    '</button>' +
    '<div class="chat-window" id="chatWindow" role="dialog" aria-label="Чат с ассистентом">' +
      '<div class="cw-head"><span class="dot"></span><div><b>Ассистент Ensina-me</b><span>обычно отвечает сразу</span></div><button class="x" onclick="toggleChat()" aria-label="Закрыть">×</button></div>' +
      '<div class="cw-body" id="cwBody">' +
        '<div class="bubble bot">Привет! Помогу подобрать курс и записать на пробное занятие 🇵🇹 Какой язык вам интересен — португальский или испанский?</div>' +
      '</div>' +
      '<div class="cw-chips"><span onclick="chatChip(this)">Подобрать курс</span><span onclick="chatChip(this)">Записаться</span><span onclick="chatChip(this)">Узнать стоимость</span></div>' +
      '<div class="cw-input"><input type="text" id="cwInput" placeholder="Напишите сообщение…" onkeydown="if(event.key===\'Enter\')chatSend()"><button onclick="chatSend()" aria-label="Отправить">➤</button></div>' +
      '<div class="cw-note">Отвечает ИИ-ассистент школы — при необходимости передаст ваш вопрос менеджеру.</div>' +
    '</div>';
  var mount = document.createElement('div');
  mount.innerHTML = markup;
  while (mount.firstChild) document.body.appendChild(mount.firstChild);
})();

var CHAT_API_URL = 'https://ildarrrr0-ensina-me-ai-chat-bot-807c.twc1.net/api/chat';

function toggleChat(){document.getElementById('chatWindow').classList.toggle('open');}
function openChat(){document.getElementById('chatWindow').classList.add('open');document.getElementById('cwInput').focus();}
function addBubble(t,w){var b=document.createElement('div');b.className='bubble '+w;b.textContent=t;var y=document.getElementById('cwBody');y.appendChild(b);y.scrollTop=y.scrollHeight;return b;}
function addTyping(){var b=document.createElement('div');b.className='bubble bot typing';b.innerHTML='<span></span><span></span><span></span>';var y=document.getElementById('cwBody');y.appendChild(b);y.scrollTop=y.scrollHeight;return b;}
function getChatSessionId(){
  try{
    var id=localStorage.getItem('ensinaChatSessionId');
    if(!id){
      id=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():('id-'+Date.now()+'-'+Math.random().toString(16).slice(2));
      localStorage.setItem('ensinaChatSessionId',id);
    }
    return id;
  }catch(e){return 'no-storage-'+Date.now();}
}
function sendToAssistant(text){
  var typingBubble=addTyping();
  fetch(CHAT_API_URL,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({session_id:getChatSessionId(),message:text})
  }).then(function(r){
    if(!r.ok)throw new Error('http '+r.status);
    return r.json();
  }).then(function(data){
    typingBubble.remove();
    addBubble(data.reply||'Извините, не получилось сформировать ответ. Попробуйте ещё раз.','bot');
  }).catch(function(){
    typingBubble.remove();
    addBubble('Не получилось связаться с ассистентом. Попробуйте позже или позвоните нам: +7 (495) 066-52-78.','bot');
  });
}
function chatSend(){var i=document.getElementById('cwInput');var t=i.value.trim();if(!t)return;addBubble(t,'user');i.value='';sendToAssistant(t);}
function chatChip(el){openChat();var t=el.textContent;addBubble(t,'user');sendToAssistant(t);}
