import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({ manage }) => {
    const { name, picture, description, price, minimumOrderQuantity, availableQuantity } = manage;

    const handleProductDelete = id => {
        const checkout = window.confirm('Are you sure you want to delete product');
        if (checkout) {
            const url = `https://tranquil-anchorage-32269.herokuapp.com/product/${id}`;
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    toast('product delete successfull')
                })
        }
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
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
                    <button onClick={() => handleProductDelete(manage._id)} class="btn btn-outline btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;