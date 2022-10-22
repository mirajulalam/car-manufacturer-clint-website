import React from 'react';
import swal from 'sweetalert';

const ManageProduct = ({ manage }) => {
    const { name, picture, description, price, minimumOrderQuantity, availableQuantity } = manage;

    const handleProductDelete = id => {
        swal({
            title: "Are you sure you want to delete product?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((checkout) => {
            if (checkout) {
                const url = `https://car-parts-manufacturer.onrender.com/product/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        swal("Successfully", "Product delete successfull", "success");
                    })
            }
               else {
               swal("Your product is safe!");
                }
          });
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