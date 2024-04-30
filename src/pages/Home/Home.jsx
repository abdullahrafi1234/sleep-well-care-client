import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Tourists from "../Tourists/Tourists";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip'
import ExtraOne from "../ExtraOne/ExtraOne";
import ExtraTwo from "../ExtraOne/ExtraTwo";


const Home = () => {

    const spots = useLoaderData()

    return (
        <div>
            <Slider></Slider>
            {/* tourists spot section */}
            <div className="mt-16 text-center space-y-4">
                <Fade>
                    <h3 className="text-4xl text-center font-bold">Our Popular Services</h3>
                    {/* <a data-tooltip-id="my-tooltip" data-tooltip-content={spots.length}>
                        ◕‿‿◕
                    </a> */}
                    
                </Fade>
                <div className="mt-8">
                    <Link to={'add-tourists-spot'} className="">
                        <button data-tooltip-id="my-tooltip" data-tooltip-content={'Add If You Want'} className="font-bold btn-accent btn btn-outline p-4">Add Tourists Spot</button>
                    </Link>
                    <Tooltip id="my-tooltip" />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {
                        spots.slice(0, 6).map(spot => < Tourists key={spot._id} spot={spot}></Tourists>)
                    }

                </div>
            </div>

            <h3>countries section</h3>
            <ExtraOne></ExtraOne>
            <h3>extra 2</h3>
            <ExtraTwo></ExtraTwo>
        </div>
    );
};

export default Home;