import React from 'react';

const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <div className="flex justify-center items-center space-x-2">
                <div className="
                    spinner-border
                    animate-spin
                    inline-block
                    w-8
                    h-8
                    border-4
                    rounded-full
                    text-yellow-500
                " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;