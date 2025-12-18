import type { TelegramMessageDto } from "./TelegramMessageDto";

export interface TelegramUpdateDto {
   update_id: number;
   message?: TelegramMessageDto;
}
