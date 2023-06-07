import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/layout/Header/Header.jsx';
import Courses from './components/Course/Courses';
import Footer from './components/layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';


function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/request' element={<Request />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/resetpassword/:token' element={<ResetPassword />} />
    </Routes>
    <Footer />
    </Router>
}

export default App;
