import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
    },
]);





export default function ReactRouter() {
    return <RouterProvider router={router} />
}
