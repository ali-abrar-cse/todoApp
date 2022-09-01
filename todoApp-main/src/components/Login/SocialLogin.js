import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../images/social icons/google.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-white bg-red-700  my-4 text-lg'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/');
    }
    return (
        <div>
                        {errorElement}
                        <button
                            onClick={() => signInWithGoogle()} 
                            className="px-7 py-3 text-black font-medium text-sm border-2 rounded-lg border-black leading-snug uppercase rounded shadow-lg hover:bg-gray-500 hover:shadow-white focus:shadow-2xl focus:outline-none focus:ring-0 active:shadow-2xl active:shadow-white transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-white shadow-white"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            <img className='w-[20px] mr-2' src={google} alt='' />Continue with Google
                        </button>
        </div>
    );
};

export default SocialLogin;