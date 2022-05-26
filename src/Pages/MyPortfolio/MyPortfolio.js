import React from 'react';
import images from '../../assets/20220520_152551.jpg'
const MyPortfolio = () => {
    return (
        <div className='justify-center'>
            {/* <div class="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={images} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"></h2>
                    <p>Email: alifmirajulalam@gmail.com</p>
                    <p>Education: inter 1st year</p>
                    <p>Web development Skill: html,css,javascript,bootstrape,tailwind,Firebase Authentication,react,nodejs,mongodb</p>
                    <p>My website live link</p>
                    <p>live link : https://fruits-warehouse-1e44f.web.app/</p>
                    <p>live link : https://food-store-bd-shop.netlify.app/</p>
                    <p>live link: https://relaxed-wisp-2ae68b.netlify.app/</p>
                </div>
            </div> */}

            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={images} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold mb-4">Name: Mirajul Alam Alif</h1>
                        <p className='mb-4 text-2xl'>Email: alifmirajulalam@gmail.com</p>
                        <p className='mb-4 text-2xl'>Education: inter 1st year</p>
                        <p className='mb-4 text-xl'>Web development Skill: html,css,Sass,javascript,Es6,bootstrape,tailwind,Firebase Authentication,react,nodejs,mongodb</p>
                        <p className='mb-4 text-xl'>My website live link</p>
                        <p className='mb-4'>live link : https://fruits-warehouse-1e44f.web.app/</p>
                        <p className='mb-4'>live link : https://food-store-bd-shop.netlify.app/</p>
                        <p className='mb-4'>live link: https://relaxed-wisp-2ae68b.netlify.app/</p>
                        <p>my name is mirajul alam alif. I am a junior web developer.I love programming I went to a full stact developer.and I am learning web development in 1 year.and I am learning in web development  with programming-hero jhankar mahamud sir.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;