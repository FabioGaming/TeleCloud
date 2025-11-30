import type { TelegramMessage } from "./telegram-message";

export class TeleramUpdate {
   public id: number;
   public message?: TelegramMessage;

   constructor(id: number, message?: TelegramMessage) {
      this.id = id;
      this.message = message;
   }
}
