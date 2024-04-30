import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const Update = () => {

    const spot = useLoaderData()
    const { name, tourist, location, travel, seasonality, average, description, photo, visitor, _id } = spot;
    const { user } = useContext(AuthContext)


    const handleUpdateSpot = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const tourist = form.tourist.value;
        const location = form.location.value;
        const travel = form.travel.value;
        const seasonality = form.seasonality.value;
        const average = form.average.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const visitor = form.visitor.value;
        const email = form.email.value

        const updateSpot = { name, tourist, location, travel, seasonality, average, description, photo, email, visitor }

        console.log(updateSpot);

        // send data to the server
        fetch(` https://ten-assignment-server-cl7yey4lr.vercel.app/addTouristsSpot/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourists Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset()
                

            })




    }

    return (
        <div className="lg:mt-16 md:mt-28 mt-28">
            <div className="bg-[#F4F3F0] p-24">
                <h3 className="text-3xl font-bold text-center mb-6">Update Your Tourists Spot</h3>

                <form onSubmit={handleUpdateSpot}>
                    {/* form name , quantity row  */}
                    <div className="md:flex gap-10  bg-[#F4F3F0]">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Country Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="name" defaultValue={name} placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="tourist" defaultValue={tourist} placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier,taste  row */}
                    <div className="md:flex gap-10  bg-[#F4F3F0]">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="travel" defaultValue={travel} placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* form supplier,taste  row */}
                    <div className="md:flex gap-10  bg-[#F4F3F0]">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="average" defaultValue={average} placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category, details row */}
                    <div className="md:flex gap-10  bg-[#F4F3F0]">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Total Visitor Per Year</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="visitor" defaultValue={visitor} placeholder="Total Visitor Per Year" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <div>
                        <div className="form-control md:w-full">
                            <label className="label">

                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* form supplier,taste  row */}
                    <div className="md:flex gap-10  bg-[#F4F3F0]">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="userName"
                                    value={user?.displayName || "Name Not Found"} placeholder="User Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="email"
                                    value={user?.email} placeholder="User Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>




                    <div className="mt-8">
                        <input className="btn  btn-block bg-black text-white " type="submit" value="Update Tourist Spot" />

                    </div>
                </form>


            </div>
        </div>
    );
};

export default Update;