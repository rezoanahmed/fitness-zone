import { Link } from "react-router-dom";
import Aos from "aos";
const Error = () => {
    Aos.init({duration:1500})
    return (
        <div className="h-screen flex flex-col justify-center items-center" data-aos='zoom-in'>
            
            <h1 className="text-7xl font-bold font-serif text-red-950">404 Error!</h1>
            <br />
            <p>Your requested page is not found</p>
            <br />
            <Link to='/' className="font-semibold p-2 text-white bg-red-950 rounded-md">Go back to Homepage</Link>
            
        </div>
    );
};

export default Error;