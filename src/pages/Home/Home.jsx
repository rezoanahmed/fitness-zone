import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';
import Plans from '../Plans/Plans';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gym Zone | Home</title>
            </Helmet>
            <Hero></Hero>
            <Services></Services>
            <Trainers></Trainers>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default Home;