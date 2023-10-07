import { FcGoogle } from "react-icons/fc";

import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';

const Register = () => {
    const {googleLogin, registerUser} = useContext(AuthContext);
    const handleGoogleLogin=()=>{
        googleLogin()
        .then(user=>console.log(user))
        .catch(err=>console.log(err))
    }

    // registration form submission
    const register = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("submitted", email);
        // console.log("submitted", password);
        registerUser(email, password)
        .then(user=>console.log(user))
        .catch(err=>console.log(err))

    }
    
    return (
        <>
        <Helmet>
            <title>Gym Zone | Register</title>
        </Helmet>
        <h1 className='text-2xl font-semibold text-center my-5'>Register today and start your journey!</h1>
            <div className=' flex items-center justify-center'>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={register}  className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Enter Password" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Register</button>
                        </div>
                        <div className="form-control mt-1">
                            <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-blue-50"><FcGoogle className="text-2xl"></FcGoogle>Get Started with Google</button>
                        </div>
                        <div className='mt-2'>
                            Already Have Account? <Link to='/login'><span className='text-red-500 font-medium'>Login Now!</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;