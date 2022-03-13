import express, { json } from 'express';
import cors from './app/middlewares/cors';
import routes from './routes';

const app = express();

app.use(cors);
app.use(json);

app.use(routes);

app.listen(3001, () => {
    console.log('Server Running');
});
