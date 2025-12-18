import { TelegramUpdate } from "../../domain/entities";
import type { TelegramUpdateDto } from "../dto";
import { mapMessageDtoToEntity } from "./TelegramMessageMapper";

export function mapUpdateDtoToEntity(dto: TelegramUpdateDto): TelegramUpdate {
   return new TelegramUpdate(dto.update_id, dto.message ? mapMessageDtoToEntity(dto.message) : undefined);
}
