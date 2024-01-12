import React from "react";
import moment from "moment";
import { IGrades } from "../interfaces/IGrades";

interface GradeCardProps {
  grade: IGrades;
}

const GradeCard: React.FC<GradeCardProps> = ({ grade }) => {
  return (
    <>
      <p>{ grade.disciplina }</p>
      <p>{ grade.bimestre }</p>
      <p>Nota: { grade.nota }</p>
      <p>{ moment(grade.criadoEm).format('DD/MM/YYYY') }</p>
    </>
  )
}

export default GradeCard;