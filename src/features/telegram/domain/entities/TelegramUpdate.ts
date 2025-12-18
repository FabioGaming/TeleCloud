import type { TelegramMessage } from "./TelegramMessage";

export class TelegramUpdate {
   public id: number;
   public message?: TelegramMessage;

   constructor(id: number, message?: TelegramMessage) {
      this.id = id;
      this.message = message;
   }
}
