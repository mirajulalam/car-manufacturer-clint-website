import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet,NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from './../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin &&
                            <div>
                            <li><NavLink to='/dashboard/review'>My Reviews</NavLink></li>
                            <li><NavLink to='/dashboard/order'>My Orders</NavLink></li>
                            </div>
                    }
                    {admin &&
                        <div>
                            <li><NavLink to='/dashboard/users'>Make Admin</NavLink></li>
                            <li><NavLink to='/dashboard/addaproduct'>Add Product</NavLink></li>
                            <li><NavLink to='/dashboard/manageproduct'>Manage Products</NavLink></li>
                            <li><NavLink to='/dashboard/manageorder'>Manage Orders</NavLink></li>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;