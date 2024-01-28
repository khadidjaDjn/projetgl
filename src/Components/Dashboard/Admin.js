import React, { useState } from 'react';
import BasicCard from './BasicCard'
import { Stack ,Typography} from '@mui/material'
import Row from './Row'


function Admin() {
    const [rows, setRows] = useState([
        { id: 1, nom: 'John',prenom:'John',type:'avocat' },
        { id: 2, nom: 'John',prenom:'John',type:'utilisateur' },
        { id: 3, nom: 'John',prenom:'John',type:'avocat' },
        { id: 4, nom: 'John',prenom:'John',type:'avocat' },
        { id: 5, nom: 'John',prenom:'John',type:'utilisateur' },
      ]);
    
      const handleDeleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
      };
  return (
    <><Typography variant='h3' sx={{ textAlign: 'center' ,mb:5}} >Dashboard</Typography>
    <Stack direction='row' style={{display:'flex',justifyContent:'center',alignItems:'center'}} spacing={6} useFlexGap flexWrap="wrap">
    <BasicCard color="pink" title="178+" subheader="De nouveaux Comptes" />
      <BasicCard color="green" title="20+" subheader="Voir tous les Feedbacks" />
      <BasicCard color="purple" title="190+" subheader="Visiteurs" />
      </Stack>



<Typography variant='h3' sx={{ textAlign: 'center',mb:5 , mt:10}}>Nouveaux arrives</Typography>
<Stack direction='row' spacing={32} style={{display:'flex' ,  alignItems:'center'}}>

    <Typography>Id 
        </Typography>
        <Typography>Nom
        </Typography>
        <Typography>Prénom
        </Typography>
        <Typography>Type de Compte
        </Typography>
</Stack>
<Stack spacing={2}>
{rows.map(row => (
          <Row key={row.id} id={row.id} nom={row.nom} prenom={row.prenom} type={row.type} onDelete={() => handleDeleteRow(row.id)} />
        ))}
    </Stack>

    </>
  )
}

export default Admin