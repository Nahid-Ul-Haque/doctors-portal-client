import { Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../Home/Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';


const DashBoardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} md={5}>
                    <Calendar
                        date={date}
                        setDate={setDate}
                    ></Calendar>
                </Grid>
                <Grid item xs={12} sm={7} md={7}>
                    <Appointments
                        date={date}
                    ></Appointments>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashBoardHome;