import type { TelegramMessage } from "../../domain/entities";
import type { ITelegramClient, SendMessageRequest } from "../../domain/ports";

export interface SendMessageUseCaseRequest {
   chatId: number | string;
   text: string;
}

export interface SendMessageUseCaseResponse {
   message: TelegramMessage;
}

export class SendMessageUseCase {
   private readonly telegramClient: ITelegramClient;

   constructor(telegramClient: ITelegramClient) {
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
