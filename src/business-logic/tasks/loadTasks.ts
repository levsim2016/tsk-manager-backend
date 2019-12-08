import { ITask } from "../../interfaces/ITask";
import { Database } from "../../datastore/Database";

export async function loadTasks(): Promise<ITask[]> {
    const tasksCollection = Database.getCollection('tasks');
    const tasksIterator = tasksCollection.find<ITask>({}, { 
        projection: { _id: 0 } 
    });
    return await tasksIterator.toArray();
};