import type { TelegramMessageDto } from "./dto/telegram-message-dto";
import { TelegramChat } from "./telegram-chat";
import { TelegramUser } from "./telegram-user";

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

   static fromDto(dto: TelegramMessageDto): TelegramMessage {
      return new TelegramMessage(
         dto.message_id,
         dto.from ? TelegramUser.fromDto(dto.from) : undefined,
         TelegramChat.fromDto(dto.chat),
         dto.date,
         dto.text,
      );
   }
}
