import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import createConnection from './database';

createConnection();
const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000)