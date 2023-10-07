import { FcGoogle } from "react-icons/fc";
import swal from 'sweetalert';


import { useContext } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../context/ContextProvider';

const Register = () => {
    const { googleLogin, registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(user => {
                console.log(user)
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    // registration form submission
    const register = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log("submitted", email);
        // console.log("submitted", password);
        registerUser(email, password)
            .then(user => {
                // console.log(user);
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.password.value = "";
                swal("Congratulations!", "Now You're a member of GYM ZONE", "success");
                navigate('/login')
                

            })
            .catch(err => {
                const code = err.code;
                console.log(err.code);
                if (code == 'auth/email-already-in-use') {

                    swal("Sorry!", "This email is already in use", "error");
                } else if(code == 'auth/invalid-email'){
                    swal("Invalid Email Address", "", "error");
                }
                else {
                    swal("OOPS!", "Something went wrong", "error");
                }

            })

    }

    return (
        <>
            
            <h1 className='text-2xl font-semibold text-center my-5'>Register today and start your journey!</h1>
            <div className=' flex items-center justify-center'>
                <div className="card shadow-2xl bg-base-100">
                    <form onSubmit={register} className="card-body">
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