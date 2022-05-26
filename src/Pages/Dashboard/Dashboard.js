import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from './../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile px-16">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>

                    {/* {admin !== } */}
                    <div>
                        <li><Link to='/dashboard/review'>My Reviews</Link></li>
                        <li><Link to='/dashboard/order'>My Orders</Link></li>
                    </div>

                    {admin &&
                        <div>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                            <li><Link to='/dashboard/addaproduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageproduct'>Manage Product</Link></li>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;