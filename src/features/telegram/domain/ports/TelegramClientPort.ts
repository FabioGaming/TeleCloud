import type { TelegramDocument, TelegramMessage, TelegramUpdate } from "../entities";

export interface SendMessageRequest {
   chatId: number | string;
   text: string;
}

export interface SendDocumentRequest {
   chatId: number | string;
   file: Blob | File;
   filename: string;
}

export interface FetchUpdatesRequest {
   offset?: number;
   limit?: number;
   timeout?: number;
}

export interface GetFileInfoRequest {
   fileId: string;
}

export interface DownloadFileRequest {
   path: string;
}

export interface TelegramClientPort {
   sendMessage(request: SendMessageRequest): Promise<TelegramMessage>;
   fetchUpdates(request: FetchUpdatesRequest): Promise<TelegramUpdate[]>;
   sendDocument(request: SendDocumentRequest): Promise<TelegramMessage>;
   getFileInfo(request: GetFileInfoRequest): Promise<TelegramDocument>;
   downloadFile(request: DownloadFileRequest): Promise<ArrayBuffer>;
}
