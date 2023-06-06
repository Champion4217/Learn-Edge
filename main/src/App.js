import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/layout/Header/Header.jsx';
import Courses from './components/Course/Courses';
import Footer from './components/layout/Footer/Footer';
import Login from './components/Auth/Login';


function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/login' element={<Login />} />
      
    </Routes>
    <Footer />
    </Router>
}

export default App;
