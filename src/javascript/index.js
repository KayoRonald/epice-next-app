$(document).ready(function () {
  window.addEventListener('dfMessengerLoaded', function (event) {
    $r1 = document.querySelector("df-messenger");
    $r2 = $r1.shadowRoot.querySelector("df-messenger-chat");
    $r5 = $r2.shadowRoot.querySelector("df-message-list");

    var sheet = new CSSStyleSheet;
    sheet.replaceSync(`div.chat-wrapper[opened="true"] { height: 420px; width: 300px; }`); //To change Height and Width
    $r2.shadowRoot.adoptedStyleSheets = [sheet];

    var sheet3 = new CSSStyleSheet;
    sheet3.replaceSync(`#messageList .message {font-size:0.9em !important;}
         #messageList .message.bot-message {margin-right: 20px ;} 
         #messageList .message.user-message {margin-left: 20px; margin-top: 15px; margin-bottom: 6px;} 
         .message-list-wrapper.minimized #messageList {margin-right: -15px;} 
         .message-list-wrapper.minimized #dismissIcon {padding: 1px}`); //To change margin sizes of user and bot messages
    $r5.shadowRoot.adoptedStyleSheets = [sheet3];

    var sheet5 = new CSSStyleSheet;
    sheet5.replaceSync(`button#widgetIcon .df-chat-icon {height: 56px; width: 56px; left: 0px; top:0px;}`); //To change chat icon 
    $r1.shadowRoot.adoptedStyleSheets = [sheet5];
  });
});