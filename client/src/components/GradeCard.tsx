import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from "moment";
import React from "react";
import { IGrades } from "../interfaces/IGrades";

interface GradeCardProps {
  grade: IGrades;
}

const GradeCard: React.FC<GradeCardProps> = ({ grade }) => {
  return (
    <>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            { grade.disciplina }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            { moment(grade.criadoEm).format('DD/MM/YYYY') }
          </Typography>
          <Typography variant="body2">
            Nota: { grade.nota }
          </Typography>
        </CardContent>
      </Card>


      {/* <p>{ grade.disciplina }</p>
      <p>{ moment(grade.criadoEm).format('DD/MM/YYYY') }</p>
      <p>Nota: { grade.nota }</p> */}
    </>
  )
}

export default GradeCard;