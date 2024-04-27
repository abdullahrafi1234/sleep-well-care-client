import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/all-tourists-spot'}>All Tourists Spot</NavLink></li>
        <li><NavLink to={'/add-tourists-spot'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to={'/mylist'}>My List</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <div className="navbar lg:px-8 rounded-b-lg shadow-lg text-black py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-0">
                    {/* <p><img className="lg:w-16" src="logos.png" alt="" /></p> */}

                    <a className="btn btn-ghost text-3xl text-blue-900 gap-0"><Link>
                        <span className="font-normal">Sleep</span>Well</Link></a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="">
                    <Link className="btn rounded-xl bg-orange-500 text-white border-none" to={'/login'}>Login</Link>
                </div>
            </div>
            {/* <div className="navbar-end">
            <Link className="btn rounded-xl bg-orange-500 text-white" to={'/login'}>Log in</Link>
        </div> */}
        </div>
    );
};

export default Navbar;