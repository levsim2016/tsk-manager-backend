import { Router } from 'express';
import { createTask } from '../business-logic/tasks/createTask';
import { loadTasks } from '../business-logic/tasks/loadTasks';

export const tasksRouter = Router();

tasksRouter.get('/', function (request, response) {
    response.send(loadTasks());
});

tasksRouter.post('/', function (request, response) {
    const summary = createTask('Hmmm');
    response.send(summary);
});

