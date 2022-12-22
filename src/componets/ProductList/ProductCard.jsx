import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Context/ProductContextProvaider";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useCart } from "../../Context/CartContextProvaider";
import { useAuth } from "../../Context/AuthContextProvider";

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    const { deleteProduct, updateProduct } = useProducts();
    const { addProductToCart, checkProductInCart } = useCart();

    const {
        user: { email },
    } = useAuth();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent>
                    <img src={product.picture} alt="" width={"70%"} />
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price}
                    </Typography>
                    {/* <Link to={`/edit/${product.id}`}> */}
                    {email === "kojomuratova@gmail.com" ? (
                        <Box>
                            <Button
                                sx={{
                                    width: "39%",
                                    marginRight: "2%",
                                    backgroundColor: "#fbb3db",
                                    color: "white",
                                }}
                                onClick={() => navigate(`/edit/${product.id}`)}
                            >
                                изменить параметры
                            </Button>
                            <Button
                                onClick={() => deleteProduct(product.id)}
                                sx={{
                                    width: "35%",
                                    backgroundColor: "#fbb3db",
                                    color: "white",
                                }}
                            >
                                удалить товар
                            </Button>
                        </Box>
                    ) : null}
                    {checkProductInCart(product.id) ? (
                        <Button
                            sx={{ color: "black" }}
                            onClick={() => addProductToCart(product)}
                        >
                            <ShoppingBagIcon />
                        </Button>
                    ) : (
                        <Button
                            sx={{ color: "black" }}
                            onClick={() => addProductToCart(product)}
                        >
                            <ShoppingBagOutlinedIcon />
                        </Button>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
