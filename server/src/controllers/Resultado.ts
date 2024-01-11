import { Request, Response } from 'express';
import ResultadoService from "../services/Resultado";
import { StatusCodes } from 'http-status-codes';

export default class ResultadoController {
  constructor (private resultadoService: ResultadoService) {}

  insertGrade = async (req: Request, res: Response) => {
    const { subject, period, grade } = req.body;
    const formatedGrade = grade.toFixed(2);
    const result = await this.resultadoService.insertGrade(subject, period, formatedGrade);
    res.status(StatusCodes.CREATED).json(result);
  }

  listGrades = async (_req: Request, res: Response) => {
    const result = await this.resultadoService.listGrades();
    res.status(StatusCodes.OK).json(result);
  }

  deleteGrade = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.resultadoService.deleteGrade(id);
    res.status(StatusCodes.GONE).end();
  }
}