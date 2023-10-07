import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/services'>Services</NavLink></li>
       <li><NavLink to='trainers'>Trainers</NavLink></li>
       <li><NavLink to='/plans'>Supplements Plan</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
       <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <NavLink to='/'><Logo></Logo></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to='/login' className='p-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600'>Login</NavLink>
                </div>
            </div>

        </>
    );
};

export default NavBar;