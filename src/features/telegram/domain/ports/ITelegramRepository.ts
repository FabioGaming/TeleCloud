import type { TelegramDocument, TelegramMessage, TelegramUpdate } from "../entities";

export interface ITelegramRepository {
   saveMessage(message: TelegramMessage): Promise<void>;
   getMessage(id: number): Promise<TelegramMessage | null>;
   getMessagesByChatId(chatId: number | string): Promise<TelegramMessage[]>;
   getAllMessages(): Promise<TelegramMessage[]>;
   deleteMessage(id: number): Promise<void>;

   saveDocument(document: TelegramDocument): Promise<void>;
   getDocument(id: string): Promise<TelegramDocument | null>;
   getAllDocuments(): Promise<TelegramDocument[]>;
   deleteDocument(id: string): Promise<void>;

   saveUpdate(update: TelegramUpdate): Promise<void>;
   getUpdate(id: number): Promise<TelegramUpdate | null>;
   getAllUpdates(): Promise<TelegramUpdate[]>;
   deleteUpdate(id: number): Promise<void>;
}
