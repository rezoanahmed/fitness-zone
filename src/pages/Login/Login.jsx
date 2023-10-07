
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';

const Login = () => {
    const {googleLogin} = useContext(AuthContext);
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(user=>console.log(user))
        .catch(err=>console.log(err))
    }
    return (
        <>
        <Helmet>
            <title>Gym Zone | Login</title>
        </Helmet>
        <h1 className='text-2xl font-semibold text-center my-5'>Login today and pump yourself!</h1>
            <div className=' flex items-center justify-center'>
                <div className="card shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Login</button>
                        </div>
                        <div className="form-control mt-1">
                            <button onClick={handleGoogleLogin} className="border px-4 py-2 rounded-lg hover:bg-blue-50">Get Started with Google</button>
                        </div>
                        <div className='mt-2'>
                            New user? <Link to='/register'><span className='text-red-500 font-medium'>Register Today!</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;