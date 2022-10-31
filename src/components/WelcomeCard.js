import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Header = styled(Typography)(() => ({
  display: "flex",
  margin: "auto",
  textAlign:'center',
  alignContent:'center',
  marginBottom:20
}));

const WelcomeCard = () => {
  return (
    <>
      <Header variant="h4" gutterBottom component="div">
        Let's discover the beauty of Photography!
      </Header>
      <Typography variant="h6" gutterBottom component="div">
      If the photographer is interested in the people in front of his lens, and if he is compassionate, it’s already a lot.
       The instrument is not the camera but the photographer.
      </Typography>
    </>
  );
};

export default WelcomeCard;
