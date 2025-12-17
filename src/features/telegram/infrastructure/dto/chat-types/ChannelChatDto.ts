import type { TelegramChatBaseDto } from "../TelegramChatBaseDto";

export interface ChannelChatDto extends TelegramChatBaseDto {
   type: "channel";
   title: string;
}
