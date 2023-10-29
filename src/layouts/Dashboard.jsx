import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaBars } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><Link to={"/dashboard/adminhome"}><FaHome />Admin Home</Link></li>
                            <li><Link to={"/dashboard/additem"}><FaUtensils />Add an Items</Link></li>
                            <li><Link to={"/dashboard/manageitems"}><FaBars />Manage Items</Link></li>
                            <li><Link><FaBook />Manage Bookings</Link></li>
                            <li><Link to={"/dashboard/allusers"}><FaUsers />All Users</Link></li>
                        </> : <>
                            <li><Link to={"/dashboard/userhome"}><FaHome />User Home</Link></li>
                            <li><Link><FaCalendarAlt />Reservation</Link></li>
                            <li><Link><FaWallet />Payment History</Link></li>
                            <li><Link to={"/dashboard/mycart"} ><FaShoppingCart />My Cart <span className="badge badge-secondary">+{cart ? cart.length : 0}</span></Link></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><Link to={"/"}><FaHome />Home</Link></li>
                    <li><Link to={"/menu"}>Menu</Link></li>
                    <li><Link to={"/order/salad"}>Order</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;