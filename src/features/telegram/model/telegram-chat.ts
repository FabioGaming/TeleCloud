export abstract class TelegramChat {
   public id: number;
   public type: "private" | "group" | "supergroup" | "channel";

   constructor(id: number, type: "private" | "group" | "supergroup" | "channel") {
      this.id = id;
      this.type = type;
   }

   static fromDto(dto: any): TelegramChat {
      switch (dto.type) {
         case "private":
            return null;
         case "group":
         case "supergroup":
            return null;
         case "channel":
            return null;
         default:
            throw new Error(`Unknown chat type: ${dto.type}`);
      }
   }
}
