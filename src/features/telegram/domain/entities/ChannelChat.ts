import { TelegramChat } from "./TelegramChat";

export class ChannelChat extends TelegramChat {
   public title: string;

   constructor(id: number, title: string) {
      super(id, "channel");
      this.title = title;
   }
}
