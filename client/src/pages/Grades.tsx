import { useEffect, useState } from "react";
import { gradesList } from "../services/apiRequests";
import { IGrades } from "../interfaces/IGrades";
import GradeCard from "../components/GradeCard";

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
          <GradeCard grade={ grade } key={ grade.id } />
        ))}
      </div>
    </>
  )
}