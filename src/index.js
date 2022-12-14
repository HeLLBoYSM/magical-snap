import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from './blogPage/BlogPage';
import BookingPage from './booking/BookingPage';
import Layout from './components/Layout'
import { Provider } from './Context';
import HomePage from './homePage/HomePage';
import HomePageForProducts from './productsPage/HomePageForProducts';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout><HomePage></HomePage></Layout>}></Route>
      <Route path='/products-page' element={<Layout><HomePageForProducts></HomePageForProducts></Layout>}></Route>
      <Route path='/blog-page' element={<Layout><BlogPage></BlogPage></Layout>}></Route>
      <Route path='booking-page' element={<Layout><BookingPage></BookingPage></Layout>}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>

);


