import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <h1 className='text-2xl font-semibold text-center my-5'>Register today and start your journey!</h1>
            <div className=' flex items-center justify-center'>
                <div className="card shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Full Name" className="input input-bordered" required />
                        </div>
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
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Register</button>
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