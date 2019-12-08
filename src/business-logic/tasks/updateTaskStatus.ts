import { ITask } from "../../interfaces/ITask";
import { Database } from "../../datastore/Database";

export function updateTaskStatus(id: string, isDone: boolean): void {
    const tasksCollection = Database.getCollection('tasks');
    tasksCollection.updateOne({ id }, { isDone });
};