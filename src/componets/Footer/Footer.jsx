import { Box, Divider, Link, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const pages = [
    {
        name: "Главная",
        link: "/",
    },
    {
        name: "Магазин",
        link: "/products",
    },
    // {
    //     name: "Доставка",
    //     link: "/delivery",
    // },
    {
        name: "Контакты",
        link: "/contacts",
    },

    {
        name: "Корзина",
        link: "/cart",
    },
    {
        name: "Приятные цены",
        link: "/products",
    },
];
const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ background: "#fbb3db" }}>
                <Divider
                    sx={{
                        backgroundColor: "white",
                        display: {
                            xs: "none",
                            sm: "none",
                            md: "none",
                            lg: "flex",
                            xl: "flex",
                        },
                    }}
                />
                <Box
                    sx={{
                        color: "gray",
                        width: "90%",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <List>
                        <ListItem
                            sx={{
                                cursor: "pointer",
                            }}
                        >
                            <img
                                src="telegram-cloud-photo-size-2-5240437169087168947-y.jpg"
                                alt=""
                                onClick={() => navigate("/")}
                            />
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            display: {
                                xs: "block",
                                sm: "block",
                                md: "block",
                                lg: "block",
                                xl: "block",
                            },
                        }}
                    >
                        <ListItem
                            sx={{
                                fontSize: "1.3em",
                                fontWeight: 800,
                                color: "white",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/contacts")}
                        >
                            Контакты
                        </ListItem>
                        <ListItem sx={{ color: "white" }}>
                            dana_boutique_kg
                        </ListItem>
                        <ListItem sx={{ color: "white" }}>
                            996 507 708 708
                        </ListItem>
                        <ListItem sx={{ color: "white" }}>
                            (ПН - ВС) 10:00 -22:00
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            display: {
                                xs: "block",
                                sm: "block",
                                md: "block",
                                lg: "block",
                                xl: "block",
                            },
                        }}
                    >
                        <ListItem
                            sx={{
                                fontSize: "1.3em",
                                fontWeight: 800,
                                color: "white",
                                cursor: "pointer",
                            }}
                            onClick={() => navigate("/delivery")}
                        >
                            Оплата
                        </ListItem>
                        <ListItem sx={{ color: "white" }}>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/visa.svg"
                                alt=""
                            />
                            <Box sx={{ width: "10px" }}></Box>

                            <Box sx={{ width: "10px" }}></Box>
                            <img
                                src="https://static.insales-cdn.com/assets/1/762/3212026/1669721932/apple.svg"
                                alt=""
                            />
                        </ListItem>
                    </List>
                    <List>
                        <ListItem
                            sx={{
                                fontSize: {
                                    xs: "15px",
                                    sm: "1.3em",
                                    md: "1.3em",
                                    lg: "1.3em",
                                    xl: "1.3em",
                                },
                                fontWeight: 800,
                                color: "white",
                                cursor: "default",
                            }}
                        >
                            {" "}
                            Социальные сети
                        </ListItem>
                        <ListItem
                            sx={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <Link href="https://www.instagram.com/dana_boutique_kg/">
                                <InstagramIcon sx={{ color: "white" }} />
                            </Link>
                            <TelegramIcon sx={{ color: "white" }} />
                            <TwitterIcon sx={{ color: "white" }} />
                            <CreditScoreIcon sx={{ color: "white" }} />
                        </ListItem>
                    </List>
                    <List
                        sx={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "block",
                                xl: "block",
                            },
                        }}
                    >
                        {/* <Typography
                            sx={{
                                width: "20%",
                                lineHeight: "75%",
                                cursor: "pointer",
                            }}
                        >
                            При заказе на сумму 5000 сом и выше, доставка по
                            городу бесплатная. Если сумма меньше, то доставка по
                            городу от 180 сом. В некоторые отдаленные районы
                            города Курьерская Служба может брать доплату.
                        </Typography> */}
                    </List>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
