
import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {NavLink,useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { Button, Divider } from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })
  let name,value;
  const handleInputs=(e) =>{
    console.log(e);
   name=e.target.name;
   value=e.target.value;
   setUser({...user,[name]:value})
  }
const PostData=async (e) =>{
  e.preventDefault();
  const {name,email,phone,work,password,cpassword} =user;
  const res = await fetch("http://localhost:4000/auth/register" ,{
   method:"POST",
   headers:{
    "Content-Type" :"application/json"
   },
   body:JSON.stringify({
    name,email,phone,work,password,cpassword
   })
  })
  const data= await res.json();
  if(data.status=== 422 || !data){
    window.alert("Invalid Registration");
    console.log("Invalid Registration");
  }else{
    window.alert(" Registration Sucessful");
    console.log(" Registration Sucessful ");

    navigate("/loginpage");
  }
}

  return (
    <div style={{ background: "#eee", height: "100vh" }}>
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-muted text-center">Sign up</h3>
              <hr />
              <form method='POST' className="register-form" id="register-form">
                <div className="form-group">
                  <TextField
                    name="name"
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={user.name}
                    onChange={handleInputs}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    name="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={user.email}
                    onChange={handleInputs}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    name="phone"
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    value={user.phone}
                    onChange={handleInputs}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    name="work"
                    id="work"
                    label="Profession"
                    variant="outlined"
                    fullWidth
                    value={user.work}
                    onChange={handleInputs}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    name="password"
                    id="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    value={user.password}
                    onChange={handleInputs}
                    sx={{ mt: 3 }}
                  />
                  <TextField
                    name="cpassword"
                    id="cpassword"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    value={user.cpassword}
                    onChange={handleInputs}
                    sx={{ mt: 3 }}
                  />
                </div>
                <div className="form-group form-button">
                  <Button
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={PostData}
                    sx={{ mt: 5 }}
                  >
                    Register
                  </Button>
                  <NavLink to="/loginpage"  sx={{ mt: 4 }}>I am already register</NavLink>
                </div>
              </form>
              </div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
