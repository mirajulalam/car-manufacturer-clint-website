import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';



const Payment = () => {
    const { id } = useParams();
    const url = `https://tranquil-anchorage-32269.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));
    console.log(order);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-50 max-w-sm bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>Email : {id}</p>
                    <h2 class="card-title">Order name: {order.name}</h2>
                    <p>{order.description}</p>
                    <p>{order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;