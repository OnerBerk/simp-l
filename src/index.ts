import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import cors from 'cors';
import connection from './config/db';
import { json, urlencoded } from 'body-parser';
import { UsersController } from './controllers/users/users.controller';
import { HomeController } from './controllers/users/home.controller';

dotenv.config();
const PORT = 8082 || process.env.PORT;
export const app: Application = express();
app.use(express.json());
app.use(json());
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use('/', HomeController);
app.use('/users', UsersController);

app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {
    res.status(500).json({ message: err.message });
});
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