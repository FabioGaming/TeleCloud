import { TelegramChat } from "./telegram-chat";

export class ChannelChat extends TelegramChat {
   public id: number;
   public title: string;

   constructor(id: number, title: string) {
      super(id, "channel");
      this.id = id;
      this.title = title;
   }
}
