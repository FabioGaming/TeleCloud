export interface TelegramChatBaseDto {
   id: number;
   type: "private" | "group" | "supergroup" | "channel";
}
