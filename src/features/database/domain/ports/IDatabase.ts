export interface IDatabase<T> {
   connect(): Promise<void>;
   disconnect(): Promise<void>;
   isConnected(): Promise<boolean>;
   getClient(): T;
}
