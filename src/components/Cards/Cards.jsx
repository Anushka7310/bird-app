import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Cards.css"
export default function ActionAreaCard({
    _id,
    commonName,
    scientificName,
    order,
    spottedAt,
    spottedLocation,
  }) {
  return (
    <div className='card_container'>
        <Card sx={{ width: 445,height: 200, display: 'flex' }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }} >
        <CardMedia
          component="img"
          height="260"
          image="https://images.pexels.com/photos/2629372/pexels-photo-2629372.jpeg?cs=srgb&dl=pexels-frank-cone-2629372.jpg&fm=jpg"
          alt="birda"
        />
        <CardContent  sx={{ width: 445,height: 190 }} >
          <Typography gutterBottom variant="h6" component="div">
            {commonName}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {scientificName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {order}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {spottedAt}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {spottedLocation}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}