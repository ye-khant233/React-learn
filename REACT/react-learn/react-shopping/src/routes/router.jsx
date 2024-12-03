
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about-us",
        element: <AboutUs />
    },
    {
        path: "/my-cart",
        element: <MyCart/>
    },
    {
        path: "/about-us",
        element: <ProductDetail />
    },
]);
export default router;