import { Typography } from "@mui/material";
import React from "react";
import { Context } from "../Context";
import ProductCard from "../productsPage/ProductCard";
import ProductsContainer from "../productsPage/ProductsContainer";



const HomePageForProducts = () => {
    const context = React.useContext(Context)
    return (
        <>
            <div>
                <Typography sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    paddingTop:5,
                    margin: 'auto',
                    justifyContent:'center',
                    textAlign:'center'

                }}>Magical Snap will help you keep your memories alive everywhere, or give the most beautiful gifts to your loved ones</Typography>

                <ProductsContainer>{context.state.products.slice(0, 3).map(product => (<ProductCard product={product} key={product.name}></ProductCard>))}</ProductsContainer>

            </div>

        </>
    )
}

export default HomePageForProducts