import { useContext } from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import swal from 'sweetalert';
import Aos from 'aos';
const NavBar = () => {
    // aos animation
    Aos.init({ duration: 1000 })
    const { user, logOut } = useContext(AuthContext);
    // handle log out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                swal("Great!", "You've logged out succesfully", "success");
            })
            .catch(() => {
                swal("OPPS!", "Something went wrong", "error");
            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/sponsors'>Sponsors</NavLink></li>
        <li><NavLink to='/plans'>Fitness Plan</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        // <>
        //     <div className="navbar bg-base-100" data-aos='zoom-out'>
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                     {links}
        //                 </ul>
        //             </div>
        //             <NavLink to='/'><Logo></Logo></NavLink>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 {links}
        //             </ul>
        //         </div>
                // <div className="navbar-end">
                //     {user ?
                //         <div className='flex items-center gap-2'>
                //             <div className="flex flex-col md:flex-row items-center gap-2">
                //                 {user.photoURL ?
                //                     <img src={user.photoURL} alt="" className='h-4 w-4 md:h-[35px] md:w-[35px] rounded-full' />
                //                     :
                //                     <img src='https://i.ibb.co/Bcjq85V/user.png' alt="" className='h-4 w-4  md:h-[35px] md:w-[35px] rounded-full' />

                //                 }
                //                 <p className='text-sm'>{user.displayName ? user.displayName : user.email}</p>
                //             </div>
                //             <NavLink onClick={() => handleLogOut()} className='p-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600'>Log Out</NavLink>
                //         </div>
                //         :
                //         <NavLink to='/login' className='p-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600'>Login</NavLink>
                //     }
                // </div>
        //     </div>

        // </>
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
                    {user ?
                        <div className='flex items-center gap-2'>
                            <div className="flex flex-col md:flex-row items-center gap-2">
                                {user.photoURL ?
                                    <img src={user.photoURL} alt="" className='h-4 w-4 md:h-[35px] md:w-[35px] rounded-full' />
                                    :
                                    <img src='https://i.ibb.co/Bcjq85V/user.png' alt="" className='h-4 w-4  md:h-[35px] md:w-[35px] rounded-full' />

                                }
                                <p className='text-sm'>{user.displayName ? user.displayName : user.email}</p>
                            </div>
                            <NavLink onClick={() => handleLogOut()} className='p-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600'>Log Out</NavLink>
                        </div>
                        :
                        <NavLink to='/login' className='p-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600'>Login</NavLink>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;