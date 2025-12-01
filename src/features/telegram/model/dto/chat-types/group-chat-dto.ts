import type { TelegramChatBase } from "../../../../../shared/interfaces/telegram-chat-base";

export interface GroupChatDto extends TelegramChatBase {
   type: "group" | "supergroup";
   title: string;
   all_members_are_administrators?: boolean;
   accepted_gifts: Record<string, boolean>;
}
