import * as dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import { UsersController } from './controllers/users/users.controller';

dotenv.config();
const PORT = 8082 || process.env.PORT;
export const app: Application = express();
app.use(express.json());
//app.use(cors());
app.use('/users', UsersController);
app.get('/', (req, res) => res.send('🏠'));

app.listen(PORT, (): void => {
    console.log(`Simp'L is running on -> ${PORT} <- 🚀`);
});