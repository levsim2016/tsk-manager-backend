import express from 'express';
import { tasksRouter } from './routers/tasks';

export const server: express.Application = express();

server.use('/tasks', tasksRouter)

server.listen(3200, function () {
    console.log('Server listening on port 3200!');
});