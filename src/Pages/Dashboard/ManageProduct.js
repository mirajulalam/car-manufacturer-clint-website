import React from 'react';

const ManageProduct = ({ manage }) => {
    const { name, picture, description, price, minimumOrderQuantity, availableQuantity, _id } = manage;
    const handleProductDelete = id => {
        const checkout = window.confirm('Are you sure you want to delete products');
        if (checkout) {
            const url = `https://gentle-hollows-65771.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log('deleted product');
                })
        }
    }


    return (
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure class="px-10 pt-10">
                <img src={picture} alt="Shoes" class=" w-full" />
            </figure>
            <div class="card-body ">
                <h2 class="card-title">Name: {name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>MinimumOrderQuantity: {minimumOrderQuantity}</p>
                <p>AvailableQuantity: {availableQuantity}</p>
                <div class="card-actions text-center">
                    <button onClick={() => handleProductDelete(_id)} class="btn btn-outline btn-primary"></button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;