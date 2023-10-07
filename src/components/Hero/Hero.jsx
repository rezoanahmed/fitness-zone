import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className="hero md:h-[90vh] lg:h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/fvb0DTx/body.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Unleash Your Inner Strength in Every Rep, Every Step!</h1>
                        <p className="mb-5">Transform Your Mind & Body. <br />
                        Step In, Power Up, Achieve More! <br />
                            Join Us and Ignite Your Fitness Journey!</p>
                            <NavLink to='/login' className="bg-red-600 font-medium p-2 rounded-lg">Join Us Today!</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;