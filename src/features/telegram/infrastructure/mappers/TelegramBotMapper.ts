import { TelegramBot } from "../../domain/entities";
import type { TelegramBotDto } from "../dto";

export function mapBotDtoToEntity(dto: TelegramBotDto): TelegramBot {
   return new TelegramBot(
      dto.id,
      dto.is_bot,
      dto.first_name,
      dto.username,
      dto.can_join_groups,
      dto.can_read_all_group_messages,
      dto.supports_inline_queries,
      dto.can_connect_to_business,
      dto.has_main_web_app,
   );
}
