import { useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";



const ViewDetails = () => {
    const spots = useLoaderData()

    const { name, tourist, location, travel, seasonality, average, description, photo, visitor } = spots;
    // console.log(spots)
   
    return (
        <div>
            <Helmet>
                <title>SleepWell | ViewProperty</title>
            </Helmet>
            <div  className="mt-12 mb-16 lg:p-0 p-8">
                <div className=" flex-col lg:flex-row">

                    <h1 className="text-4xl py-2 font-bold">{name}</h1>
                    <p className="border-b border-green-300  w-[220px] "></p>

                    <div className="bg-[#1313130D mt-8  rounded-lg text-center">
                        <img data-aos="zoom-in" data-aos-duration="1000" src={photo} className=" text-center w-full lg:h-[500px] md:h-[400px] h-[200px] rounded-lg shadow-2xl" />
                    </div>

                    <div className="w-3/4 mt-16   text-start">

                        <h1 className="text-3xl font-bold">More About : {tourist}</h1>
                        <p className="py-4 font-medium flex gap-2" > <span className="font-bold">Location: </span>{location} <IoLocationOutline className="text-xl"></IoLocationOutline> </p>
                        <p className="font-semibold border-y border-gray-300 py-3 pl-8">Seasonality : {seasonality}</p>

                        <p className="py-6 pb-6"> <span className="font-bold">More About : </span>{description}</p>

                        <p className="py-2">Total Visitor Per Year: <span className="font-semibold">{visitor}</span></p>
                        <p className="py-2">Travel Time: <span className="font-semibold">{travel}</span></p>

                        <p className="pt-2 mb-8 text-xl">Average Cost: <span className="font-bold">{average} $</span></p>




                    </div>
                </div>
            </div>


        </div>
    );
};

export default ViewDetails;