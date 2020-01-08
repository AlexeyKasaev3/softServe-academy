export class TelegramBot {
  constructor(botAPIkey, chatID) {
    this.botAPIkey = botAPIkey;
    this.chatID = chatID;
  }

  sendMessage(message) {
    fetch(
      `https://api.telegram.org/bot${this.botAPIkey}/sendMessage?chat_id=${this.chatID}&text=${encodeURIComponent(
        message
      )}`
    );
  }
}
