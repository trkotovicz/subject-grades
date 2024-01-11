import { DeleteResult } from "typeorm";
import { AppDataSource } from "../database/data-source";
import { Bimestre, Disciplina, Resultado } from "../database/entity/Resultado";
import { resultSchema } from "../utils/validations";
import { ErrorTypes } from "../errors/catalog";

export default class ResultadoService {
  insertGrade = async (
    subject: Disciplina,
    period: Bimestre,
    grade: number
  ) => {
    resultSchema({ subject, period, grade });
    const result = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Resultado)
      .values({ disciplina: subject, bimestre: period, nota: grade })
      .returning("*")
      .execute();

    const newGrade = result.generatedMaps[0];
    return newGrade;
  };

  listGrades = async (): Promise<Resultado[]> => {
    const result = await AppDataSource.getRepository(Resultado)
      .createQueryBuilder()
      .getMany();
    return result;
  };

  deleteGrade = async (id: string): Promise<DeleteResult> => {
    const result = await AppDataSource.createQueryBuilder()
      .delete()
      .from(Resultado)
      .where("id = :id", { id })
      .execute();

    if (!result.affected) throw new Error(ErrorTypes.NotFoundError);
    return result;
  };
}
