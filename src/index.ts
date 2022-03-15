import express from 'express';
import cors from './app/middlewares/cors';
import errorHandler from './app/middlewares/errorHandler';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(cors);

app.use(routes);

app.use(errorHandler)

app.listen(3001, () => {
    console.log('Server Running');
});
