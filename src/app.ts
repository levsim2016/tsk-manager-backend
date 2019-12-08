import express from 'express';
import { apiRouter } from './api/apiRouter';

export const server: express.Application = express();

server.use('/api', apiRouter)

server.listen(3200, function () {
    console.log('Server listening on port 3200!');
});