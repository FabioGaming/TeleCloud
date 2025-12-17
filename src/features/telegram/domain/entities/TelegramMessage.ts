import type { TelegramChat } from "./TelegramChat";
import type { TelegramDocument } from "./TelegramDocument";
import type { TelegramUser } from "./TelegramUser";

export class TelegramMessage {
   public id: number;
   public from?: TelegramUser;
   public chat?: TelegramChat;
   public date?: number;
   public text?: string;
   public document?: TelegramDocument;

   constructor(
      id: number,
      from?: TelegramUser,
      chat?: TelegramChat,
      date?: number,
      text?: string,
      document?: TelegramDocument,
   ) {
      this.id = id;
      this.from = from;
      this.chat = chat;
      this.date = date;
      this.text = text;
      this.document = document;
   }
}
