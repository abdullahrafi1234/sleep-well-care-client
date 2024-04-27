import {
    createBrowserRouter,
  } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
    },
  ]);

export default Router;

