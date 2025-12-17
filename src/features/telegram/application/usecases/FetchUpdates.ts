import type { TelegramUpdate } from "../../domain/entities";
import type { TelegramClientPort, FetchUpdatesRequest } from "../../domain/ports";

export interface FetchUpdatesUseCaseRequest {
   offset?: number;
   limit?: number;
   timeout?: number;
}

export interface FetchUpdatesUseCaseResponse {
   updates: TelegramUpdate[];
}

export class FetchUpdatesUseCase {
   private readonly telegramClient: TelegramClientPort;

   constructor(telegramClient: TelegramClientPort) {
      this.telegramClient = telegramClient;
   }

   async execute(request: FetchUpdatesUseCaseRequest): Promise<FetchUpdatesUseCaseResponse> {
      const portRequest: FetchUpdatesRequest = {
         offset: request.offset,
         limit: request.limit,
         timeout: request.timeout,
      };
      const updates = await this.telegramClient.fetchUpdates(portRequest);
      return { updates };
   }
}
