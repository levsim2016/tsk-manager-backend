import { Database } from "../../datastore/Database";
import { UpdateWriteOpResult } from "mongodb";

export async function updateTaskStatus(id: string, isDone: boolean): Promise<UpdateWriteOpResult> {
    const tasksCollection = Database.getCollection('tasks');
    return await tasksCollection.updateOne(
        {
            id: id
        },
        {
            $set: {
                isDone: isDone
            }
        },
    );
};