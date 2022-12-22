import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useProduct, useProducts } from "../../Context/ProductContextProvaider";
import ProductCard from "./ProductCard";
import ProductPagination from "./ProductPagination";

const ProductList = () => {
    // const { blogs, getBlog } = useBlog();

    const { products, getProducts } = useProducts();
    useEffect(() => {
        getProducts();
    }, []);

    const [page, setPage] = useState(1);
    const prodPerPage = 4;
    const pagesQty = Math.ceil(products.length / prodPerPage);

    function currentBlog() {
        const begin = (page - 1) * prodPerPage;
        const end = begin + prodPerPage;
        return [...products.slice(begin, end)];
    }
    const location = useLocation();

    return (
        <div>
            <Box sx={{ display: "flex" }}>
                {currentBlog() &&
                    currentBlog().map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
            </Box>

            <Box>
                <ProductPagination
                    page={page}
                    setPage={setPage}
                    pagesQty={pagesQty}
                />
            </Box>
        </div>
    );
};

export default ProductList;
