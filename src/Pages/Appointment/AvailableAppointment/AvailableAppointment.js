import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';
import './AvailableAppointment.css';
import Alert from '@mui/material/Alert';

//data 
const bookings = [
    {
        id:0,
        name:'Teeth Orthodontics',
        time:'8:00 AM - 9:00 AM',
        space:10,
    },
    {
        id:1,
        name:'Teeth Cleaning',
        time:'5:00 pm - 8:30 pm',
        space:10,
    },
    {
        id:2,
        name:'Cosmetic Dentistry',
        time:'10-05 am - 11:30 am',
        space:10,
    },
    {
        id:3,
        name:'Cavity Protection',
        time:'7:00 am - 8:30 am',
        space:10,
    },
    {
        id:4,
        name:'Oral Surgery',
        time:'10-05 am - 11:30 am',
        space:10,
    },
    {
        id:5,
        name:'Cosmetic Dentistry',
        time:'10-05 am - 11:30 am',
        space:10,
    },
    
]
const AvailableAppointment = ({date}) => {
    const [bookingSucces,setBookingSucces] = useState(false);
    return (
        <div>
            
         <Box className='available-appointment' sx={{ flexGrow: 1 }}>
                    <Container>
                    <Typography variant="h4" align="center"  sx={{ pb: 3, color:'info.main' }}  gutterBottom component="div">
                        Available Appointments on {date.toDateString()}
                       {bookingSucces && <Alert severity="success">Appoinment Booked Successfully</Alert> } 
                    </Typography>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                 {bookings.map(booking=> <Booking key={booking.id} booking={booking} date={date} setBookingSucces={setBookingSucces}></Booking>)}
                            </Grid>
                    </Container>
                </Box>
               
        </div>
    );
};

export default AvailableAppointment;