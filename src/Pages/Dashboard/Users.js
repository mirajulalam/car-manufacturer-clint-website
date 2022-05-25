import React from 'react';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';
import UsersDetail from './UsersDetail';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () => fetch('https://tranquil-anchorage-32269.herokuapp.com/user', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UsersDetail
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UsersDetail>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;