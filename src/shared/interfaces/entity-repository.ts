export interface IEntityRepository<T> {
   getById(id: string): Promise<T | null>;
   getAll(): Promise<T[]>;
   create(entity: T): Promise<T>;
   update(id: string, entity: Partial<T>): Promise<T | null>;
   delete(id: string): Promise<boolean>;
}
