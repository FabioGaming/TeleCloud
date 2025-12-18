import type { TelegramChatDto } from "./TelegramChatDto";
import type { TelegramDocumentDto } from "./TelegramDocumentDto";
import type { TelegramEntityDto } from "./TelegramEntityDto";
import type { TelegramUserDto } from "./TelegramUserDto";

export interface TelegramMessageDto {
   message_id: number;
   from?: TelegramUserDto;
   chat: TelegramChatDto;
   date: number;
   text?: string;
   entities?: TelegramEntityDto[];
   document?: TelegramDocumentDto;
}
