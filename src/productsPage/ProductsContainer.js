import styled from "@emotion/styled";
import { Box } from "@mui/material";

const ProductsContainer = styled(Box)(() => ({
    display: "flex",
    flexWrap:'wrap',
    margin:20,
    justifyContent:'space-around',
    alignContent:'space-around',
    
}));

export default ProductsContainer