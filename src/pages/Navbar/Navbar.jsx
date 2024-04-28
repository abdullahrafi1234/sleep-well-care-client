import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add-tourists-spot'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to={'/all-tourists-spot'}>All Tourists Spot</NavLink></li>
        <li><NavLink to={'/myList'}>My List</NavLink></li>

        {/* {
            user ? <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li> : ''
        } */}

        {/* <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li> */}
        {
            !user ? <li><NavLink to={'/register'}>Register</NavLink></li> : ''
        }
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
                {
                    user ?
                        // <div className="flex gap-3 items-center">

                        //     <button data-tip={user?.displayName || 'Name Not Found'} className=" text-white border-none tooltip tooltip-bottom w-12">
                        //         <img className="rounded-full" src={user?.photoURL || 'user.png'} /></button>

                        //     <button onClick={handleLogOut} data-tip={user?  user?.displayName : 'Name Not Found'} className="btn rounded-xl bg-orange-500 text-white border-none">Log Out</button>
                        // </div> 

                        <div className="dropdown dropdown-hover mr-8">
                            <div tabIndex={0} role="button" className=" hover m-1">
                                <img className="w-12 rounded-full" src={user?.photoURL || 'user.png'} alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-lg w-[120px]">
                                <li>{user?.displayName || 'Name Not Found'}</li>
                                <li><button onClick={handleLogOut} className=" rounded-xl bg-orange-500 text-white border-none">Log Out</button></li>
                            </ul>
                        </div>

                        :
                        <div className="">
                            <Link className="btn rounded-xl bg-orange-500 text-white border-none" to={'/login'}>Login</Link>
                        </div>

                }
            </div>
            {/* <div className="navbar-end">
            <Link className="btn rounded-xl bg-orange-500 text-white" to={'/login'}>Log in</Link>
        </div> */}
        </div>
    );
};

export default Navbar;