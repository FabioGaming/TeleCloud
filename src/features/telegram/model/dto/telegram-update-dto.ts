import type { TelegramMessageDto } from "./telegram-message-dto";

export interface TelegramUpdateDto {
   update_id: number;
   message?: TelegramMessageDto;
}
