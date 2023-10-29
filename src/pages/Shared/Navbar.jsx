import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/menu"}>Our Menu</Link></li>
        <li><Link to={"/order/salad"}>Order Food</Link></li>
        <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li>
        <li><Link to={"/dashboard/mycart"} className="gap-2">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart ? cart.length : 0}</div>
        </Link></li>
        {
            user ? <button onClick={handleLogout} >Logout</button> : <li><Link to={"/login"}>Login</Link></li>

        }
    </>

    return (
        <div className='bg-black bg-opacity-50 fixed z-10 text-white container'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;