import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../../Features/Home/HomePage";
import Catalog from "../../Features/Catalog/Catalog";
import ProductDetails from "../../Features/Catalog/ProductDetails";
import AboutPage from "../../Features/about/aboutPage";
import ContactPage from "../../Features/Contact/ContactPage";
import ServerError from "../Errors/ServerError";
import NotFound from "../Errors/NotFoundError";

export const Router=createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {path:'', element:<HomePage/>},
        {path:'catalog', element:<Catalog/>},
        {path:'catalog/:id', element:<ProductDetails/>},
        {path:'about', element:<AboutPage/>},
        {path:'contact', element:<ContactPage/>},
        {path:'server-error', element:<ServerError/>},
        {path:'not-found', element:<NotFound/>},
        {path:'*', element:<Navigate replace to='not-found'/>}
    ]
}])