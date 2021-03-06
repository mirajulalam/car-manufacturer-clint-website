import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, picture, description, price, minimumOrderQuantity, availableQuantity } = part;
    const navigate = useNavigate();
    const handleNavigateParams = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className=" w-full" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">Name: {name}</h2>
                <p>{description.slice(0,100)+"...read more"}</p>
                <p>Price: ${price}</p>
                <p>MinimumOrderQuantity: {minimumOrderQuantity}</p>
                <p>AvailableQuantity: {availableQuantity}</p>
                <div className="card-actions text-center">
                    <button onClick={() => handleNavigateParams(_id)} className="btn btn-outline btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;