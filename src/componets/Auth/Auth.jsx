import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContextProvider";
// import Img from "../../helper/img/Wave.svg";
// import AuthRightForm from "./AuthRightForm";
const theme = createTheme();

export default function Auth() {
    const navigate = useNavigate();
    const {
        email,
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
    } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Box
            sx={{
                backgroundImage: ` url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 245%2c 253%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c242 C 57.6%2c201.6 172.8%2c59.6 288%2c40 C 403.2%2c20.4 460.8%2c127.8 576%2c144 C 691.2%2c160.2 748.8%2c107.8 864%2c121 C 979.2%2c134.2 1036.8%2c215.6 1152%2c210 C 1267.2%2c204.4 1382.4%2c116.4 1440%2c93L1440 560L0 560z' fill='rgba(255%2c 201%2c 237%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c432 C 57.6%2c428.8 172.8%2c394.4 288%2c416 C 403.2%2c437.6 460.8%2c550.6 576%2c540 C 691.2%2c529.4 748.8%2c379.4 864%2c363 C 979.2%2c346.6 1036.8%2c453.8 1152%2c458 C 1267.2%2c462.2 1382.4%2c398.8 1440%2c384L1440 560L0 560z' fill='rgba(251%2c 230%2c 247%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");`,
            }}
        >
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="lg" sx={{ width: "56%" }}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 3, pb: 4 }}
                    >
                        <Typography
                            sx={{
                                display: "flex",
                                fontWeight: 700,
                                fontSize: 26,
                            }}
                            variant="h5"
                        >
                            ЗАРЕГИСТРИРУЙТЕСЬ
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: { xs: 14, sm: 16 },
                            }}
                        >
                            Почта
                        </Typography>
                        <TextField
                            className="input-email"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            // ===========
                            helperText={emailError}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />

                        <Box sx={{ mt: 2 }}>
                            <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                                Пароль
                            </Typography>
                            <TextField
                                className="input-password"
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                // ===============
                                helperText={passwordError}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                sx={{ borderRadius: "0" }}
                            />
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        ></Box>
                        {hasAccount ? (
                            <Button
                                className="button_sign_in"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    fontWeight: 600,
                                    backgroundColor: "#ee09ac",
                                    height: "55px",
                                    marginBottom: "20px",
                                }}
                                onClick={() => {
                                    handleLogin();
                                    navigate("/");
                                }}
                            >
                                Войти
                            </Button>
                        ) : (
                            <Button
                                className="button_register"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    fontWeight: 600,
                                    backgroundColor: "#ee09ac",
                                    height: "55px",
                                    marginBottom: "20px",
                                }}
                                onClick={() => {
                                    handleSignup();
                                    navigate("/products");
                                }}
                            >
                                Зарегистрироваться
                            </Button>
                        )}

                        <Grid
                            container
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Grid item>
                                {hasAccount ? (
                                    <Link
                                        className="links"
                                        sx={{
                                            color: "black",
                                            marginBottom: "100px",
                                        }}
                                        href="#"
                                        variant="body2"
                                        onClick={() =>
                                            setHasAccount(!hasAccount)
                                        }
                                    >
                                        {
                                            "Нет аккаунта? Зарегистрируйтесь прямо сейчас"
                                        }
                                    </Link>
                                ) : (
                                    <Link
                                        className="links"
                                        sx={{
                                            color: "black",
                                            marginBottom: "100px",
                                        }}
                                        href="#"
                                        variant="body2"
                                        onClick={() =>
                                            setHasAccount(!hasAccount)
                                        }
                                    >
                                        {"Уже есть аккаунт? Войдите"}
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    );
}
