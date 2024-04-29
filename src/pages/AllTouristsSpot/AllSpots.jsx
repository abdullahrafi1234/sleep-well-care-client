import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";


const AllSpots = ({ spot }) => {
    const { name, tourist, location, travel, seasonality, average, photo, visitor, _id } = spot;

    const handleViewDetails = _id => {
        console.log(_id)
    }
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="hero shadow-lg p-4 rounded-lg my-16 justify-start">
            <div className="hero-content p-4 gap-12 flex-col lg:flex-row justify-start">
                <img src={photo} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl justify-start" />
                <div className="space-y-2 md:pl-8">
                    <h1 className="text-2xl font-medium ">Name: {name}</h1>
                    <p className="flex font-medium gap-2 items-center ">{location} <IoLocationOutline className="text-xl"></IoLocationOutline></p>
                    <p className="">Place: {tourist}</p>
                    <p className="">Seasonality: {seasonality}</p>
                    <p className="">
                        Travel Time: {travel}</p>
                    <p className="">Total Visitors Per Year: {visitor}</p>
                    <p className="">Average Cost: {average}</p>

                    <div>
                        <Link to={`/view-details/${_id}`}>
                            <button className="btn btn-outline btn-accent">
                                View Details
                            </button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AllSpots;