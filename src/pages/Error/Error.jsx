import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Helmet>
                <title>404 Error</title>
            </Helmet>
            <h1 className="text-7xl font-bold font-serif text-red-950">404 Error!</h1>
            <br />
            <p>Your requested page is not found</p>
            <br />
            <Link to='/' className="font-semibold p-2 text-white bg-red-950 rounded-md">Go back to Homepage</Link>
            
        </div>
    );
};

export default Error;