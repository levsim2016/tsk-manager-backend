import { Router } from 'express';
import { createTask } from '../../business-logic/tasks/createTask';
import { loadTasks } from '../../business-logic/tasks/loadTasks';
import { ITask } from '../../interfaces/ITask';
import { updateTaskStatus } from '../../business-logic/tasks/updateTaskStatus';
import { deleteTask } from '../../business-logic/tasks/deleteTask';

export const tasksRouter = Router();

tasksRouter.get('/', async function (request, response) {
    response.json(await loadTasks());
});

tasksRouter.post('/', async function (request, response) {
    try {
        const task: ITask = request.body;
        await createTask(task);

        response.sendStatus(200);
    } catch (exception) {
        console.error(exception);
        response.sendStatus(400);
    }
});

tasksRouter.put('/:id', async function (request, response) {
    try {
        const taskId = request.params.id;
        const isDone = request.body.isDone;

        await updateTaskStatus(taskId, isDone);

        response.sendStatus(200);
    } catch (exception) {
        console.error(exception);
        response.sendStatus(400);
    }
});

tasksRouter.delete('/:id', async function (request, response) {
    try {
        const taskId = request.params.id;

        await deleteTask(taskId);

        response.sendStatus(200);
    } catch (exception) {
        console.error(exception);
        response.sendStatus(400);
    }
});