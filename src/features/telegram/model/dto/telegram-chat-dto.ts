import type { ChannelChatDto } from "./chat-types/channel-chat-dto";
import type { GroupChatDto } from "./chat-types/group-chat-dto";
import type { PrivateChatDto } from "./chat-types/private-chat-dto";

export type TelegramChatDto = PrivateChatDto | GroupChatDto | ChannelChatDto;
