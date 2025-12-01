import { TelegramApiClient } from "./telegram-api-client";

export class TelegramService {
   private readonly api: TelegramApiClient;
   constructor(api: TelegramApiClient) {
      this.api = api;
      api.setToken(api.getToken);
   }
}
