import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';


const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth();
    let location = useLocation();
    if(isLoading){return <CircularProgress></CircularProgress>}
    if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} />;
    
};

export default PrivateRoute;