import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken')
    }
    const menuItems = <>
        <li className='font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='font-bold'><NavLink to="/blogs" >Blogs</NavLink></li>
        <li className='font-bold'><NavLink to="/contactus ">Contact</NavLink></li>
        <li className='font-bold'><NavLink to="/myportfolio ">MyPortfolio</NavLink></li>
        {
            user && <li className='font-bold'><NavLink to="/dashboard">Dashboard</NavLink></li>
        }
        <li>
            {user ? <button onClick={logOut} className="btn btn-ghost  normal-case font-bold"  >Sign Out</button> : <NavLink to="/login" className="font-bold">Login</NavLink>}
        </li>
    </>
    return (
        <div className="navbar sticky top-0 z-50 bg-base-100  mx-auto px-14 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" storkewidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-primary font-bold">Car <span className='text-secondary mx-1'>Parts</span> Manufacturer</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end block md:hidden flex">
                <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden flex-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" storkewidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;