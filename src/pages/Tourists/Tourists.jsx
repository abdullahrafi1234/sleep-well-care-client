// import { IoLocationOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

const Tourists = ({spot}) => {
    const {name, tourist, location, travel, seasonality, average, description, photo, email} = spot;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="pl-6 p-6 "><img className="lg:p-6 md:p-6 p-6 w-64" src={photo} alt="Movie" /></figure>
            <div className="card-body text-start mt-2">
                <h2 className="card-title">Name:{name}</h2>
                <p>Location: {location}</p>
                <p>Place: {tourist}</p>
                <p>Price:{average}</p>
            </div>
        </div> 
    );
};

export default Tourists;