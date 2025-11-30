export class TelegramUser {
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
}
