import { Router } from 'express';
import { tasksRouter } from './routers/tasksRouter';

export const apiRouter = Router();

apiRouter.use('/tasks', tasksRouter);
