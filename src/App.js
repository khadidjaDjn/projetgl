import React from 'react';

import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Auth from './Components/Auth/auth';
import LoginSignup from './Components/Auth/LoginSignup';



import HomePage from './Components/HomePage/HomePage'
import Navbar from './Components/HomePage/Navbar';
import Home from './Components/HomePage/Home';
import ProfileAvocat from './Components/ProfileAvocat';

import ContactUS from './Components/HomePage/ContactUs';

import Search from './Components/HomePage/Search';

import Appointment from './Components/Appointment';
import Appointment2 from './Components/Appointment2';


import Messages from './Components/Messages';



import Profile from './Components/HomePage/Profile';
import Userprofile from './Components/UserProfile/Userprofile';
import Dashboard from './Components/Dashboard/Dashboard';

import Chat from './Components/Chat';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth/>} >
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/Login-Signup" element={<LoginSignup/>} />
        <Route path="/Footer" element={<Footer/>} />
        </Route>

         
        <Route path="/" exact element={<HomePage/>}>
          <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Route>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/UserProfile" element={<Userprofile/>}/>
        <Route path="/DashBoard" element={<Dashboard/>}/>
        <Route path="/ProfileAvocat" element={<ProfileAvocat/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/Appointment2" element={<Appointment2/>}/>
        <Route path="/Messages" element={<Messages/>}/>

        <Route path="/Search" element={<Search/>}/>
        <Route path="/ContactUs" element={<ContactUS/>}/>
        <Route path="/Chat" element={<Chat/>}/>


      </Routes>
      
    </Router>
      
  );
}

export default App;
