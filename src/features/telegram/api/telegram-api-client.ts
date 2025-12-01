import { HttpClient } from "../../../shared/api/http-client";
import type { TelegramResponse } from "../../../shared/interfaces/telegram-response";
import { URL_CONFIG } from "../../../shared/lib/constants";
import type { TelegramUpdateDto } from "../model/dto/telegram-update-dto";

export class TelegramApiClient {
   private readonly http: HttpClient;
   private readonly token: string;

   constructor(token: string) {
      this.token = token;
      this.http = new HttpClient(URL_CONFIG.TELEGRAM_BASE_URL);
   }

   setToken(token: string) {
      this.http.setToken(token);
   }
}
