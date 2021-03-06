import React from 'react';

const Review = ({ review }) => {
    const { name, reviewText,location, rating,img } = review;
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000" className="card lg:mx-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Rating: {rating}</h2>
                <p>{reviewText}</p>
                <div className="flex items-center mt-5">
                <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;