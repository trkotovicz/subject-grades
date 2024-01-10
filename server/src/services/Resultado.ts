import { AppDataSource } from "../database/data-source";
import { Bimestre, Disciplina, Resultado } from "../database/entity/Resultado";

export default class ResultadoService {
  insertGrade = async (
    subject: Disciplina,
    period: Bimestre,
    grade: number
  ) => {
    const result = await AppDataSource.createQueryBuilder()
      .insert()
      .into(Resultado)
      .values({ disciplina: subject, bimestre: period, nota: grade })
      .returning("*")
      .execute();

    const newGrade = result.generatedMaps[0];
    return newGrade;
  };
}
