import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const ManageOrders = () => {
    const [manageOrder, setManageOrder] = useState([]);
    const [user,isLoading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://tranquil-anchorage-32269.herokuapp.com/allOrder`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    setManageOrder(data)
                })
        }
    }, [user]);

    const handleProductDelete = id => {
        const checkout = window.confirm('Are you sure you want to delete order');
        if (checkout) {
            const url = `https://tranquil-anchorage-32269.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    toast('order delete successfull')
                })
        }
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>product Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrder.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.userName}</td>
                                <td>{o.email}</td>
                                <td>{o.name}</td>
                                <td>
                                    {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-sm btn-success'>Unpaid</button></Link>}
                                    {(o.price && o.paid) && <div>
                                        <p><span className='text-success'>paid</span></p>
                                    </div>}
                                </td>
                                <td><button onClick={() => handleProductDelete(o._id)} disabled={o.paid} className="btn btn-error btn-outline">
                                    Delete
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

export default ManageOrders;