import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BarberItem({barberName, history, image}) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight:'auto'}}>
      <CardActionArea>
        <CardMedia sx={{maxHeight: 370}}
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />

        <CardContent sx={{background:"#bbb8b8"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{background:"#bbb8b8"}}>
            {barberName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{background:"#bbb8b8"}}>
          {history} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}