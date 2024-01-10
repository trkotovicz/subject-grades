import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import resultadoRouter from './routes/Resultado';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(cors());

app.use(resultadoRouter);

app.use(errorHandler);

export default app;