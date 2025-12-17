import type { TelegramChatBaseDto } from "../TelegramChatBaseDto";

export interface PrivateChatDto extends TelegramChatBaseDto {
   type: "private";
   first_name?: string;
   last_name?: string;
   username?: string;
}
