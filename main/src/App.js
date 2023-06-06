import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/layout/Header';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
}

export default App;
