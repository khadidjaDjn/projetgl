import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { TextField, } from '@mui/material';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const StyledTextField = styled(TextField)({
    backgroundColor: 'rgba(229, 240, 249, 0.60)',
    color: '#000000',
    width:350,
  });
const Item = ({ children, onClick }) => (
  <Paper
    onClick={onClick}
    style={{ backgroundColor: 'rgba(229, 240, 249, 0.60)', padding: '8px', width:100, textAlign: 'center', cursor: 'pointer' }}
  >
    {children}
  </Paper>
);




export default function Card2({ onInformationsClick }) {
  

  return (
    <Card sx={{ minWidth: 600 }} >
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] , width: 70 , height: 70 }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title={<Typography variant="h5">Full Name</Typography>}
      subheader={<Typography variant="body1">Email Address</Typography>}
        
      />
      
      <CardContent>
        <Stack spacing={2} style={{display:'flex',justifyContent:'center', alignItems: 'center'}}>
      <Stack spacing={4} direction='row'>
  <Item>First Name</Item>
  <StyledTextField id="outlined-basic" label="First Name" variant="outlined" />
  
</Stack>
<Stack spacing={4} direction='row'>
  <Item>Last Name</Item>
  <StyledTextField id="outlined-basic" label="Last Name" variant="outlined" />
  
</Stack>
<Stack spacing={4} direction='row'>
  <Item>Email</Item>
  <StyledTextField id="outlined-basic" label="Email" variant="outlined" />
  
</Stack>
<Stack spacing={4} direction='row'>
  <Item>Phone</Item>
  <StyledTextField id="outlined-basic" label="Phone" variant="outlined" />
  
</Stack>

<Stack spacing={4} direction='row'>
  <Item>Current Password</Item>
  <StyledTextField id="outlined-basic" label="Current Password" variant="outlined" />
  
</Stack>
<Stack spacing={4} direction='row'>
  <Item>New Password</Item>
  <StyledTextField id="outlined-basic" label="New Password" variant="outlined" />
  
</Stack>
<Stack spacing={4} direction='row'>
  <Item>Confirm Password</Item>
  <StyledTextField id="outlined-basic" label="Confirm Password" variant="outlined" />
  
</Stack>
<Button style={{width:500}} variant="contained">save </Button>
</Stack>
      </CardContent>
     
      
    </Card>
  );
}