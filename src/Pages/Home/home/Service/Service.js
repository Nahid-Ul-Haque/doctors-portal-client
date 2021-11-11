import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>


            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: "auto", height: "80px", margin: "0px auto" }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: "600" }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: "#999999" }} variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;