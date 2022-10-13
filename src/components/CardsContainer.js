import { Box } from "@mui/material";
import styled from "@emotion/styled";

const CardContainer = styled(Box)(() => ({
    display:'flex',
    flexWrap:'wrap',
    margin:20,
    justifyContent: 'space-around',
    alignContent:'space-around'
}));

export default CardContainer