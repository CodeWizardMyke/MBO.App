import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home.page.jsx";
import SingIn from "../pages/singin.page";

export const DefaultRoutes = createBrowserRouter([
    {
        path:'/',
        errorElement:<h1>404 Não encontrado</h1>,
        element: <Home />
    },
    {
        path:'/singin',
        errorElement:<h1>404 Não encontrado</h1>,
        element:<SingIn/>
    }
])

