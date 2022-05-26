import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsFlagFill } from 'react-icons/bs';
const BusinessSummary = () => {
    return (
        <div className='my-28 max-w-7xl mx-auto px-12 text-center'>
            <h2 className='text-primary text-center text-4xl font-bold uppercase my-10'>Millions Uses trust us</h2>
            <h2 className=' text-center text-2xl font-bold uppercase my-10'>Our user expectation</h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow mr-10">
                <div class="stat mr-32">
                    <div class="stat-figure text-primary ">
                        <div class="avatar">
                            <FiUsers size={60} />
                        </div>
                    </div>
                    <div class="stat-title">Customer</div>
                    <div class="stat-value">150K</div>
                </div>
                <div class="stat mr-32">
                    <div class="stat-figure text-primary ">
                        <div class="avatar">
                            <BsFlagFill size={60} />
                        </div>
                    </div>
                    <div class="stat-title">Annual revenew</div>
                    <div class="stat-value">35k</div>

                </div>
                <div class="stat mr-32">
                    <div class="stat-figure text-primary">
                        <div class="avatar ">
                            <AiFillLike size={60} />
                        </div>
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">60k</div>

                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;