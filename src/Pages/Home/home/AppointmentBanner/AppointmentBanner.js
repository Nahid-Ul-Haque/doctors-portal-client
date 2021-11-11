import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import doctor from '../../../../images/doctor.png'
import bg from '../../../../images/appointment-bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity'

}

const AppointmentBanner = () => {
    return (
        <Container style={appointmentBanner} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: "100%", marginTop: '-150px' }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                                Appointment
                            </Typography>
                            <Typography variant="h4" sx={{ letterSpacing: 6, fontStyle: "italic", fontWeight: 600 }} style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;