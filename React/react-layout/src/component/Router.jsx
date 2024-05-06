import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./AboutUs";
import App from "../App";

{/* <RouterProvider router={Router}/>
<Outlet/> */}
const Router=createBrowserRouter(
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Layout/>
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
        ]
    }
);

export default Router
