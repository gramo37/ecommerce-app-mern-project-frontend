import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import ProductContainer from './components/Product/ProductContainer';
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import WebFont from 'webfontloader';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';
import ProductDetailsContainer from './components/Product/ProductDetailsContainer';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  })

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="products" element={<ProductContainer />} />
        <Route exact path="product/:id/" element={<ProductDetailsContainer />} />
        <Route path="products/:keyword" element={<ProductContainer />} />
        <Route exact path="contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
