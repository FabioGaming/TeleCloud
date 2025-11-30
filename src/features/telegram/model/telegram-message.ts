import type { TelegramChat } from "./telegram-chat";
import type { TelegramUser } from "./telegram-user";

export class TelegramMessage {
   public id: number;
   public from?: TelegramUser;
   public chat?: TelegramChat;
   public date?: number;
   public text?: string;

   constructor(id: number, from?: TelegramUser, chat?: TelegramChat, date?: number, text?: string) {
      this.id = id;
      this.from = from;
      this.chat = chat;
      this.date = date;
      this.text = text;
   }
}
