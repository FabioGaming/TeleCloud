import type { TelegramDocumentDto } from "./dto/telegram-document-dto";

export class TelegramDocument {
   public fileName: string;
   public fileId: string;
   public fileUniqueId: string;
   public fileSize: number;

   constructor(fileName: string, fileId: string, fileUniqueId: string, fileSize: number) {
      this.fileName = fileName;
      this.fileId = fileId;
      this.fileUniqueId = fileUniqueId;
      this.fileSize = fileSize;
   }

   static fromDto(dto: TelegramDocumentDto): TelegramDocument {
      return new TelegramDocument(dto.file_name, dto.file_id, dto.file_unique_id, dto.file_size);
   }
}
