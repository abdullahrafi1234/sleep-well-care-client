import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext)

    const handleAddSpot = e => {
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

        const addSpot = { name, tourist, location, travel, seasonality, average, description, photo, email, visitor }

        console.log(addSpot);

        // send data to the server
        fetch('http://localhost:8000/addTouristsSpot', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Tourists Spot Successfully',
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
                <h3 className="text-3xl font-bold text-center mb-6">Add Tourists Spot</h3>

                <form onSubmit={handleAddSpot}>
                    {/* form name , quantity row  */}
                    <div className="md:flex gap-10  bg-[#F4F3F0]">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Country Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="name" placeholder="Country Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Tourists Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="tourist" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
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
                                    name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="travel" placeholder="Travel Time" className="input input-bordered w-full" />
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
                                    name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="average" placeholder="Average Cost" className="input input-bordered w-full" />
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
                                    name="description" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Total Visitor Per Year</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="visitor" placeholder="Total Visitor Per Year" className="input input-bordered w-full" />
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
                                    name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                        <input className="btn  btn-block bg-black text-white " type="submit" value="Add Tourist Spot" />

                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddTouristsSpot;