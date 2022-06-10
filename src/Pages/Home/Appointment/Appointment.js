import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import './Appointment.css';
import Typography from '@mui/material/Typography';
import doctor from '../../../images/doctor.png';
import CardMedia from '@mui/material/CardMedia';

const Appointment = () => {
    return (
        <Box className='appointment-bg' style={{backgroundImage: `url("https://i.ibb.co/k0CdJsS/appointment-bg.png")`}}>
            <Container>
                <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                    <Grid  className='appointment-text' item xs={6}>
                           <CardMedia className='doctor-png'
                                component="img"
                                alt="doctor"
                                image={doctor}
                            />
                    </Grid>
                    <Grid  item xs={4}>
                            <Typography variant="h5" color="">
                                Appointment
                            </Typography>
                            <Typography variant="h3" color=''>
                                Make an Appointment 
                                Today
                            </Typography>
                            <Typography variant="body1" color="">
                            It is a long established fact that a reader will be distractedby the readable content of a page when looking at its
                            </Typography>
                    </Grid>
            </Grid>
            </Container>   
        </Box>
            
         
    );
};

export default Appointment;