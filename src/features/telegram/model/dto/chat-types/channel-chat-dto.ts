import type { TelegramChatBase } from "../../../../../shared/interfaces/telegram-chat-base";

export interface ChannelChatDto extends TelegramChatBase {
   type: "channel";
   title: string;
}
