export class TelegramUser {
   public id: number;
   public isBot: boolean;
   public firstName?: string;
   public lastName?: string;
   public username?: string;
   public languageCode?: string;

   constructor(id: number, isBot: boolean, firstName?: string, lastName?: string, username?: string, languageCode?: string) {
      this.id = id;
      this.isBot = isBot;
      this.firstName = firstName;
      this.lastName = lastName;
      this.username = username;
      this.languageCode = languageCode;
   }
}
