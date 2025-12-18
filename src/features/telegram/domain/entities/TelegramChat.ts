export type ChatType = "private" | "group" | "supergroup" | "channel";

export abstract class TelegramChat {
   public id: number;
   public type: ChatType;

   constructor(id: number, type: ChatType) {
      this.id = id;
      this.type = type;
   }
}
