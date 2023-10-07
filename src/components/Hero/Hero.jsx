import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/fvb0DTx/body.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Unleash Your Inner Strength in Every Rep, Every Step!</h1>
                        <p className="mb-5">Transform Your Mind & Body. <br />

                            Dedicated Trainers, Top-Notch Equipment. <br />
                            Join Us and Ignite Your Fitness Journey!</p>
                        <button className="bg-red-600 font-medium p-2 rounded-xl">Join Us Today!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;