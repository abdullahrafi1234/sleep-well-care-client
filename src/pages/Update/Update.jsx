import { useLoaderData } from "react-router-dom";


const Update = () => {
    
    const spot = useLoaderData()
    const { name, tourist, location, travel, seasonality, average, description, photo, visitor } = spot;

    return (
        <div>
            update here : {name}
        </div>
    );
};

export default Update;