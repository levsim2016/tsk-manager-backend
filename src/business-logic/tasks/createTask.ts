import { ITask } from "../../interfaces/ITask";
import { Database } from "../../datastore/Database";
import { WriteOpResult } from "mongodb";

export async function createTask(newTask: ITask): Promise<WriteOpResult> {
    const tasksCollection = Database.getCollection('tasks');
    return await tasksCollection.insertOne(newTask);
};