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
import MyList from "../pages/MyList/MyList";
import Update from "../pages/Update/Update";
import PrivateRoute from "./PrivateRoute";
import CountryCard from "../pages/Countries/CountryCard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://ten-assignment-server-alpha.vercel.app/addTouristsSpot')
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
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>
      },
      {
        path: '/all-tourists-spot',
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch('https://ten-assignment-server-alpha.vercel.app/addTouristsSpot')
      },
      {
        path: '/view-details/:id',
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://ten-assignment-server-alpha.vercel.app/addTouristsSpot/${params.id}`)
      },
      {
        path: '/myList',
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://ten-assignment-server-alpha.vercel.app/addTouristsSpot/${params.id}`)
      },
      {
        path: '/countryCard/:id',
        element:<PrivateRoute>
          <CountryCard></CountryCard>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://ten-assignment-server-alpha.vercel.app/countryCard/${params.id}`)
      }
    ]
  },
]);

export default Router;

