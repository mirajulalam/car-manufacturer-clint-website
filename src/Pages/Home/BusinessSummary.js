import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsFlagFill } from 'react-icons/bs';

const BusinessSummary = () => {
    return (
        <div className='my-28 max-w-7xl mx-auto px-12 text-center'>
            <h2 className='text-primary text-center text-4xl font-bold uppercase my-10'>Millions User trust us</h2>
            <h2 className=' text-center text-2xl font-bold uppercase my-10'>Our user expectation</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow mr-10">
                <div className="stat mr-32">
                    <div className="stat-figure text-primary ">
                        <div className="avatar">
                            <FiUsers size={60} />
                        </div>
                    </div>
                    <div className="stat-title">Customer</div>
                    <div className="stat-value">33k</div>
                </div>
                <div className="stat mr-32">
                    <div className="stat-figure text-primary ">
                        <div className="avatar">
                            <BsFlagFill size={60} />
                        </div>
                    </div>
                    <div className="stat-title">Annual revenew</div>
                    <div className="stat-value">35k</div>
                </div>
                <div className="stat mr-32">
                    <div className="stat-figure text-primary">
                        <div className="avatar ">
                            <AiFillLike size={60} />
                        </div>
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value">60k</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;