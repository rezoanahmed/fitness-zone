import Aos from "aos";

const Logo = () => {
    // animation 
    Aos.init({duration:1500});
    return (
        <div>
            <p className='font-bold md:text-2xl'>Fitness <span className='text-red-500' data-aos='fade-in'>Zone</span></p>
        </div>
    );
};

export default Logo;