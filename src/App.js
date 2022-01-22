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
import { loadUser } from './actions/userAction';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Profile/Dashboard';
import Orders from './components/Orders/Orders';
import EditProfile from "./components/Profile/EditProfile"
import UpdatePassword from './components/Profile/UpdatePassword';
import ForgotPassword from './components/Login/ForgotPassword';
import ResetPassword from './components/Login/ResetPassword';

function App() {

  const { user, isAuthenticated } = useSelector(state => state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    // Get the user after refresh - very imp code
    store.dispatch(loadUser())
  }, []);

  return (
    <Router>
      {/* {isAuthenticated && <UserInfo user={user}/>} */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="api/v2/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="editProfile" element={<EditProfile />} />
        <Route exact path="updatePassword" element={<UpdatePassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/orders" element={<Orders />} />
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
