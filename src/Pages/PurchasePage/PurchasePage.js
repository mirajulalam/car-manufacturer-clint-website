import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from './../Shared/Loading';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const [user, loading] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://tranquil-anchorage-32269.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])

    const handleSubmit = event => {
        event.preventDefault();
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
                event.target.reset()
            })
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='grid justify-items-center my-2'>
                    <img src={product.picture} alt="" className='w-52' />
                    </div>
                    <p className='py-1 font-medium'>Name: {product.name}</p>
                    <p className='py-1'>{product.description}</p>
                    <p className='py-1 font-medium'>minimumOrderQuantity: {product.minimumOrderQuantity}</p>
                    <p className='py-1 font-medium'>availableQuantity: {product.availableQuantity}</p>
                    <p className='py-1 font-medium'>price: ${product.price}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" readOnly value={user?.displayName} placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" value={user?.email} className="input input-bordered" readOnly />
                        </div>
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <select name='quantiy' className="select select-bordered w-full max-w-xs">
                            <option>300</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>5000</option>
                            <option>8000</option>
                            <option>15000</option>
                            <option>20000</option>
                            <option>21000</option>
                        </select>
                        <input type="text" required name='address' placeholder="address" className="input input-bordered" />
                        <input type="number" required name='phone' placeholder="phone number" className="input input-bordered" />
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">purchases</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;