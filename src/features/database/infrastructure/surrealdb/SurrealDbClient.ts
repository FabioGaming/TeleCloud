import Surreal from "surrealdb";
import type { IDatabase } from "../../domain/ports";

export class SurrealDbClient implements IDatabase<Surreal> {
   private db: Surreal;
   private _isConnected: boolean = false;

   constructor() {
      this.db = new Surreal();
   }

   async connect(): Promise<void> {
      if (this._isConnected) return;

      await this.db.connect("indxdb://telecloud", {
         namespace: "telecloud",
         database: "main",
      });
      this._isConnected = true;
   }

   async disconnect(): Promise<void> {
      if (!this._isConnected) return;
      await this.db.close();
      this._isConnected = false;
   }

   isConnected(): boolean {
      return this._isConnected;
   }

   getClient(): Surreal {
      return this.db;
   }
}
