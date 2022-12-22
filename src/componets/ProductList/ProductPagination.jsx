import React from "react";
import { Box, Pagination, Stack } from "@mui/material";

const ProductPagination = ({ page, setPage, pagesQty }) => {
    const handleChange = (e, p) => {
        setPage(p);
    };
    return (
        <div>
            <Box>
                <Stack spacing={2}>
                    <Pagination
                        sx={{ m: 5, display: "flex", justifyContent: "center" }}
                        page={page}
                        onChange={handleChange}
                        count={pagesQty}
                        color="success"
                        size="large"
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </Box>
        </div>
    );
};

export default ProductPagination;
