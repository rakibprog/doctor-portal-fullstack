import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginImage from '../../images/login.png';
import './Login.css';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {user,loginUser,isLoading,authError,signInWithGoogle} = useAuth(); 
    const location = useLocation();
    const navigate = useNavigate();
    const  handleOnChange = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData}
            newLoginData[field] = value;
            setLoginData(newLoginData);
    }
   const handleLoginSubmit = e => {
       loginUser(loginData.email,loginData.password,location,navigate);
       e.preventDefault();
   }
   const handleGoogleSubmit = () => {
        signInWithGoogle(location,navigate);
   }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid  
                            justifyContent="center"
                            alignItems="center" 
                            container
                            item xs={12} sm={6} md={6}>
                        <div className='login-form'>
                            <Typography align='center' variant="h6" gutterBottom component="div">
                                 Login
                            </Typography>
                            { !isLoading &&
                                <form onSubmit = {handleLoginSubmit}>
                                    <TextField sx={{width:1, m:3}}
                                        id="standard-basic" 
                                        label="Your Email" 
                                        variant="standard"
                                        name="email"
                                        onChange={handleOnChange}
                                    />
                                    <TextField sx={{width:1,m:3}}
                                            id="standard-basic" 
                                            label="Password" 
                                            variant="standard"
                                            type="password"
                                            name="password"
                                            onChange={handleOnChange}
                                    />
                                    <Button sx={{width:1,m:3}} type="submit" variant="contained">Login</Button> 
                                                                
                                 </form> }
                                 { !isLoading  &&
                                    <Button onClick={handleGoogleSubmit} sx={{width:1,m:3}}   variant="contained">Google Sign In</Button>    
                                 }
                                 
                                 {isLoading &&  <Box sx={{ display: 'flex' }}><CircularProgress/> </Box>}
                                 {user?.email && <Alert severity="success">Log In Successfully</Alert> }
                                 {authError &&  <Alert severity="error">{authError}</Alert>}
                                 <NavLink style={{textDecoration:'none'}} to="/register">
                                     <Button sx={{width:1,m:3}}  variant="text">New User? Please Register</Button>
                                 </NavLink>    
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="loginImg">
                             <img src={loginImage} alt=""/>
                        </div>
                    </Grid>
                </Grid>
            </Container>       
      </Box>
    );
};

export default Login;