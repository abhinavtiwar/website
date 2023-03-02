import React, {useState} from 'react';
import Box from '@mui/material/Box';
import {NavLink,useNavigate } from "react-router-dom";
import "../App.css";

import TextField from '@mui/material/TextField';
import { Button,Divider} from '@mui/material';


const Login = () => {
  const navigate = useNavigate();

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const loginUser= async (e) =>{
e.preventDefault();
const res= await fetch("http://localhost:4000/auth/signin",{
  method:"POST",
  headers:{
    "Content-Type" :"application/json"
  },
  body:JSON.stringify({
    email,
    password
  })
});

const data= res.json();

if(data.status === 400 || !data){
window.alert("Invalid Credentials");
}else{
  window.alert("Login Sucessfully"); 
  navigate("/");
}
}


  return (
    <div className="login_img1" style={{ height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body card_login">
            <img  className="login_image" src="https://pbs.twimg.com/profile_images/1174747027986452480/cSlw47L-_400x400.png" alt="" />
              <h3 className="text-muted text-center">Sign In</h3>
              <hr />
              <form method="POST" className="signin-form" id="signin-form">
                <div className="form-group">
               
                  <TextField
                    name="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    name="password"
                    id="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mt: 3 }}
                  />
                 
                </div>
                <div className="form-group form-button">
                  <Button
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="register"
                    type="submit"
                    fullWidth
                    onClick={loginUser}
                    variant="contained"
                    sx={{ mt: 5 }}
                  >
                    Log In
                  </Button>
                  <NavLink className="navlink_class" to="/signupage"  sx={{ mt: 4 }}>Create an Account.</NavLink>
                </div>
              </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login