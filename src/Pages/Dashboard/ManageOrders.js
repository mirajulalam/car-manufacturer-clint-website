import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageOrders = () => {
    const [manageOrder, setManageOrder] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/allOrder`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    setManageOrder(data)
                })
        }
    }, [user]);
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
                            <th>Shipped</th>
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
                                        <p><span className='text-success'>Pending</span></p>
                                    </div>}
                                </td>
                                <td><button className="btn btn-error btn-outline">
                                    Shipped
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