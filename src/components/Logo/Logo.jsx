import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Logo = () => {
    // animation 
    useEffect(()=>{
        Aos.init({
            duration: 1500
        })
    },[])
    return (
        <div>
            <p className='font-bold md:text-2xl'>Gym <span className='text-red-500' data-aos='fade-in'>Zone</span></p>
        </div>
    );
};

export default Logo;