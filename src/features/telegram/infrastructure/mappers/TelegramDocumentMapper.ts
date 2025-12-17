import { TelegramDocument } from "../../domain/entities";
import type { TelegramDocumentDto } from "../dto";

export function mapDocumentDtoToEntity(dto: TelegramDocumentDto): TelegramDocument {
   return new TelegramDocument(dto.file_name, dto.file_id, dto.file_unique_id, dto.file_size, dto.file_path);
}
