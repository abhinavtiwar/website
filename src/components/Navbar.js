import React from 'react'
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {
  return (
    <div>








































      
    <nav class="navbar navbar-dark bg-primary">
  <NavLink className="navbar-brand" to="#">
LOGO
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav n-right">
    <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
  </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/profile">Profile</NavLink>
  </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/loginpage">Signin</NavLink>
  </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/signupage">Signup</NavLink>
  </li>
    
    </ul>
  </div>
</nav>

    </div>
  )
}

export default Navbar