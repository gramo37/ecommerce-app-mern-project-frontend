import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/About/About'
import ProductContainer from './components/Product/ProductContainer';
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import WebFont from 'webfontloader';
import store from './store'
import { useSelector } from "react-redux"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import ProductDetailsContainer from './components/Product/ProductDetailsContainer';
import LoginSignup from './components/Login/LoginSignup';
// import { loadUser } from './actions/userAction';
// import UserInfo from './components/Navbar/UserInfo';


function App() {

  const { user, isAuthenticated } = useSelector(state => state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })

    // store.dispatch(loadUser())
  }, []);

  return (
    <Router>
      {/* {isAuthenticated && <UserInfo user={user} />} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="products" element={<ProductContainer />} />
        <Route exact path="product/:id/" element={<ProductDetailsContainer />} />
        <Route path="products/:keyword" element={<ProductContainer />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
