import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;