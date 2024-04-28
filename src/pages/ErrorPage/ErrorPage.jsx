import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (

            <div className="font-poppins text-center items-center mx-auto max-w-xl mt-36 space-y-4 border p-20 bg-blue-200">
                <Helmet>
                    <title>SleepWell | ErrorPage</title>
                </Helmet>
                <h3 className="text-6xl font-extrabold text-red-400">Oops!</h3>
                <p className="font-bold text-xl">404 - PAGE NOT FOUND</p>
                <p>This page you are looking for might have been removed had its name changed or id temporarily unavailable!!</p>
                <Link className="btn btn-primary" to={'/'}>Go to Home</Link>
            </div>

    );
};

export default ErrorPage;