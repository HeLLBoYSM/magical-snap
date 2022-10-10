import React from 'react';
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";


const FooterContainer = styled(Box)(() => ({
    display: 'flex',
    backgroundColor: 'darkblue',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBlockEnd: 50,
    marginTop: 150,
    width: "100"
}));


const Footer = () => {
    return (
        <>
            <FooterContainer elevation={3} sx={{ flexGrow: 1 }}>
                <Box>
                    <Container maxWidth="sm">
                        <Typography variant="body1" color={"white"}>
                            Program M-F: 8-17
                        </Typography>
                        <Typography variant="body1" color={"white"}>
                            Contact: -
                        </Typography>
                        <Typography variant="body1" color={"white"}>
                            Email: -
                        </Typography>
                        <a href={'https://www.facebook.com'} target="_blank" rel="noreferrer"><FacebookIcon></FacebookIcon></a>
                        <a href={'https://www.instagram.com'} target="_blank" rel="noreferrer"><InstagramIcon></InstagramIcon></a>
                    </Container>
                </Box>
            </FooterContainer>

        </>
    )

}
export default Footer