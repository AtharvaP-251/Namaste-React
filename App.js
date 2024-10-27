import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Error from "./src/components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./src/components/Shimmer";
import { useState, useEffect } from "react";
import UserInfo from "./src/utils/UserInfo";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";

const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Atharva",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <div className="app">
                <UserInfo.Provider
                    value={{ loggedUser: userName, setUserName }}
                >
                    <Header />
                    <Outlet />
                </UserInfo.Provider>
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
