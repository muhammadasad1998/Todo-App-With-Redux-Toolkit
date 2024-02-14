import { Button, Paper, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Input_Components from "../Input_Component/Input_Components";
import { Credentials_Data } from "../../utils/Credentials_Data";
import { useNavigate } from "react-router-dom";


const Login_Form = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const [checkCredentials, setCheckCredentials] = useState(false);

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.id]: event.target.value,
        });
        // console.log(userData);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.username === Credentials_Data.username && userData.password === Credentials_Data.password) {
          localStorage.setItem("isLoggedIn", true);
          navigate("/dashboard");
        } else {
            setCheckCredentials(true);
            // alert("Login Failed");

        }
    
    }

    return (
    <>
    <Paper onSubmit={handleSubmit} component="form" className="max-w-lg p-4" elevation={24}>
      <Typography variant="h5" fontWeight="bold" textAlign="center">
        Login Form
      </Typography>
      {checkCredentials && (
        <Typography variant="h6" color="red" textAlign="center">
          Username or Password is incorrect.
        </Typography>
      )}

      <Input_Components
        placeholder="Username"
        type="text"
        label="Username"
        id="username"
        onChange={handleChange}
        required={true}
      />
      <Input_Components
        placeholder="Password"
        type="password"
        label="Password"
        id="password"
        onChange={handleChange}
        required={true}
      />
      <Button type="submit" variant="contained" color="success" sx={{ width: "100%", mt: 3 }}>
        Login
      </Button>
      </Paper>
    </>
  );
};

export default Login_Form;
