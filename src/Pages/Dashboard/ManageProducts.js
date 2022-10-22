import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [manageProduct, setManageProduct] = useState([]);
    console.log(manageProduct);
    useEffect(() => {
        fetch('https://car-parts-manufacturer.onrender.com/product')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [manageProduct]);

    return (
        <div className='my-28 max-w-7xl mx-auto px-12'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    manageProduct.map(manage => <ManageProduct
                        key={manage._id}
                        manage={manage}
                    ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;