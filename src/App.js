import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Bodycards"
import { Contact, Footer } from "./components/contact";
import Nav from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restomenuinfo from "./components/restomenudata";
import Cart from "./components/cart";
import { UserAuthContextProvider } from "./utils/context/userAuthcontext";
import Login from "./components/login";
import Signup from "./components/signup";

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
        </>
    );
};

const App = () => {
    return (
        <>
            <UserAuthContextProvider>
                <Outlet />
            </UserAuthContextProvider>
        </>
    )
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
        element: <App />,
        children: [
            {
                path: "/",
                element: <Applayout />,
                children: [
                    {
                        path: "/",
                        element: <Body />
                    },
                    {
                        path: "/cart",
                        element: <Cart />,
                    },
                    {
                        path: "/support",
                        element: <Contact />,
                    },
                    {
                        path: "/restomenu/:paramsid",
                        element: <Restomenuinfo />
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ],
    },
]);


root.render(<RouterProvider router={Approuter} />)