import axios from "axios";
import type { TelegramDocument, TelegramMessage, TelegramUpdate } from "../../domain/entities";
import type {
   DownloadFileRequest,
   FetchUpdatesRequest,
   GetFileInfoRequest,
   SendDocumentRequest,
   SendMessageRequest,
   TelegramClientPort,
} from "../../domain/ports";
import type { TelegramDocumentDto, TelegramMessageDto, TelegramResponseDto, TelegramUpdateDto } from "../dto";
import { mapDocumentDtoToEntity, mapMessageDtoToEntity, mapUpdateDtoToEntity } from "../mappers";

const TELEGRAM_BASE_URL = "https://api.telegram.org";

export class TelegramHttpClient implements TelegramClientPort {
   private readonly token: string;
   private readonly baseUrl: string;

   constructor(token: string) {
      this.token = token;
      this.baseUrl = `${TELEGRAM_BASE_URL}/bot${token}/`;
   }

   async sendMessage(request: SendMessageRequest): Promise<TelegramMessage> {
      const response = await axios.post<TelegramResponseDto<TelegramMessageDto>>(`${this.baseUrl}sendMessage`, {
         chat_id: request.chatId,
         text: request.text,
      });
      return mapMessageDtoToEntity(response.data.result);
   }

   async fetchUpdates(request: FetchUpdatesRequest): Promise<TelegramUpdate[]> {
      const response = await axios.get<TelegramResponseDto<TelegramUpdateDto[]>>(`${this.baseUrl}getUpdates`, {
         params: { offset: request.offset, limit: request.limit, timeout: request.timeout },
      });
      return response.data.result.map(mapUpdateDtoToEntity);
   }

   async sendDocument(request: SendDocumentRequest): Promise<TelegramMessage> {
      const form = new FormData();
      form.append("chat_id", String(request.chatId));
      form.append("document", request.file, request.filename);

      const response = await axios.post<TelegramResponseDto<TelegramMessageDto>>(`${this.baseUrl}sendDocument`, form);
      return mapMessageDtoToEntity(response.data.result);
   }

   async getFileInfo(request: GetFileInfoRequest): Promise<TelegramDocument> {
      const response = await axios.get<TelegramResponseDto<TelegramDocumentDto>>(`${this.baseUrl}getFile`, {
         params: { file_id: request.fileId },
      });
      return mapDocumentDtoToEntity(response.data.result);
   }

   async downloadFile(request: DownloadFileRequest): Promise<ArrayBuffer> {
      const response = await axios.get(`${TELEGRAM_BASE_URL}/file/bot${this.token}/${request.path}`, {
         responseType: "arraybuffer",
      });
      return response.data;
   }
}
