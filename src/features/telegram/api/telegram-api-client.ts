import axios from "axios";
import { HttpClient } from "../../../shared/api/http-client";
import type { TelegramResponse } from "../../../shared/interfaces/telegram-response";
import { URL_CONFIG } from "../../../shared/lib/constants";
import type { TelegramDocumentDto } from "../model/dto/telegram-document-dto";
import type { TelegramMessageDto } from "../model/dto/telegram-message-dto";
import type { TelegramUpdateDto } from "../model/dto/telegram-update-dto";

export class TelegramApiClient {
   private readonly http: HttpClient;
   private readonly token: string;

   constructor(token: string) {
      this.token = token;
      this.http = new HttpClient(URL_CONFIG.TELEGRAM_BASE_URL);
   }

   get getToken(): string {
      return this.token;
   }

   setToken(token: string) {
      this.http.setToken(token);
   }

   async getUpdates(offset?: number, limit?: number, timeout?: number): Promise<TelegramResponse<TelegramUpdateDto[]>> {
      return this.http.get<TelegramResponse<TelegramUpdateDto[]>>("getUpdates", {
         params: { offset, limit, timeout },
      });
   }

   async sendMessage(chatId: number | string, text: string): Promise<TelegramResponse<TelegramMessageDto>> {
      return this.http.post<TelegramResponse<TelegramMessageDto>>("sendMessage", {
         chat_id: chatId,
         text: text,
      });
   }

   async sendDocument(
      chatId: number | string,
      file: Blob | File,
      filename: string,
   ): Promise<TelegramResponse<TelegramMessageDto>> {
      const form = new FormData();
      form.append("chat_id", String(chatId));
      form.append("document", file, filename);

      return this.http.post<TelegramResponse<TelegramMessageDto>>("sendDocument", form, {
         headers: {},
      });
   }

   async getFile(fileId: string): Promise<TelegramResponse<TelegramDocumentDto>> {
      return this.http.get<TelegramResponse<TelegramDocumentDto>>("getFile", {
         params: { file_id: fileId },
      });
   }

   async downloadFile(path: string): Promise<ArrayBuffer> {
      const response = await axios.get(`${URL_CONFIG.TELEGRAM_BASE_URL}/file/bot${this.token}/${path}`, {
         responseType: "arraybuffer",
      });

      return response.data;
   }
}
