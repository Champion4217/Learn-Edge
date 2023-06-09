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
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import NotFound from './components/layout/NotFound/NotFound';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import PaymentFail from './components/Payments/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import CreateCourses from './components/Admin/CreateCourses/CreateCourses';

function App() {


  window.addEventListener('contextmenu' , e =>{
    e.preventDefault();
  })

  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<NotFound />} />

      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CoursePage />} />
      
      <Route path='/contact' element={<Contact />} />
      <Route path='/request' element={<Request />} />
      <Route path='/about' element={<About />} />
      
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/resetpassword/:token' element={<ResetPassword />} />
      
      <Route path='/subscribe' element={<Subscribe />} /> 
      <Route path='/paymentsuccess' element={<PaymentSuccess />} />
      <Route path='/paymentfail' element={<PaymentFail />} />
      
      <Route path='/changepassword' element={<ChangePassword />} />
      <Route path='/updateprofile' element={<UpdateProfile />} />
      <Route path='/profile' element={<Profile />} />

      {/* Admin routes */}

      <Route path='/admin/dashboard' element={<Dashboard />} />
      <Route path='/admin/createcourse' element={<CreateCourses />} />
      <Route path='/admin/users' element={<Users />} />
      <Route path='/admin/courses' element={<AdminCourses />} />

    </Routes>
    <Footer />
    </Router>
}

export default App;
