import React from 'react';
import Hero from '../../components/Hero/Hero';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;