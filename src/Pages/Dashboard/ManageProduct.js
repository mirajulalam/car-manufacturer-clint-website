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
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className=" w-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">Name: {name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>MinimumOrderQuantity: {minimumOrderQuantity}</p>
                <p>AvailableQuantity: {availableQuantity}</p>
                <div className="card-actions text-center">
                    <button onClick={() => handleProductDelete(manage._id)} className="btn btn-outline btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;