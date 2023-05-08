import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Restocards"
import { Contact, Footer } from "./components/contact";
import Nav from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restomenuinfo from "./components/restomenudata";
import Restomenupage from "./components/Restomenupage";
// import Cart from "./components/cart";
import { UserAuthContextProvider } from "./utils/context/userAuthcontext";
import Login from "./components/login";
import Signup from "./components/signup";
import Banner from "./components/Banner";
import Error from "./components/Error";
const root = ReactDOM.createRoot(document.getElementById("root"));

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
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element: <Applayout />,
                errorElement:<Error/>,
                children: [
                    {
                        path: "/",
                        element: <Body />
                    },
                    // {
                    //     path: "/cart",
                    //     element: <Cart />,
                    // },
                    {
                        path: "/support",
                        element: <Contact />,
                    },
                    {
                        path: "/restomenu/:paramsid",
                        element: <Restomenupage />
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