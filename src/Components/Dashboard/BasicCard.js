import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const BasicCard = ({ color, title, subheader }) => {
  return (
    <Card sx={{ maxWidth: 275 , border:1 , borderRadius: 5}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: color , width: 50, height: 50 ,color:color}}>
            .
          </Avatar>
        }
        title={<Typography variant="h5">{title}</Typography>}
        subheader={<Typography variant="body1">{subheader}</Typography>}
      />
    </Card>
  );
};

export default BasicCard;
