import type { TelegramChatBase } from "../../../../../shared/interfaces/telegram-chat-base";

export interface GroupChat extends TelegramChatBase {
   type: "group" | "supergroup";
   title: string;
   all_members_are_administrators?: boolean;
   accepted_gifts: Map<string, boolean>;
}
