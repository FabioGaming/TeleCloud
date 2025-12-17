import { ChannelChat, GroupChat, PrivateChat, type TelegramChat } from "../../domain/entities";
import type { TelegramChatDto } from "../dto";

export function mapChatDtoToEntity(dto: TelegramChatDto): TelegramChat {
   switch (dto.type) {
      case "private":
         return new PrivateChat(dto.id, dto.first_name, dto.last_name, dto.username);
      case "group":
      case "supergroup":
         return new GroupChat(dto.id, dto.type, dto.title, dto.all_members_are_administrators, dto.accepted_gifts);
      case "channel":
         return new ChannelChat(dto.id, dto.title);
      default:
         throw new Error(`Unknown chat type: ${(dto as TelegramChatDto).type}`);
   }
}
