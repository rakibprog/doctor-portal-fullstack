import React from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


const App = () => {
  return (
    <div>
       <AuthProvider>
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}/>
                <Route path="dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />               
              </Routes> 
          </BrowserRouter>  
        </AuthProvider> 
    </div>
  );
};

export default App;