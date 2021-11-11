import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../../images/treatment.png'

const Care = () => {
    return (
        <Container style={{ marginTop: "100px" }}>
            <Paper elevation={1} sx={{ p: 5 }}>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} md={6}>
                        <img style={{ width: "70%", height: "420px" }} src={treatment} alt="/"></img>
                    </Grid>
                    <Grid item xs={5} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: "700", }}>
                            Exceptional Dental <br />
                            Care,On Your Terms
                        </Typography>
                        <Typography sx={{ color: "lightgray", mt: 2, wordWrap: "normal" }}>
                            Propitiate tends to suggest averting the anger or malevolence of a superior being. You might "appease" your hunger, but to speak more colorfully, you could "propitiate the gods of hunger." The word is related to propitious, an adjective meaning "likely to have or produce good results" or "being a good omen."
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', marginTop: "50px", color: "black" }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Care;