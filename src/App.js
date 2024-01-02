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



import Profile from './Components/HomePage/Profile';

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
        <Route path="/ProfileAvocat" element={<ProfileAvocat/>}/>


      </Routes>
    </Router>
      
  );
}

export default App;
