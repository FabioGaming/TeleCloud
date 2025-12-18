export interface IDatabase<T> {
   connect(): Promise<void>;
   disconnect(): Promise<void>;
   isConnected(): boolean;
   getClient(): T;
}
