import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const ProductDetail = lazy(() => import("../components/ProductDetail"));
const CartPage = lazy(() => import("../pages/CartPage"));
const Checkout = lazy(() => import("../pages/Checkout"));
const NotFound = lazy(() => import("../components/NotFound"));
const App = lazy(() => import("../App"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

export default appRouter;
