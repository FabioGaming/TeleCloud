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
      accepctedGiftType?: Record<string, boolean>,
   ) {
      super(id, type);
      this.id = id;
      this.type = type;
      this.title = title;
      this.allMembersAreAdministrators = allMembersAreAdmins;
      this.acceptedGiftTypes = accepctedGiftType;
   }
}
