import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./Context/AuthContextProvider";
import CartContextProvider from "./Context/CartContextProvaider";
import ProductContextProvaider from "./Context/ProductContextProvaider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CartContextProvider>
            <ProductContextProvaider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </ProductContextProvaider>
        </CartContextProvider>
    </BrowserRouter>
);
