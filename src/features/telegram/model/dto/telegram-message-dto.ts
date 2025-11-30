import type { TelegramEntity } from "../../../../shared/interfaces/telegram-entity";
import type { TelegramChatDto } from "./telegram-chat-dto";
import type { TelegramUserDto } from "./telegram-user-dto";

export interface TelegramMessageDto {
   message_id: number;
   from: TelegramUserDto;
   chat: TelegramChatDto;
   date: number;
   text?: string;
   entities?: TelegramEntity[];
}
