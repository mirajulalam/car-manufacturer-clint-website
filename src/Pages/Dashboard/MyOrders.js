import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import auth from './../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://car-parts-manufacturer.onrender.com/order/${user?.email}`, {
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
       swal({
            title: "Are you sure you want to order product delete?",
            text: "Once deleted, you will not be able to recover this order product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((checkout) => {
                if (checkout) {
                    const url = `https://car-parts-manufacturer.onrender.com/order/${id}`;
                    console.log(url);
                    fetch(url, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            swal("Successfully", "Product delete successfull", "success");
                        })
                }
               else {
               swal("Your order product is safe!");
                }
          });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            orders.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.name}</td>
                                <td>
                                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-sm btn-success'>Payment</button></Link>}
                                    {(o.price && o.paid) && <div>
                                        <p><span className='text-success'>PAID</span></p>
                                        <p>Transaction Id: <span className='text-success'>{o.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td><button disabled={o.paid} onClick={() => handleDelete(o._id)} className="btn btn-error btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;