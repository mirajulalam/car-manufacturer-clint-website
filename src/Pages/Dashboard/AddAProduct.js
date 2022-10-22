import React from 'react';
import swal from 'sweetalert';

const AddAProduct = () => {

    const handleUpdate = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const description = event.target.description.value;
        const minimumOrderQuantity = event.target.minimumOrderQuantity.value;
        const availableQuantity = event.target.availableQuantity.value;
        const price = event.target.price.value;

        const addProduct = {
            name,
            description,
            minimumOrderQuantity,
            availableQuantity,
            price,
            picture
        }

        fetch('https://car-parts-manufacturer.onrender.com/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                swal("Successfully", "Product added successfull", "success");
                event.target.reset();
            })
    }
    return (
        <section data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='mb-10'>
            <div className='text-center'>
                <h3 className='text-secondary  text-4xl font-bold 		 uppercase mb-5 mt-5'>Add A Product</h3>
            </div>
            <div className='text-center'>
                <form onSubmit={handleUpdate}>
                    <input className='p-3 mb-2 rounded w-5/12 border-2' type="text" name="name" id="" placeholder='name' required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="description" id="" placeholder='description'
                        required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="number" name="minimumOrderQuantity" id="" placeholder='minimumOrderQuantity'
                        required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="number" name="availableQuantity" id="" placeholder='availableQuantity'
                        required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="number" name="price" id="" placeholder='price'
                        required />
                    <br />
                    <input className='p-3 mb-4 rounded w-5/12 border-2' type="text" name="picture" id="" placeholder='Images url'
                        required />
                    <br />
                    <button className='btn btn-primary text-uppercase text-white font-bold bg-gradient-to-r from-primary to-primary'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAProduct;