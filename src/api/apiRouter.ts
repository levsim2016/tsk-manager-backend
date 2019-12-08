import { Router } from 'express';
import { tasksRouter } from './routers/tasks';

export const apiRouter = Router();

apiRouter.use('/tasks', tasksRouter);
