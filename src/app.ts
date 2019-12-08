import express from 'express';
import { MongoClient } from 'mongodb';

import { apiRouter } from './api/apiRouter';
import { Database } from './datastore/Database';

export const server: express.Application = express();

server.use(express.json());
server.use('/api', apiRouter);

const mongodbClient = new MongoClient('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongodbClient.connect(function (error, client) {
    if (error) {
        console.log(error);
    }

    Database.init(client.db('tsk-manager'));
    Database.createCollectionIndex('tasks', 'id', {
        unique: true,
    })

    server.listen(3200, function () {
        console.log('Server listening on port 3200!');
    });
});