import { ITask } from "../../interfaces/ITask";
import { Database } from "../../datastore/Database";

export function createTask(newTask: ITask): void {
    const tasksCollection = Database.getCollection('tasks');
    tasksCollection.insertOne(newTask);
};