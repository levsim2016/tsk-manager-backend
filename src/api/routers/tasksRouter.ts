import { Router } from 'express';
import { createTask } from '../../business-logic/tasks/createTask';
import { loadTasks } from '../../business-logic/tasks/loadTasks';
import { ITask } from '../../interfaces/ITask';
import { updateTaskStatus } from '../../business-logic/tasks/updateTaskStatus';

export const tasksRouter = Router();

tasksRouter.get('/', async function (request, response) {
    response.json(await loadTasks());
});

tasksRouter.post('/', function (request, response) {
    try {
        const task: ITask = request.body;
        createTask(task);
    } catch (e) {
        response.sendStatus(400);
    } finally {
        response.sendStatus(200);
    }
});

tasksRouter.put('/', function (request, response) {
    try {
        const taskId = request.query.id;
        const isDone = request.body.isDone;

        updateTaskStatus(taskId, isDone);
    } catch (e) {
        response.sendStatus(400);
    } finally {
        response.sendStatus(200);
    }
});