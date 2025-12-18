export class TelegramDocument {
   public fileName: string;
   public fileId: string;
   public fileUniqueId: string;
   public fileSize: number;
   public filePath?: string;

   constructor(fileName: string, fileId: string, fileUniqueId: string, fileSize: number, filePath?: string) {
      this.fileName = fileName;
      this.fileId = fileId;
      this.fileUniqueId = fileUniqueId;
      this.fileSize = fileSize;
      this.filePath = filePath;
   }
}
