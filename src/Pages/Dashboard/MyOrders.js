import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/order?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user, orders]);

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
                    console.log('deleted product item', data);
                    alert('Are you sure you want to delete your product')
                    setOrders()
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
                                <td>{o.price}</td>
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