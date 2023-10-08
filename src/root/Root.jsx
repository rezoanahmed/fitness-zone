import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className='w-[90%] md:w-[85%] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>   
        </div>
    );
};

export default Root;