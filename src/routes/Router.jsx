import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />
    },
    {
        path: '/news',
        element: <h1>News</h1>
    },
    {
        path: '/auth',
        element: <h1>Auth</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
])