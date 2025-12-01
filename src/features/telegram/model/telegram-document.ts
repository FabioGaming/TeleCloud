import type { TelegramDocumentDto } from "./dto/telegram-document-dto";

export class TelegramDocument {
   public fileName: string;
   public fileId: string;
   public fileUniqueId: string;
   public fileSize: number;
   /** Not populated unless file is explicitly fetched */
   public filePath?: string;

   constructor(fileName: string, fileId: string, fileUniqueId: string, fileSize: number, filePath?: string) {
      this.fileName = fileName;
      this.fileId = fileId;
      this.fileUniqueId = fileUniqueId;
      this.fileSize = fileSize;
      this.filePath = filePath;
   }

   static fromDto(dto: TelegramDocumentDto): TelegramDocument {
      return new TelegramDocument(dto.file_name, dto.file_id, dto.file_unique_id, dto.file_size, dto.file_path);
   }
}
