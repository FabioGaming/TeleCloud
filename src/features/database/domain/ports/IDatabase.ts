export interface IDatabase {
   connect(): Promise<void>;
   disconnect(): Promise<void>;
   isConnected(): Promise<boolean>;
}
