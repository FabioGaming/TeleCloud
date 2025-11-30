import type { PrivateChatDto } from "./dto/chat-types/private-chat-dto";
import { TelegramChat } from "./telegram-chat";

export class PrivateChat extends TelegramChat {
   public id: number;
   public firstName?: string;
   public lastName?: string;
   public username?: string;

   constructor(id: number, firstName?: string, lastName?: string, username?: string) {
      super(id, "private");
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
   }

   static fromDto(dto: PrivateChatDto): PrivateChat {
      return new PrivateChat(dto.id, dto.first_name, dto.last_name, dto.username);
   }
}
