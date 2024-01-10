import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import resultadoRouter from './routes/Resultado';

const app = express();
app.use(express.json());
app.use(cors());

app.use(resultadoRouter);

export default app;