import React, { useState } from 'react';
import BasicCard from './BasicCard'
import { Stack ,Typography} from '@mui/material'
import Row from './Row'


function Utilisateurs() {
    const [rows, setRows] = useState([
      { id: 1, nom: 'Row 1',prenom:'fddfd', },
      { id: 2, nom: 'Row 2',prenom:'fddfd', },
      { id: 3, nom: 'Row 3',prenom:'fddfd', },
      { id: 4, nom: 'Row 4',prenom:'fddfd',},
      { id: 5, nom: 'Row 5',prenom:'fddfd',},
      ]);
    
      const handleDeleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
      };
  return (
    <>
        <Typography variant='h3' sx={{ textAlign: 'center' ,mb:15}} >Utilisateurs</Typography>
        <Stack direction='row' spacing={32} style={{display:'flex' ,  alignItems:'center'}}>

    <Typography>Id 
        </Typography>
        <Typography>Nom
        </Typography>
        <Typography>Prénom
        </Typography>
       
</Stack>
<Stack spacing={2}>
{rows.map(row => (
          <Row key={row.id} id={row.id} nom={row.nom} prenom={row.prenom}  onDelete={() => handleDeleteRow(row.id)} />
        ))}
    </Stack>

    </>
  )
}

export default Utilisateurs