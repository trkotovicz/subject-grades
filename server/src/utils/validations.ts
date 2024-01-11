import Joi from "joi";
import { Bimestre, Disciplina } from "../database/entity/Resultado";

export const resultSchema = (data: object): Joi.ValidationResult => {
  const periodValues = Object.values(Bimestre);
  const subjectValues = Object.values(Disciplina);

  const schema = Joi.object({
    subject: Joi.string().valid(...subjectValues),
    period: Joi.string().valid(...periodValues),
    grade: Joi.number().min(0).max(10)
  }).required();

  const { error, value } = schema.validate(data);
  if (error) throw new Error(error.message);
  return value;
}