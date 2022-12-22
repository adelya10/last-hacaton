import React from "react";
import AddProductPage from "../pages/AddProductPage";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ProductListPage from "../pages/ProductListPage";
import { admin } from "../helper/helpers";
import Home from "../componets/Home/Home";
import EditProductPage from "../pages/EditProductPage";
import { useAuth } from "../Context/AuthContextProvider";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
    const { user } = useAuth();
    const PUBLIC_ROUTES = [
        { link: "/auth/", elements: <AuthPage />, id: 1 },
        { link: "/product", elements: <ProductListPage />, id: 3 },
        { link: "/", elements: <Home />, id: 4 },
        { link: "/cart", elements: <CartPage />, id: 6 },
    ];
    const PRIVET_ROUTES = [
        { link: "/edit/:id", elements: <EditProductPage />, id: 5 },
        { link: "/addProduct", elements: <AddProductPage />, id: 2 },
    ];
    return (
        <div>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        path={item.link}
                        element={item.elements}
                        key={item.id}
                    />
                ))}
                {user
                    ? PRIVET_ROUTES.map((item) => (
                          <Route
                              key={item.id}
                              path={item.link}
                              element={
                                  user.email === admin ? (
                                      item.elements
                                  ) : (
                                      <Navigate replace to="*" />
                                  )
                              }
                          />
                      ))
                    : null}
            </Routes>
        </div>
    );
};

export default MainRoutes;
