import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deepPurple } from "@mui/material/colors";
import styled from "@emotion/styled";
import { Context } from "../Context";


const Price = styled(Typography)(() => ({
  color: deepPurple,

}))
const ButtonCard = styled(Button)(() => ({
  backgroundColor:"#3399ff",
  color:"#000"
  
}))



export default function ProductCard(props) {

  const context = React.useContext(Context)
  const addToCart = () =>{
      context.dispatch({code:'ADD - PRODUCT-TO-CART', payload:props.product})}


  return (
    <Card sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.product.image}
        alt="Product Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
          
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.product.description}
        </Typography>

        <Price>
          {props.product.price}
        
        </Price>

      </CardContent>

      <CardActions>
        
        <ButtonCard size="small" onClick={(event)=>addToCart(event)}>ADD TO CART</ButtonCard>
        
      </CardActions>
    </Card>
  );
  }