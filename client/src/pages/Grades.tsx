import { useEffect, useState } from "react";
import { gradesList } from "../services/apiRequests";
import { IGrades } from "../interfaces/IGrades";

export default function Grades() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    try {
      gradesList().then((dataObj) => { setGrades(dataObj) });
      
      console.log(grades);
    
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <h1>GRADES</h1>
      <div>
        <h2>LISTA DE NOTAS</h2>
        { grades.map((grade: IGrades) => (
          <span key={ grade.id }>
            <p>{ grade.id }</p>
            <p>{ grade.disciplina }</p>
            <p>{ grade.bimestre }</p>
            <p>{ grade.nota }</p>
            <p>{ grade.criadoEm }</p>
            <p>{ grade.atualizadoEm }</p>
          </span>
        ))}
      </div>
    </>
  )
}