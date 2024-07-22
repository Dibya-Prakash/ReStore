import { createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import HomePage from "../../Features/Home/HomePage";
import Catalog from "../../Features/Catalog/Catalog";
import ProductDetails from "../../Features/Catalog/ProductDetails";
import AboutPage from "../../Features/about/aboutPage";
import ContactPage from "../../Features/Contact/ContactPage";

export const Router=createBrowserRouter([{
    path: '/',
    element: <App/>,
    children: [
        {path:'', element:<HomePage/>},
        {path:'catalog', element:<Catalog/>},
        {path:'catalog/:id', element:<ProductDetails/>},
        {path:'about', element:<AboutPage/>},
        {path:'contact', element:<ContactPage/>},
    ]
}])