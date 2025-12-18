import Surreal from "surrealdb";
import type { IDatabase } from "../../domain/ports";

export class SurrealDbClient implements IDatabase<Surreal> {
   private db: Surreal;
   private _isConnected: boolean = false;

   constructor() {
      this.db = new Surreal();
   }
}
