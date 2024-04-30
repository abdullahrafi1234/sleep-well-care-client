import { useEffect, useState } from "react";
import Country from "./Country";
import { Typewriter } from "react-simple-typewriter";


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
            {/* <h3 className="text-4xl text-center  mt-24 font-bold my-16">Countries</h3> */}
            <div className="text-4xl mt-24 my-16 text-stone-700 text-center font-bold">
                <Typewriter
                    words={['Countries']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={350}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {
                countries.slice(0,6).map(country => <Country key={country._id} country={country}></Country>)
            }
        </div>
        </div>
    );
};

export default Countries;