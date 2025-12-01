import type { TelegramUpdateDto } from "./dto/telegram-update-dto";
import { TelegramMessage } from "./telegram-message";

export class TelegramUpdate {
   public id: number;
   public message?: TelegramMessage;

   constructor(id: number, message?: TelegramMessage) {
      this.id = id;
      this.message = message;
   }

   static fromDto(dto: TelegramUpdateDto): TelegramUpdate {
      return new TelegramUpdate(dto.update_id, dto.message ? TelegramMessage.fromDto(dto.message) : undefined);
   }
}
