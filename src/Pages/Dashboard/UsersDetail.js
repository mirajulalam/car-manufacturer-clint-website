import React from 'react';
import swal from 'sweetalert';

const UsersDetail = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://car-parts-manufacturer.onrender.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                swal("Successfully", "Admin made in successfully", "success");
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-sm btn-success">Make admin</button>}</td>
            <td><button className="btn btn-sm btn-error ">Remove User</button></td>
        </tr>
    );
};

export default UsersDetail;