import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] =useState(false)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password)


        setError('')


        if (password.length < 6) {
            setError('Password must have 6 Character!!!')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must have an Uppercase ')
            return
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must have an Lowercase ')
            return
        }

        // i want to check whether password has any uppercase in js using regex

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state: '/' )
                // alert('Logged in Successfully!')
                //sweet alert lagbe
            })
            .catch(error => {
                console.log(error);
            })


    }


    return (
        <div className="max-w-lg mx-auto my-36">
        {/* <Helmet>
        <title>SleepWell | Register</title>
        </Helmet> */}

        <p className="text-center font-medium text-2xl pb-12">Create Your Account</p>
        <form onSubmit={handleRegister} className="card-body border bg-gray-100 rounded-lg">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input type="email"
                    name="email"
                    placeholder="Email Address"
                    className="input flex input-bordered" required />

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <div className="relative w-full">
                <input type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    className="input w-full input-bordered"
                     required />

                <span onClick={() => setShowPassword(!showPassword)} className="absolute lg:left-96 md:left-96 left-80  lg:top-4 top-4 text-center items-center">
                {
                            showPassword ? <FaEyeSlash></FaEyeSlash> :
                                <FaEye></FaEye>
                        }
                </span>


                </div>
            </div>
            <p className="text-red-600 text-center">{error}</p>

            <div className="form-control mt-6">
                <button className="btn bg-green-500 text-white">Register</button>
            </div>
        </form>
        <p className="bg-blue-100 rounded-lg text-center border p-4 my-4">Already Have an Account? Please <Link className="text-orange-500 font-semibold" to={'/login'}>Login</Link></p>


    </div>

    );
};

export default Register;