import React from "react";
import WelcomeCard from "../components/WelcomeCard";
import WelcomeCardContainer from "../components/WelcomeCardContainer";
import CardsContainer from '../components/CardsContainer'
import Cards from '../components/Cards'

const HomePage = () => {
    return(
    <>
    <WelcomeCardContainer><WelcomeCard></WelcomeCard></WelcomeCardContainer>
    <CardsContainer><Cards></Cards></CardsContainer>
    </>
)}
export default HomePage