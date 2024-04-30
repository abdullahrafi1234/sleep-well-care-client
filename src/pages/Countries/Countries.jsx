import { useEffect, useState } from "react";
import Country from "./Country";


const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://ten-assignment-server-alpha.vercel.app/countries')
        .then(res => res.json())
        .then(data => {
  
            setCountries(data)
        })
    },[])
    return (
        <div>
            <h3 className="text-4xl text-center  mt-24 font-bold my-16">Countries</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {
                countries.slice(0,6).map(country => <Country key={country._id} country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;