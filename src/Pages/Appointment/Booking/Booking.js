import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, slot, time } = booking || {}
    const [openBooking, setOpenBooking] = React.useState(false);
    const openModal = () => setOpenBooking(true);
    const closeModal = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={8} md={4} >
                <Paper elevation={3} sx={{ py: 3, m: 3 }}>
                    <Typography sx={{ color: '#0EE3F9', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} variant="h6" component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ color: 'lightgray', fontWeight: 600, fontSize: "15px", mb: 3 }} variant="h5" gutterBottom component="div">
                        {slot} SLOT AVAIABLE
                    </Typography>
                    <Button onClick={openModal} sx={{ backgroundColor: "#0EE3F9" }} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                closeModal={closeModal}
                booking={booking}
                openBooking={openBooking}
                date={date}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>

    );
};

export default Booking;