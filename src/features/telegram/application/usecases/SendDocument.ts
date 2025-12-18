import type { TelegramMessage } from "../../domain/entities";
import type { ITelegramClient, SendDocumentRequest } from "../../domain/ports";

export interface SendDocumentUseCaseRequest {
   chatId: number | string;
   file: Blob | File;
   filename: string;
}

export interface SendDocumentUseCaseResponse {
   message: TelegramMessage;
}

export class SendDocumentUseCase {
   private readonly telegramClient: ITelegramClient;

   constructor(telegramClient: ITelegramClient) {
      this.telegramClient = telegramClient;
   }

   async execute(request: SendDocumentUseCaseRequest): Promise<SendDocumentUseCaseResponse> {
      const portRequest: SendDocumentRequest = {
         chatId: request.chatId,
         file: request.file,
         filename: request.filename,
      };
      const message = await this.telegramClient.sendDocument(portRequest);
      return { message };
   }
}
