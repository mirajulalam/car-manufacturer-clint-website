import React from 'react';

const Footer = () => {
    const currentDate = new Date().getFullYear();
    return (
        <div className='bg-primary'>
            <footer class="footer px-28 py-12  text-white">
                <div>
                    <span class="footer-title fw-bold fs-5">COMPANY</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Quality & services</a>
                    <a class="link link-hover">Brands</a>
                    <a class="link link-hover">Contact</a>
                </div>
                <div>
                    <span class="footer-title">Product</span>
                    <a class="link link-hover">Bearing</a>
                    <a class="link link-hover">Disc Clutch</a>
                    <a class="link link-hover">Iridium spark plugs</a>
                    <a class="link link-hover">Ac gear motor</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='text-center py-5'>
                <span className='text-white'>copyright &copy; {currentDate} Design By Mirajul Alam Alif</span>
            </div>
        </div>
    );
};

export default Footer;