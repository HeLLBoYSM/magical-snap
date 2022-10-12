import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./images/magical-snap.png"
          alt="Nature"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nature
          </Typography>
          <Typography variant="body2" color="text.secondary">
          “Heaven is under our feet as well as over our heads.
           In every walk with nature one receives far more than he seeks."
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./images/magical-snap2.png"
          alt="Kids Models"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kids Models
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This enables Milou to successfully build a modelling career for these children.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./images/magical-snap4.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Adults Models
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Check out our adult model kits selection for the very best in unique or custom, 
          handmade pieces from our building & construction
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
