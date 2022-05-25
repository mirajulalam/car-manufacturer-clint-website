import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from './../Shared/Loading';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProdut] = useState({});

    useEffect(() => {
        const url = `https://tranquil-anchorage-32269.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProdut(data))
    }, [productId])

    const handleSubmit = event => {
        event.preventDefault()
        const quantity = event.target.quantiy.value;
        const userName = user?.displayName;
        const email = user?.email;
        const name = product.name;
        const picture = product.picture;
        const description = product.description;
        const minimumOrderQuantity = product.minimumOrderQuantity;
        const availableQuantity = product.availableQuantity;
        const price = product.price;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        const uploadProduct = {
            quantity,
            userName,
            email,
            name,
            picture,
            description,
            minimumOrderQuantity,
            availableQuantity,
            price,
            address,
            phone
        }


        fetch('https://tranquil-anchorage-32269.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uploadProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Product purchase successfully')
                }
                else {
                    toast('Product purchase failed')
                }
                const newquantity = product.availableQuantity - quantity;
                console.log(newquantity)
                event.target.reset()
                console.log(data);

            })

        console.log(uploadProduct)
    }

    if (loading) {
        return <Loading />
    }

    console.log(product)

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <img src={product.picture} alt="" className='w-52' />
                    <p class="py-6">Name: {product.name}</p>
                    <p class="py-6">description: {product.description}</p>
                    <p class="py-6">minimumOrderQuantity: {product.minimumOrderQuantity}</p>
                    <p class="py-6">availableQuantity: {product.availableQuantity}</p>
                    <p class="py-6">price: {product.price}</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" value={user?.email} class="input input-bordered" readOnly />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" readOnly value={user?.displayName} placeholder="password" class="input input-bordered" />

                        </div>
                        <select name='quantiy' class="select select-bordered w-full max-w-xs">
                            <option>300</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>5000</option>
                            <option>8000</option>
                            <option>15000</option>
                            <option>20000</option>
                            <option>21000</option>
                        </select>
                        <input type="text" required name='address' placeholder="address" class="input input-bordered" />
                        <input type="text" required name='phone' placeholder="phone number" class="input input-bordered" />
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">purchases</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;