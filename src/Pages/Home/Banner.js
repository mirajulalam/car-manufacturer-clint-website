import React from 'react';
import { Link } from 'react-router-dom';
import bannerImages from '../../assets/bannerImages.jpg'
const Banner = () => {
    return (
        <div className="container">
            <div className="hero-content flex-col lg:flex-row-reverse px-20 py-20 bg-base-100">
                <img data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className='w-full lg:w-5/12 rounded-lg' src={bannerImages} alt="" />
                <div >
                    <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="text-5xl font-bold">Car manufacturers make our own parts</h1>
                    <p data-aos="fade-right" data-aos-duration="900" data-aos-delay="400" className="py-6">Virtually all automotive manufacturers produce our own parts. However, over the years, manufacturers have been turning to first-tier suppliers for the production of just-in-time components. For this reason, many parts suppliers are now as global as the vehicle manufacturers themselves.</p>
                    <button className="btn btn-primary" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600"><Link to="/dashboard">Get Started</Link></button>
                </div>
            </div>
        </div>

    );
};

export default Banner;