import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Courses from './components/Course/Courses';


function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
  </Router>
}

export default App;
