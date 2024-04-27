import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);

export default Router;

