import React from 'react';

const ContactUs = () => {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Thanks for your information')
        event.target.reset();
    }
    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className='text-center'>
                <h3 className='text-primary  text-4xl font-bold 		 uppercase mb-10'>Contact Us</h3>
            </div>
            <div className='text-center'>
                <form onSubmit={handleSubmit} >
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="name" id="" placeholder='Your name' required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="email" name="email" id="" placeholder='Email Address' required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="address" id="" placeholder='Your address'
                        required />
                    <br />
                    <textarea className='p-3 mb-4 rounded w-5/12 border-2' name="message" id="" cols="50" rows="5" placeholder='Your message' required></textarea>
                    <br />
                    <button className='btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-primary to-primary'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;