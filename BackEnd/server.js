import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { mongoConnector } from './db/mongoConnector.js';
import router from './router/index.js';

dotenv.config();

mongoConnector();

const app = express();

app.use(cors());
app.use('/api', router);

export default app;
