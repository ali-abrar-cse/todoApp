import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Helmet from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/');
    }

    if (error) {
        errorElement = <p className='text-[#96be25] bg-red-700 my-4 text-lg'>Error: {error?.message}</p>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);

        await signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate("/Registration");
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto mt-[4vw] mb-[300px]  md:mb-0'>
        <Helmet>
            <title>To-Do App-Login</title>
        </Helmet>
            <h1 className='md:text-[4vw] text-3xl md:py-6 text-[#96be25] font-bold shadow-2xl shadow-black mx-16'>Login Form</h1>
            <section className="h-screen mb-32">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="email"
                            placeholder="Email address"
                            ref={emailRef}
                            required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-4 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#96be25] focus:outline-none shadow-lg shadow-white hover:shadow-xl hover:shadow-white"
                            name="password"
                            placeholder="Password"
                            ref={passwordRef}
                            required
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#96be25] checked:border-[#96be25] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck3"
                            />
                            <label className="form-check-label inline-block text-[#96be25]" htmlFor="exampleCheck2">Remember me</label>
                            </div>
                            <p
                            onClick={resetPassword}
                            className="text-[#96be25] hover:text-yellow-400 focus:text-yellow-500 active:text-[#96be25] duration-200 transition ease-in-out cursor-pointer"
                            >Forgot password?</p
                            >
                        </div>
                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-[#96be25] text-white font-medium text-sm leading-snug uppercase rounded shadow-lg hover:bg-[#6f9111] hover:shadow-xl hover:shadow-white focus:bg-[#4b6308] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#354703] active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full shadow-white"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            Sign in
                        </button>

                        {errorElement}

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0 text-[#96be25]">OR</p>
                        </div>
                        <SocialLogin></SocialLogin>
                        <div className='flex items-center mt-6'>
                            <p className='text-[#96be25] text-left'> Don't have an account?</p>
                            <Link to="/Registration" onClick={navigateRegister} className="text-red-600 ml-2 hover:text-yellow-400 focus:text-yellow-500 active:text-[#96be25] duration-200 transition ease-in-out">Register</Link>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Login;