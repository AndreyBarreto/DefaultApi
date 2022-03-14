import express from 'express';
import cors from './app/middlewares/cors';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(cors);
// app.use(express.json);

app.use(routes);

app.listen(3001, () => {
    console.log('Server Running');
});
