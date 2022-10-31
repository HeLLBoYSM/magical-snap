import React from "react";
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import { FormControl, Paper } from "@mui/material";
import { Context } from "../Context";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import ProductCard from "./ProductCard";
import ProductsContainer from "../productsPage/ProductsContainer";

const FiltersContainer = styled(Paper)(() => ({
    width: 200,
    height: 500
}));

const ProductsPageContainer = styled(Box)(() => ({
    display: 'flex',

}));

const ProductsPage = () => {
    const context = React.useContext(Context)

    const [category, setCategory] = React.useState("")

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }

    return (
        <ProductsPageContainer>

            <FiltersContainer elevation={24}>
                <FormControl fullWidth>
                    <InputLabel id="category-label">Category</InputLabel>

                    <Select labelId="category-label"
                        id="category-select"
                        value={category}
                        label='Category'
                        onChange={handleChangeCategory}>

                        <MenuItem value={1}>Paints</MenuItem>
                        <MenuItem value={2}>Clothes</MenuItem>

                    </Select>
                </FormControl>
            </FiltersContainer>
            <ProductsContainer>{context.state.products.map(product =>(<ProductCard product={product} key={product.name}></ProductCard>))}</ProductsContainer>
        </ProductsPageContainer>
    )
}
export default ProductsPage