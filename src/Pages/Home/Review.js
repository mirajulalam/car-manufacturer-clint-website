import React from 'react';

const Review = ({ review }) => {
    const { name, reviewText, email, rating } = review;
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Rating: {rating}</h2>
                <p>{reviewText}</p>
                <div className="flex items-center mt-5">
                    <div>
                        <h4 className='text-xl'>Name: {name}</h4>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;