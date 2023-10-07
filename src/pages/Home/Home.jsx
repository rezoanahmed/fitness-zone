import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';
import Plans from '../Plans/Plans';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Trainers></Trainers>
            <Plans></Plans>
            <Footer></Footer>
        </div>
    );
};

export default Home;