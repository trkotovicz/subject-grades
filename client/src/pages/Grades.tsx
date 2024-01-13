import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import GradeCard from "../components/GradeCard";
import { Bimestre, IGrades } from "../interfaces/IGrades";
import { gradesList } from "../services/apiRequests";

export default function Grades() {
  const [grades, setGrades] = useState([]);
  const [filteredGrades, setFilteredGrades] = useState<{ [key in Bimestre]?: IGrades[] }>({});
    
  const bimestreMapping = {
    [Bimestre.PRIMEIRO]: 1,
    [Bimestre.SEGUNDO]: 2,
    [Bimestre.TERCEIRO]: 3,
    [Bimestre.QUARTO]: 4
  };

  useEffect(() => {
    try {
      gradesList().then((dataObj) => { 
        setGrades(dataObj);
        setFilteredGrades(prepareGrades(dataObj));
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const prepareGrades = (rawGrades: IGrades[]) => {
    let bimestres: { [key in Bimestre]?: IGrades[] } = {};
    rawGrades.forEach((grade: IGrades) => {
      if (!bimestres[grade.bimestre]) {
        bimestres[grade.bimestre] = [];
      }
      bimestres[grade.bimestre]!.push(grade);
    });
 
    for (let bimestre in bimestres) {
      bimestres[bimestre as Bimestre]!
        .sort((a, b) => a.disciplina.localeCompare(b.disciplina));
    }
    return bimestres;
  };
 
  const orderedBimestres = Object.keys(filteredGrades)
    .sort((a, b) => (
      bimestreMapping[a as Bimestre] - bimestreMapping[b as Bimestre]));
 
  return (
    <>
      <Box>
        { orderedBimestres.map((bimestre: string) => (
          <Box>
            <Typography variant="h6">Bimestre { bimestreMapping[bimestre as Bimestre] }</Typography>
            { filteredGrades[bimestre as Bimestre]!.map((grade: IGrades) => (
              <GradeCard grade={ grade } key={ grade.id } />
            )) }
          </Box>
        )) }
      </Box>
    </>
  )
 }
 