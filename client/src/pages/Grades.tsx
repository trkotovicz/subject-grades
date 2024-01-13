import { Box, Container, IconButton, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import GradeCard from "../components/GradeCard";
import { Bimestre, IGrades } from "../interfaces/IGrades";
import { deleteGrade, gradesList } from "../services/apiRequests";
import React from 'react';

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

  const handleDeleteClick = (bimestre: Bimestre, id: string) => {
    deleteGrade(id)
      .then(() => {
         setFilteredGrades(prevGrades => {
          return {
            ...prevGrades,
            [bimestre]: prevGrades[bimestre]?.filter(grade => grade.id !== id)
          };
        });
      })
      .catch((error) => {
        console.error(error);
      });
    };

    return (
      <>
        <Box>

          { Object.values(Bimestre).map((bimestre: Bimestre) => (
            <Container key={ bimestre }>

              <Typography variant="h5">
                Bimestre { bimestreMapping[bimestre] }
              </Typography>
    
              { filteredGrades[bimestre]?.length ? (
                filteredGrades[bimestre]?.map((grade: IGrades) => (

                  <>
                    <GradeCard grade={ grade } key={ grade.id } />

                    <Tooltip title="Remover" placement="top">
                      <IconButton onClick={ () => handleDeleteClick(bimestre, grade.id) }>
                        <FaRegTrashAlt />
                      </IconButton>
                    </Tooltip>

                  </>

                ))
              ) : (
                <br />
              ) }

            </Container>
          )) }

        </Box>
      </>
    )
}