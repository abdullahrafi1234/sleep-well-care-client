import { useLoaderData } from "react-router-dom";


const CountryCard = () => {

    const card = useLoaderData()
    console.log(card)

    return (
        <div>
            <h3>card card</h3>
            {
                // card.map( car => <p>hellp</p>)
            }


        </div>
    );
};

export default CountryCard;