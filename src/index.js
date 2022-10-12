import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import CardsContainer from './components/CardsContainer'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <CardsContainer><Cards></Cards></CardsContainer>
    <Footer />
  </React.StrictMode>
);


