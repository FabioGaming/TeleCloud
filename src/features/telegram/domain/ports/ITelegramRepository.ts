import type { TelegramDocument, TelegramMessage, TelegramUpdate } from "../entities";

export interface ITelegramRepository {
   saveMessage(message: TelegramMessage): Promise<void>;
   getMessage(id: number): Promise<TelegramMessage | null>;
   getMessagesByChatId(chatId: number | string): Promise<TelegramMessage[]>;
   getAllMessages(): Promise<TelegramMessage[]>;
   deleteMessage(id: number): Promise<void>;
}
