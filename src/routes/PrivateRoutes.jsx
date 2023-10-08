import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location);
    // console.log(location.pathname); // this is the url which the user clicked before login
    // if the user is logged in, he should see the children
    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner w-1/4"></span>
        </div>;
    }
    if(user){
        return children;
    }
    // if the user is not logged in, he will be redirected to the login page
    // the state will redirect the user where he has clicked after the login
    return <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoutes;