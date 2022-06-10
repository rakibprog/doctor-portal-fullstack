import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Booking.css';
import BookingModal from '../BookingModal/BookingModal';
const Booking = ({booking,date,setBookingSucces}) => {
     const {name,space,time} = booking;
     const [BookingOpen, setBookingOpen] = React.useState(false);
     const handleOpen = () => setBookingOpen(true);
     const handleClose = () => setBookingOpen(false);
    return (
       <>
        <Grid item xs={2} sm={4} md={4}>
                <Paper elevation={3} sx={{py:5}}>
                    <Typography align="center" variant="h5" sx={{ color:'info.main'}} component="div" gutterBottom>
                    {name}
                    </Typography>
                    <Typography align="center" variant="subtitle1" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography  align="center" variant="caption" gutterBottom component="div">
                        {space} SPACES AVAILABLE.
                    </Typography>
                     <div className='book-btn'>
                        <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
                     </div>
                </Paper>
         </Grid>
        <BookingModal handleClose={handleClose} BookingOpen={BookingOpen} booking={booking} date={date} setBookingSucces={setBookingSucces}></BookingModal>
       </>
        

         
    );
};

export default Booking;