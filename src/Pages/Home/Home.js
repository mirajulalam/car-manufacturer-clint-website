import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Parts from './Parts';
import ProductDescription from './ProductDescription';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
            <ProductDescription />
            <ContactUs />
        </div>
    );
};

export default Home;