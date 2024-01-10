import { Request, Response } from 'express';
import ResultadoService from "../services/Resultado";
import { StatusCodes } from 'http-status-codes';

export default class ResultadoController {
  constructor (private resultadoService: ResultadoService) {}

  insertGrade = async (req: Request, res: Response) => {
    const { subject, period, grade } = req.body;
    const result = await this.resultadoService.insertGrade(subject, period, grade);
    res.status(StatusCodes.CREATED).json(result);
  }
}