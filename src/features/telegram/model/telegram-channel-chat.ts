import type { ChannelChatDto } from "./dto/chat-types/channel-chat-dto";
import { TelegramChat } from "./telegram-chat";

export class ChannelChat extends TelegramChat {
   public id: number;
   public title: string;

   constructor(id: number, title: string) {
      super(id, "channel");
      this.id = id;
      this.title = title;
   }

   static fromDto(dto: ChannelChatDto): ChannelChat {
      return new ChannelChat(dto.id, dto.title);
   }
}
