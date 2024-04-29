import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";


const MyList = () => {
    const { user } = useContext(AuthContext)
    const [lists, setLists] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLists(data)
            })
    }, [user])

    return (
        <div>
            <h3 className="text-4xl text-center font-bold mb-8 mt-28 md:mt-28 lg:mt-12">Total Tourists Spot: {lists.length}</h3>

            <div className="px-8 border rounded-lg mt-8">
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center font-bold text-base bg-[#2dd4bf] rounded-lg">Name</th>
                                <th className="text-center font-bold text-base bg-[#3b82f6] rounded-lg">Location</th>
                                <th className=" text-center font-bold text-base bg-[#f97316] rounded-lg">Average Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                lists.map(list => <tr key={list._id}>
                                    <td className="text-center">{list.name}</td>
                                    <td className="text-center">{list.location}</td>
                                    <td className="text-center">{list.average}</td>

                                    <td>
                                        <Link to={`/update`}>
                                            <button>
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link>
                                            <button>
                                                X
                                            </button>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;