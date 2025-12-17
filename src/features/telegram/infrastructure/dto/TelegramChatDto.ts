import type { ChannelChatDto, GroupChatDto, PrivateChatDto } from "./chat-types";

export type TelegramChatDto = PrivateChatDto | GroupChatDto | ChannelChatDto;
