import express, { Application } from 'express';
import { json, urlencoded } from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import connection from './config/db';

import HomeRouter from './routes/home.routes/home.routes';
import UsersRoutes from './routes/home.routes/users.routes';

dotenv.config();
const PORT = 8082 || process.env.PORT;
export const app: Application = express();
app.use(express.json());
app.use(json());
app.use(morgan('tiny')); //intercepte la requête et fait un log
app.use(cors());
app.use(helmet()); //protege le header
app.use(urlencoded({ extended: true }));
app.use('/api/v1/', HomeRouter);
app.use('/api/v1/users', UsersRoutes);
app.use(express.static('public'));//va permettre de servir la doc pour swagger
//todo add cache with something like apicache
//todo add timeout on request like req.setTimeout(2000,()=> ...)

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        },
    }),
);
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