import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";
import Heart from "../img/abhinavji.jpg";
const Home = () => {
  return (
    <div className="main">
    <div className="left">
        <img src={Heart} alt="" />
    </div>
    <div className="right">
        <div className="name"><h1>Abhinav Tiwari</h1></div>
        <div className="other">
            <div className="position">
                <p>Web developer | Programmer | UI designer</p>
            </div>
            <div className="bio">
                <p>Hello! I am Web Developer from India. I have rich experience in web site design and building, also I am good at React Js. I love to talk with you about our unique.</p>
            </div>

            <NavLink to="contactpage">Contact me </NavLink>
            <div className="social-btn">
                <i className="lab la-github"></i>
                <i className="lab la-instagram"></i>
                <i className="lab la-facebook"></i>
            </div>
        </div>
    </div>
</div>
  )
}

export default Home;