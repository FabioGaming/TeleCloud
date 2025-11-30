import type { TelegramChatBase } from "../../../../../shared/interfaces/telegram-chat-base";

export interface PrivateChatDto extends TelegramChatBase {
   type: "private";
   first_name?: string;
   last_name?: string;
   username?: string;
}
