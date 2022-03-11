import express, { response } from 'express';
import cors from './app/middlewares/cors';
import routes from './routes';

const app = express();

app.use(cors)

app.use(routes);

app.listen(3000, () => {
    console.log('Server Running');
});
