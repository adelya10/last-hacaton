import { Typography } from "@mui/material";
import React from "react";
import ProductList from "../componets/ProductList/ProductList";

const ProductListPage = () => {
    return (
        <div>
            <Typography
                variant="h1"
                sx={{
                    fontSize: "35px",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                Продукты что сейчас в наличии
            </Typography>
            <ProductList />
        </div>
    );
};

export default ProductListPage;
