import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import connection from './config/db';
import { json, urlencoded } from 'body-parser';

import HomeRouter from './routes/home.routes/home.routes';
import UsersRoutes from './routes/home.routes/users.routes';

dotenv.config();
const PORT = 8082 || process.env.PORT;
export const app: Application = express();
app.use(express.json());
app.use(json());
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use('/api/v1/', HomeRouter);
app.use('/api/v1/users', UsersRoutes);
connection
    .sync()
    .then(() => {
        console.log('🚀-> Simp\'L Database successfully connected 🚀<-');
    })
    .catch((err) => {
        console.log('Error', err);
    });
app.listen(PORT, (): void => {
    console.log(`Simp'L is running on -> ${PORT} <- 🚀`);
});