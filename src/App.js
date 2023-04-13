import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Bodycards"
import Swiper from "./components/swiper";
import { Contact, Footer } from "./components/contact";
import Nav from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restomenuinfo from "./components/restomenudata";
import {Samplemenu , Samplehead} from "./components/Samplemenucards";

const root = ReactDOM.createRoot(document.getElementById("root"));



const Banner = () => {
    return (

        <div className="banners">
            <img src="https://product-assets.faasos.io/production/product/image_1676454173344_WB_freeD.jpg" />
            <img src="https://product-assets.faasos.io/production/product/image_1663134309558_8_1000x500.jpg" />
        </div>

    )
}



const Body = () => {
    return (
        <>
            <Banner />
            <Cards />
          
            <Swiper />
        </>
    );
};

const Applayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
};

const Approuter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <></>
            },
            {
                path: "/samplemenu",
                element: <Samplemenu/>,
                element:<Samplehead/>,
            },
            {
                path: "/restomenu/:paramsid",
                element: <Restomenuinfo/>
            },
        ]
    },
]);


root.render(<RouterProvider router={Approuter}/>)