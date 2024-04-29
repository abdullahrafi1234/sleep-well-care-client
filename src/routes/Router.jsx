import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:8000/addTouristsSpot')
        },
        {
            path: '/login', 
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/add-tourists-spot',
            element: <AddTouristsSpot></AddTouristsSpot>
        },
        {
          path:'/all-tourists-spot',
          element: <AllTouristsSpot></AllTouristsSpot>,
          loader: () => fetch('http://localhost:8000/addTouristsSpot')
        },
        {
          path: '/view-details/:id',
          element: <ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`http://localhost:8000/addTouristsSpot/${params.id}`)
        }
      ]
    },
  ]);

export default Router;

