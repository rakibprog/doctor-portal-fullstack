import React from 'react';
import Navigation from './Shared/Navigation/Navigation';
import Services from './Services/Services';
import Appointment from './Appointment/Appointment';


const Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Services></Services>
           <Appointment></Appointment>
        </div>
    );
};

export default Home;