import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order/${user?.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user, navigate, orders]);

    const handleDelete = id => {
        const checkout = window.confirm('Are you sure you want to delete products');
        if (checkout) {
            const url = `http://localhost:5000/order/${id}`;
            console.log(url);
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    alert('Are you sure you want to delete your product')
                })
        }
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>product Name</th>
                            <th>Price</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.name}</td>
                                <td>
                                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(o.price && o.paid) && <span className='text-success'>Paid</span>}
                                </td>


                                <td><button onClick={() => handleDelete(o._id)} class="btn btn-error btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;