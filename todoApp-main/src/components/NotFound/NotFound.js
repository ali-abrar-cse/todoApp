import React from 'react';
import { Helmet } from 'react-helmet-async';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
        <Helmet>
            <title>Gymniac-Not Found</title>
        </Helmet>
            <img className='w-full md:my-[-200px]' src='404-error-1.gif' />
        </div>
    );
};

export default NotFound;