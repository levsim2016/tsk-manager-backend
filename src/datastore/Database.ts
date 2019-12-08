import { Db, Collection, IndexOptions } from "mongodb";

export class Database {
    private static databaseInstance: Db;

    public static init(newDatabase: Db): void {
        this.databaseInstance = newDatabase;
    }

    public static getCollection(name: string): Collection {
        return this.databaseInstance.collection(name);
    }

    public static createCollectionIndex(
        collectionName: string,
        indexFieldName: string,
        options?: IndexOptions
    ): void {
        this.databaseInstance.createIndex(
            collectionName, 
            indexFieldName, 
            options
        );
    }
}