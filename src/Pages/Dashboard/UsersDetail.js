import React from 'react';
import { toast } from 'react-toastify';

const UsersDetail = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://tranquil-anchorage-32269.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast.success('Admin made in successfully')
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UsersDetail;