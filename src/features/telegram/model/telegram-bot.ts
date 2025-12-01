import type { TelegramBotDto } from "./dto/telegram-bot-dto";

export class TelegramBot {
   public id: number;
   public isBot: boolean;
   public firstName: string;
   public username: string;
   public canJoinGroups: boolean;
   public canReadAllGroupMessages: boolean;
   public supportsInlineQueries: boolean;
   public canConnectToBusiness: boolean;
   public hasMainWebApp: boolean;

   constructor(
      id: number,
      isBot: boolean,
      firstName: string,
      username: string,
      canJoinGroups: boolean,
      canReadAllGroupMessages: boolean,
      supportsInlineQueries: boolean,
      canConnectToBusiness: boolean,
      hasMainWebApp: boolean,
   ) {
      this.id = id;
      this.isBot = isBot;
      this.firstName = firstName;
      this.username = username;
      this.canJoinGroups = canJoinGroups;
      this.canReadAllGroupMessages = canReadAllGroupMessages;
      this.supportsInlineQueries = supportsInlineQueries;
      this.canConnectToBusiness = canConnectToBusiness;
      this.hasMainWebApp = hasMainWebApp;
   }

   static fromDto(dto: TelegramBotDto): TelegramBot {
      return new TelegramBot(
         dto.id,
         dto.is_bot,
         dto.first_name,
         dto.username,
         dto.can_join_groups,
         dto.can_read_all_group_messages,
         dto.supports_inline_queries,
         dto.can_connect_to_business,
         dto.has_main_web_app,
      );
   }
}
