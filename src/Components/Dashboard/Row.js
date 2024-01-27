import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const Row = ({ id ,nom,prenom,type, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275, border: 1, borderRadius: 6 }}>
      <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          {id}
        </Typography>
        <Typography variant="h6" component="div">
          {nom}
        </Typography>
        <Typography variant="h6">
          {prenom}
        </Typography>
        <Typography variant="h6">
          {type}
        </Typography>
        <DeleteIcon onClick={onDelete} />
      </CardContent>
    </Card>
  );
};

export default Row;
