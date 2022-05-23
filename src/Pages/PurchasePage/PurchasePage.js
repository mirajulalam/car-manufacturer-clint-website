import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const PurchasePage = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [products, setProduts] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduts(data))
    }, [products])
    return (
        <div>
            <h1 className='text-center font-bold text-primary text-4xl my-4'>Product Details information</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl px-28">
                <figure>
                    <img src={products.picture} className="w-full" alt="Album" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Name: {products.name}</h2>
                    <p>{products.description}</p>
                    <p>MinimumOrderQuantity: {products.minimumOrderQuantity}</p>
                    <p>AvailableQuantity: {products.availableQuantity}</p>
                    <p>Price: ${products.price}</p>
                    <p>{user?.displayName}</p>
                    <p>User email address: {user?.email}</p>
                    <input type="text" name="address" id="" placeholder='address' className='border-2 w-72 p-1 rounded' required />
                    <input type="number" name="number" id="" placeholder='phone number' className='border-2 w-72 p-1 rounded' required />
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Sold</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;