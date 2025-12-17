import { TelegramMessage } from "../../domain/entities";
import type { TelegramMessageDto } from "../dto";
import { mapChatDtoToEntity } from "./TelegramChatMapper";
import { mapDocumentDtoToEntity } from "./TelegramDocumentMapper";
import { mapUserDtoToEntity } from "./TelegramUserMapper";

export function mapMessageDtoToEntity(dto: TelegramMessageDto): TelegramMessage {
   return new TelegramMessage(
      dto.message_id,
      dto.from ? mapUserDtoToEntity(dto.from) : undefined,
      mapChatDtoToEntity(dto.chat),
      dto.date,
      dto.text,
      dto.document ? mapDocumentDtoToEntity(dto.document) : undefined,
   );
}
