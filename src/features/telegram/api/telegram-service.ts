import { TelegramDocument } from "../model/telegram-document";
import { TelegramMessage } from "../model/telegram-message";
import { TelegramUpdate } from "../model/telegram-update";
import { TelegramApiClient } from "./telegram-api-client";

export class TelegramService {
   private readonly api: TelegramApiClient;
   constructor(api: TelegramApiClient) {
      this.api = api;
      api.setToken(api.getToken);
   }

   async getUpdates(offset?: number, limit?: number, timeout?: number): Promise<TelegramUpdate[]> {
      return (await this.api.getUpdates(offset, limit, timeout)).result.map((tu) => TelegramUpdate.fromDto(tu));
   }

   async sendMessage(chatId: string | number, text: string): Promise<TelegramMessage> {
      return TelegramMessage.fromDto((await this.api.sendMessage(chatId, text)).result);
   }

   async sendDocument(chatId: string, file: Blob | File, filename: string): Promise<TelegramMessage> {
      return TelegramMessage.fromDto((await this.api.sendDocument(chatId, file, filename)).result);
   }

   async getFileInfo(fileId: string): Promise<TelegramDocument> {
      return TelegramDocument.fromDto((await this.api.getFile(fileId)).result);
   }

   async downloadFile(path: string): Promise<ArrayBuffer> {
      return await this.api.downloadFile(path);
   }
}
