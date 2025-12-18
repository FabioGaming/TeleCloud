import { TelegramChat } from "./TelegramChat";

export class PrivateChat extends TelegramChat {
   public firstName?: string;
   public lastName?: string;
   public username?: string;

   constructor(id: number, firstName?: string, lastName?: string, username?: string) {
      super(id, "private");
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
   }
}
