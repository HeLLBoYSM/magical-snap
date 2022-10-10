import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Cards></Cards>
    <Footer />
  </React.StrictMode>
);


