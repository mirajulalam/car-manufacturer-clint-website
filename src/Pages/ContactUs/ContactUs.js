import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3mn69j', 'template_bovssme', form.current, 'bC3daaJCpTsOQkKTT')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='mb-10'>
            <div className='text-center'>
                <h3 className='text-primary  text-4xl font-bold 		 uppercase mb-10'>Contact Us</h3>
            </div>
            <div className='text-center'>
                <form ref={form} onSubmit={sendEmail}>
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