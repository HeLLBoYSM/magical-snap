import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import CardsContainer from './components/CardsContainer';
import WelcomeCard from './components/WelcomeCard';
import WelcomeCardContainer from './components/WelcomeCardContainer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <WelcomeCardContainer><WelcomeCard></WelcomeCard></WelcomeCardContainer>
    <CardsContainer><Cards></Cards></CardsContainer>
    <Footer />
  </React.StrictMode>
);


