import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';
import swal from 'sweetalert';
import AOS from "aos";
import 'aos/dist/aos.css'

const Login = () => {
    // aos animation
        AOS.init({
            duration: 1000
        })
    
    const { googleLogin, loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // sign in with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                // console.log(user)
                navigate(location?.state? location.state:'/');
            })
            .catch(err => console.log(err))
    }

    // sign in with email and password
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(() => {
                // e.target.email.value = "";
                // e.target.password.value = "";
                // swal("Welcome", "You've succesfully logged in", "success");
                navigate(location?.state? location.state:'/');

            })
            .catch(err => {
                const errorCode = err.code;
                // console.log(errorCode);
                if (errorCode == "auth/invalid-login-credentials") {
                    swal("Try Again!", "email and password did't match", "error");
                }
                else {
                    swal("OOPS!", "Something went wrong", "error");

                }
            });

    }
    return (
        <>
            <h1 className='text-2xl font-semibold text-center my-5' data-aos='zoom-out'>Login today and pump yourself!</h1>
            <div className=' flex items-center justify-center' data-aos='fade-up'>
                <div className="card shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleSignIn} className="">
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
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Login</button>
                        </div>
                        
                    </form>
                    <div className="mt-1">
                            <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-blue-50 w-full"><FcGoogle className="text-xl"></FcGoogle>Sign in with Google</button>
                        </div>
                        <div className='mt-2'>
                            <p>New user? <Link to='/register'><span className='text-red-500 font-medium'>Register Today!</span></Link></p>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Login;