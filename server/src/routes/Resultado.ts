import { Router } from "express";
import { resultadoController } from "./main";

const resultadoRouter = Router();

resultadoRouter.post('/grades', resultadoController.insertGrade);
resultadoRouter.get('/grades', resultadoController.listGrades);
resultadoRouter.delete('/grades/:id', resultadoController.deleteGrade);

export default resultadoRouter;