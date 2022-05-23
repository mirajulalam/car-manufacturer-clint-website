import React from 'react';
import Footer from '../Shared/Footer';
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
            <Footer />
        </div>
    );
};

export default Home;