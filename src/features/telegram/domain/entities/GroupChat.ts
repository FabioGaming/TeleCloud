import { TelegramChat } from "./TelegramChat";

export class GroupChat extends TelegramChat {
   public override type: "group" | "supergroup";
   public title: string;
   public allMembersAreAdministrators?: boolean;
   public acceptedGiftTypes?: Record<string, boolean>;

   constructor(
      id: number,
      type: "group" | "supergroup",
      title: string,
      allMembersAreAdmins?: boolean,
      acceptedGiftTypes?: Record<string, boolean>,
   ) {
      super(id, type);
      this.type = type;
      this.title = title;
      this.allMembersAreAdministrators = allMembersAreAdmins;
      this.acceptedGiftTypes = acceptedGiftTypes;
   }
}
