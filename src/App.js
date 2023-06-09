import React from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/Restocards"
import { Contact, Footer } from "./components/contact";
import Nav from "./components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Restomenupage from "./components/Restomenupage";
import Cart from "./components/Cart";
import { UserAuthContextProvider } from "./utils/context/userAuthcontext";
import Login from "./components/login";
import Signup from "./components/signup";
import Banner from "./components/Banner";
import Error from "./components/Error";
import store from "./utils/store";
import { Provider } from "react-redux";

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
        <Provider store={store}>
            <UserAuthContextProvider>
                <Outlet />
            </UserAuthContextProvider>
        </Provider>
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
                        element: <Body />,
                        errorElement:<Error/>,
                    },
                    {
                        path: "/cart",
                        element: <Cart />,
                        errorElement:<Error/>,
                    },
                    {
                        path: "/support",
                        element: <Contact />,
                        errorElement:<Error/>,
                    },
                    {
                        path: "/restomenu/:paramsid",
                        element: <Restomenupage />,
                        errorElement:<Error/>,
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