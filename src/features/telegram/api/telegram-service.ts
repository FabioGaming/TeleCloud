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
}
