import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0oBVKGxKC05emzPrBGaXKNbiAFL31xxzW6WU2oItjeqOidLiTVa4x1QfHmYVwfvAExHc652ldXoj8JSXryM90j00tlKZUGcP');


const Payment = () => {
    const { id } = useParams();
    const url = `https://tranquil-anchorage-32269.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()));
    console.log(order)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="card w-50 max-w-sm bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p>email: {order.email}</p>
                    <h2 className="card-title">Order name: {order.name}</h2>
                    <p>description: {order.description}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;