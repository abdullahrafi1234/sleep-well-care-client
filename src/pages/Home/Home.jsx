import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="mt-16 text-center space-y-4">
                <h3 className="text-4xl text-center font-bold">Our Popular Services</h3>
                <div className="mt-8">
                    <Link to={'add-tourists-spot'} className="">
                        <button className="font-bold btn-accent btn btn-outline p-4">Add Tourists Spot</button>
                    </Link>
                </div>
            </div>
            <h3>countries section</h3>
            <h3>extra 1</h3>
            <h3>extra 2</h3>
        </div>
    );
};

export default Home;