import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import "./Footer.css"
import FooterFonts from './FooterFonts/FooterFonts';


const Footer = () => {
    return (
        <Container className="footer-bg" sx={{ marginTop: "150px" }}>
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 8 }} sx={{ marginBottom: "50px" }}>
                <Grid xs={2} sm={2} md={2}>
                    <>
                        <br /> <br /> <br />
                    </>
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        Emergency Dental Core <br /> <br />
                        Check Up <br /> <br />
                        Treatment Of Personal Diseases <br /> <br />
                        Tooth Extraction <br /> <br />
                        Check Up
                    </Typography>
                </Grid>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "#5CE7ED" }}>
                        Services
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        Emergency Dental Core <br /> <br />
                        Check Up <br /> <br />
                        Treatment Of Personal Diseases <br /> <br />
                        Tooth Extraction <br /> <br />
                        Check Up <br /> <br />
                        Check Up <br /> <br />
                        Check Up
                    </Typography>
                </Grid>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "#5CE7ED" }}>
                        Oral Health
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        Emergency Dental Core <br /> <br />
                        Check Up <br /> <br />
                        Treatment Of Personal Diseases <br /> <br />
                        Tooth Extraction <br /> <br />
                        Check Up <br /> <br />
                        Check Up <br /> <br />
                        Check Up
                    </Typography>
                </Grid>
                <Grid xs={2} sm={2} md={2}>
                    <Typography variant="h6" sx={{ color: "#5CE7ED" }}>
                        Our Address
                    </Typography> <br />
                    <Typography variant="p" sx={{ fontSize: "15px", color: "gray" }}>
                        New Work -101010 Hudson <br /> Yards
                        <br /> <br /> <br />
                        <FooterFonts></FooterFonts>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: "10px", color: "black" }}>+202897987</Button>
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="p" style={{ color: "gray", marginTop: "50px" }}>
                Copyright 2020 All Rights Reserved
            </Typography>
        </Container>
    );
};

export default Footer;