import { Router } from "express";
import { resultadoController } from "./main";

const resultadoRouter = Router();

resultadoRouter.post('/grades', resultadoController.insertGrade);

export default resultadoRouter;