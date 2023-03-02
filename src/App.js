import React from 'react'
import "./App.css";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

const App = () => { 
  return (
<div>

        <BrowserRouter>
        <Navbar>

        </Navbar>
         
          <Routes>
            <Route element={<Home />} path="/" />
           
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<Login />} path="loginpage" />
            <Route element={<Signup />} path="signupage" />
            <Route element={<Profile />} path="profile" />
            
           
           
          
          </Routes>
         
        </BrowserRouter>
     

</div>

  )
}

export default App;