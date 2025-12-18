import { TelegramUser } from "../../domain/entities";
import type { TelegramUserDto } from "../dto";

export function mapUserDtoToEntity(dto: TelegramUserDto): TelegramUser {
   return new TelegramUser(dto.id, dto.is_bot, dto.first_name, dto.last_name, dto.username, dto.language_code);
}
