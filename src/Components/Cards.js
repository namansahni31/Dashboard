import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from '../images/d.png';

const Cards = ()=>{
    return(
        <>
         <Card sx={{ maxWidth: 270 }} sx={{m:2}}>
           <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt="space"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in aliquam amet tempor ipsum vestibulum suspendisse sollicitudin. Libero 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
      </CardActions>
    </Card>
        </>
        )
    }
 export default Cards;