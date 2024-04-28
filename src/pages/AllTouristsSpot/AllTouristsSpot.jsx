import { useLoaderData } from "react-router-dom";
import AllSpots from "./AllSpots";


const AllTouristsSpot = () => {
    const allSpot = useLoaderData()
    return (
        <div>
            <h3 className="text-4xl text-center font-bold mb-8 mt-28 md:mt-28 lg:mt-12">All Tourists Spot</h3>
           <div className="">
           {
                allSpot.map(spot => <AllSpots key={spot._id} spot ={spot}></AllSpots>)
            }

           </div>
            
        </div>
    );
};

export default AllTouristsSpot;