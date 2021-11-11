import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../../images/chair.png';
import bg from '../../../../images/bg.png'
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <section>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter} >
                        <img style={{ width: '350px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Container style={{ marginTop: "-50px" }}>
                <Box sx={{ marginRight: "65px", marginLeft: "65px" }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography sx={{ background: "#40E0D0", padding: '40px 5px', fontWeight: 500 }}>
                                Opening Hours
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography sx={{ background: "#40E0D0", padding: '40px 5px', fontWeight: 500 }}>
                                Visit Our Location
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography sx={{ background: "#40E0D0", padding: '40px 5px', fontWeight: 500 }}>
                                Contact Us
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Banner;