import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Care from './Care/Care';
import Footer from './Footer/Footer';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Care></Care>
            <AppointmentBanner></AppointmentBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;