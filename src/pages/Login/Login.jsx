import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { loginUser} = useContext(AuthContext)
    const [error, setError] =useState('')
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target ;
        const email = form.email.value;
        const password = form.password.value
        console.log( email, password,);
        setError("")

        loginUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/')
            Swal.fire({
                title: 'Success!',
                text: 'Logged in Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: 'Please Write Your Correct Gmail and Password!!!',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        })
    }

    return (
        <div className="max-w-lg mx-auto my-36">
        <Helmet>
        <title>SleepWell | Login</title>
        </Helmet>

        <p className="text-center font-medium text-2xl pb-12">Login to SleepWell</p>
        <form onSubmit={handleLogin} className="card-body border bg-gray-100 rounded-lg">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input type="email"
                    name="email"
                    placeholder="Email Address"
                    className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <input type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <p className="text-red-600 text-center">{error}</p>

            <div className="form-control mt-6">
                <button className="btn bg-orange-500 text-white">Login</button>
            </div>
        </form>
        <p className="text-center">or</p>
        
        <p className=" rounded-lg text-center border p-4 my-4 space-x-6" >
            <button ><FcGoogle className="text-3xl"></FcGoogle></button>

            <button ><FaGithub className="text-3xl "></FaGithub></button>

            <button ><FaFacebook className="text-3xl text-blue-700 "></FaFacebook></button>
        </p>

        <p className="bg-blue-100 rounded-lg text-center border p-4 my-4">New in SleepWell?  <Link className="text-green-500 font-semibold" to={'/register'}>Create Your Account</Link></p>



    </div>
    );
};

export default Login;