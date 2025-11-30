export interface TelegramChatBase {
   id: number;
   type: "private" | "group" | "supergroup" | "channel";
}
