import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png";
import  "./AppointmentHeader.css";
import { Container } from '@mui/material';
import Calendar from './../../Shared/Calendar/Calendar';
import Typography from '@mui/material/Typography';

const AppointmentHeader = ({date,setDate}) => {
    return ( 
            <Box className='appointment-header' style={{ 
                    backgroundImage: `url("https://i.ibb.co/n8Bqq4X/chair.png")` 
                }}>
                <Box className='appointment-blur'>
                    <Container>
                        <Grid container  spacing={3}>
                            <Grid item xs={6} sm={12} md={6}>
                                <Typography align="left" variant="h4"  component="div" gutterBottom>
                                        Appointment
                                </Typography>
                                <Calendar date={date} setDate={setDate}></Calendar>
                            </Grid>
                            <Grid item xs={6} sm={12} md={6}>
                                    <Box className='appointment-chair'>
                                        <img src={chair} alt=""/>     
                                    </Box>
                            </Grid>
                        </Grid> 
                    </Container>
                 </Box>
            </Box>
        
    );
};

export default AppointmentHeader;