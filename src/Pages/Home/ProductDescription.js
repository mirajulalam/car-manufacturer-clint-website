import React from 'react';
import desImages from '../../assets/descriptionImages1.jpg';
const ProductDescription = () => {
    return (
        <section className='max-w-7xl mx-auto px-12'>
            <div className="flex justify-center items-center my-40 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className='flex-1 justify-center '>
                    <img data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className='w-9/12 rounded-lg mx-20' src={desImages} alt="" />
                </div>
                <div className='flex-1 align-middle' data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                    <h1 className='text-3xl pt-4 font-extrabold'>The are car parts made in factories</h1>
                    <p className='py-7'>The car parts will travel along a moving assembly line in a factory as robots and people work on them. Manufacturing plant workers will attach parts to the car and may work alongside robots for certain tasks. Robotic work cells will work alone to weld, solder, screw, and glue parts onto the car.</p>
                    <button class="btn btn-primary" >Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;