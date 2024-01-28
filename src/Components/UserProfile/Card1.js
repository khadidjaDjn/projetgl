import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';


import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const Item = ({ children, onClick }) => (
  <Paper
    onClick={onClick}
    style={{ backgroundColor: 'rgba(229, 240, 249, 0.60)', padding: '8px', width:400, textAlign: 'center', cursor: 'pointer' }}
  >
    {children}
  </Paper>
);




export default function Card1({ onInformationsClick }) {
  

  return (
    <Card sx={{ maxWidth: 600 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="thomaaaz"
        subheader='email'
        
      />
      
      <CardContent>
      <Stack spacing={2}>
  <Item>Feedback</Item>
  <Item>Contact</Item>
  <Item>Favoris</Item>
  <Item onClick={onInformationsClick}>Informations</Item>
</Stack>
      </CardContent>
     
      
    </Card>
  );
}