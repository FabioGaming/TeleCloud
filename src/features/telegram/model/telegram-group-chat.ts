import type { GroupChatDto } from "./dto/chat-types/group-chat-dto";
import { TelegramChat } from "./telegram-chat";

export class GroupChat extends TelegramChat {
   public id: number;
   public type: "group" | "supergroup";
   public title: string;
   public allMembersAreAdministrators?: boolean;
   public acceptedGiftTypes?: Record<string, boolean>;

   constructor(
      id: number,
      type: "group" | "supergroup",
      title: string,
      allMembersAreAdmins?: boolean,
      accepctedGiftTypes?: Record<string, boolean>,
   ) {
      super(id, type);
      this.id = id;
      this.type = type;
      this.title = title;
      this.allMembersAreAdministrators = allMembersAreAdmins;
      this.acceptedGiftTypes = accepctedGiftTypes;
   }

   static fromDto(dto: GroupChatDto): GroupChat {
      return new GroupChat(dto.id, dto.type, dto.title, dto.all_members_are_administrators, dto.accepted_gifts);
   }
}
