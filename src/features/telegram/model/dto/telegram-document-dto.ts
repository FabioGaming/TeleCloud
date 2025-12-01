export interface TelegramDocumentDto {
   file_name: string;
   file_id: string;
   file_unique_id: string;
   file_size: number;
   /** Undefined if document is not explicitly fetched */
   file_path?: string;
}
