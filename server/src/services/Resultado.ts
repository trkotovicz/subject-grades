import { AppDataSource } from "../database/data-source";
import { Bimestre, Disciplina, Resultado } from "../database/entity/Resultado";
import { resultSchema } from "../utils/validations";

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
}
