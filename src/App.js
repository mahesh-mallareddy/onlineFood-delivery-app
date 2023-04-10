import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Bodycards"
import Swiper from "./components/swiper";
import { Contact, Footer } from "./components/contact";
import Nav from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));



const Banner = () => {
    return (

        <div className="banners">
            <img src="https://product-assets.faasos.io/production/product/image_1676454173344_WB_freeD.jpg" />
            <img src="https://product-assets.faasos.io/production/product/image_1663134309558_8_1000x500.jpg" />
        </div>

    )
}

const Swipecardsheading = () => (
    <div className="bodyheading">
        <p>Most Loved Collections</p>
    </div>
);

const Body = () => {
    return (
        <>
            <Banner />
            <Cards />
            <Swipecardsheading />
            <Swiper />
        </>
    );
};

const Applayout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Contact />
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
        ]
    },
]);


root.render(<RouterProvider router={Approuter}/>)