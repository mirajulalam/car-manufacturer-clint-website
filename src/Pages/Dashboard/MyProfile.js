import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    const handleUpdate = event => {
        event.preventDefault();
        console.log('hello', event);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const link = event.target.link.value;

        const userDetails = {
            name,
            email,
            education,
            location,
            link,
        }

        fetch(`http://localhost:5000/userdetail/${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='mb-10'>
            <div className='text-center'>
                <h3 className='text-secondary  text-4xl font-bold uppercase mb-10 mt-5 '>My profile</h3>
            </div>
            <div className='text-center'>
                <form onSubmit={handleUpdate}>
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="name" id="" value={user.displayName} required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="email" name="email" id="" value={user.email} required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="education" id="" placeholder='Your education'
                        required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="location" id="" placeholder='Your location'
                        required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="link" id="" placeholder='Link'
                        required />
                    <br />

                    <br />
                    <button className='btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-primary to-primary'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default MyProfile;