import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
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
    }, [manageOrder]);
   
    const handleProductDelete = id => {
        swal({
            title: "Are you sure you want to delete order?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((checkout) => {
            if (checkout) {
                const url = `https://tranquil-anchorage-32269.herokuapp.com/order/${id}`;
                fetch(url, {
                method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                swal("Successfully", "Order delete successfull", "success");
                })
            }
               else {
               swal("Your order product is safe!");
                }
          });
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
                            <th>SR</th>
                            <th>Customer</th>
                            <th>product</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageOrder.map((o, index) => <tr key={o._id}>
                                <th>{index + 1}</th>
                                <td>{o.email}</td>
                                <td>{o.name}</td>
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