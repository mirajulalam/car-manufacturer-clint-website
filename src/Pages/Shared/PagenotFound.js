import React from 'react';
import notfound from '../../assets/notfound.jpeg';
const PagenotFound = () => {
    return (
        <div>
            <h1 className='text-center text-primary text-4xl'>Oops!404-PAGE NOT FOUND</h1>
            <img className='w-screen' src={notfound} alt="" />
        </div>
    );
};

export default PagenotFound;