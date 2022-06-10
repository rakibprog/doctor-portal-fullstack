import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import loginImage from '../../images/login.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


const Register = () => {
    const [loginData,setLoginData] = useState({});
    const navigate = useNavigate();
    const {registerUser,isLoading,user,authError} = useAuth();
    const  handleOnBlur = e => {
            const field = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData}
            newLoginData[field] = value;
            setLoginData(newLoginData);
            console.log(field,value);
    }
   const handleLoginSubmit = e => {
     if(loginData.password !== loginData.password2){
         alert('Your Password Did Not Match');
         return;
     }
      registerUser(loginData.email, loginData.password, loginData.name, navigate);
       e.preventDefault();
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
                                Register
                            </Typography>

                                {!isLoading && <form onSubmit = {handleLoginSubmit}>
                                    <TextField sx={{width:1, m:3}}
                                            id="standard-basic" 
                                            label="Your Name" 
                                            variant="standard"
                                            name="name"
                                            onBlur={handleOnBlur}
                                    />
                                    <TextField sx={{width:1, m:3}}
                                        id="standard-basic" 
                                        label="Your Email" 
                                        variant="standard"
                                        name="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                    />
                                    
                                    <TextField sx={{width:1,m:3}}
                                            id="standard-basic" 
                                            label="Password" 
                                            variant="standard"
                                            type="password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                    />
                                    <TextField sx={{width:1,m:3}}
                                            id="standard-basic" 
                                            label=" Retype Password" 
                                            variant="standard"
                                            type="password"
                                            name="password2"
                                            onBlur={handleOnBlur}
                                    />
                                    <Button sx={{width:1,m:3}} type="submit" variant="contained">Register</Button>                             
                                 </form>}
                                 {isLoading &&  <Box sx={{ display: 'flex' }}><CircularProgress/> </Box>}
                                 {user?.email && <Alert severity="success">User Successfully Created</Alert> }
                                 {authError &&  <Alert severity="error">{authError}</Alert>}
                                 <NavLink style={{textDecoration:'none'}} to="/login">
                                     <Button onSubmit={handleLoginSubmit} sx={{width:1,m:3}}  variant="text">Already Register? Please Login</Button>
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

export default Register;