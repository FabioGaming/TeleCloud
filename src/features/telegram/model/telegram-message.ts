import type { TelegramMessageDto } from "./dto/telegram-message-dto";
import { TelegramChat } from "./telegram-chat";
import { TelegramDocument } from "./telegram-document";
import { TelegramUser } from "./telegram-user";

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

   static fromDto(dto: TelegramMessageDto): TelegramMessage {
      return new TelegramMessage(
         dto.message_id,
         dto.from ? TelegramUser.fromDto(dto.from) : undefined,
         TelegramChat.fromDto(dto.chat),
         dto.date,
         dto.text,
         dto.document ? TelegramDocument.fromDto(dto.document) : undefined,
      );
   }
}
