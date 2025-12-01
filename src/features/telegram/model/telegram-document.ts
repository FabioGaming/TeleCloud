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
}
