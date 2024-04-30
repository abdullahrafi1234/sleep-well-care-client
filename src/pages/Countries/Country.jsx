import PropTypes from 'prop-types';

const Country = ({country}) => {
    const {image, description,country_name} = country;
    return (
        <div>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <div className="bg-[#F3F3F3] w-96  rounded-xl">
                            <img src={image} alt="Shoes" className="rounded-xl w-96 lg:h-60 md:h-52" />
                        </div>
                    </figure>

                    <div className="pl-14 flex pt-8 gap-8">
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">Beautiful</p>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">Natural</p>

                    </div>
                    <div className="card-body  pl-14">
                        <h2 className="card-title font-bold">{country_name}</h2>
                        {/* <p className="font-medium">By: {author}</p> */}
                        <div className=" my-4 border border-dotted border-gray-300">

                        </div>
                    </div>

                    <div className="flex pl-14  pr-14 justify-between pb-8">
                        <p className=""> <span className="font-bold">Description: </span> {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.node
}

export default Country;