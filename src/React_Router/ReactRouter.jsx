import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import { useContext, useEffect } from "react";
import UserProvider from "../UserContext/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../FireBase/firebase.config";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },
    {
        path: "login",
        element: <Login></Login>,
    },
    {
        path: "register",
        element: <Register></Register>,
    },
]);

export default function ReactRouter() {
    // userContext
    const user = useContext(UserProvider);
    const { setUserData, setUserName } = user


    useEffect(() => {
        const Unsubcribes = () => onAuthStateChanged(auth, user => {
            if (user) {
                setUserData(user)
                setUserName(user.email)
            }
            else {
                console.log("Sign in Not Completed.")
            }
        })
        Unsubcribes()
    }, [])


    return <RouterProvider router={router} />
}
