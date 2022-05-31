import React from 'react';

const Footer = () => {
    const currentDate = new Date().getFullYear();
    return (
        <div className='bg-primary'>
            <footer className="footer px-28 py-12  text-white">
                <div>
                    <span className="footer-title fw-bold fs-5">COMPANY</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Quality & services</a>
                    <a className="link link-hover">Brands</a>
                    <a className="link link-hover">Contact</a>
                </div>
                <div>
                    <span className="footer-title">Product</span>
                    <a className="link link-hover">Bearing</a>
                    <a className="link link-hover">Disc Clutch</a>
                    <a className="link link-hover">Iridium spark plugs</a>
                    <a className="link link-hover">Ac gear motor</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='text-center py-5'>
                <span className='text-white'>copyright &copy; {currentDate} Design By Mirajul Alam Alif</span>
            </div>
        </div>
    );
};

export default Footer;