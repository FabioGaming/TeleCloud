import type { TelegramMessage } from "../../domain/entities";
import type { TelegramClientPort, SendMessageRequest } from "../../domain/ports";

export interface SendMessageUseCaseRequest {
   chatId: number | string;
   text: string;
}

export interface SendMessageUseCaseResponse {
   message: TelegramMessage;
}

export class SendMessageUseCase {
   private readonly telegramClient: TelegramClientPort;

   constructor(telegramClient: TelegramClientPort) {
      this.telegramClient = telegramClient;
   }

   async execute(request: SendMessageUseCaseRequest): Promise<SendMessageUseCaseResponse> {
      const portRequest: SendMessageRequest = {
         chatId: request.chatId,
         text: request.text,
      };
      const message = await this.telegramClient.sendMessage(portRequest);
      return { message };
   }
}
