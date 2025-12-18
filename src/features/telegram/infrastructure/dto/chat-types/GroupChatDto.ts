import type { TelegramChatBaseDto } from "../TelegramChatBaseDto";

export interface GroupChatDto extends TelegramChatBaseDto {
   type: "group" | "supergroup";
   title: string;
   all_members_are_administrators?: boolean;
   accepted_gifts: Record<string, boolean>;
}
