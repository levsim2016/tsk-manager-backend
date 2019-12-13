import { Database } from "../../datastore/Database";
import { DeleteWriteOpResultObject } from "mongodb";

export async function deleteTask(id: string): Promise<DeleteWriteOpResultObject> {
    const tasksCollection = Database.getCollection('tasks');
    return await tasksCollection.deleteOne({ id: id });
};