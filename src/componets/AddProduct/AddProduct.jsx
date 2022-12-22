import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct, useProducts } from "../../Context/ProductContextProvaider";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../fire";

const AddProduct = () => {
    const { createProduct, getProducts } = useProducts();
    const navigate = useNavigate();
    useEffect(() => {
        getProducts();
    }, []);

    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        picture: "",
        type: "",
    });

    const handleInput = (e) => {
        if (e.target.name === "price") {
            let obj = { ...product, [e.target.name]: Number(e.target.value) };
            setProduct(obj);
        } else {
            let obj = { ...product, [e.target.name]: e.target.value };
            setProduct(obj);
        }
    };
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        setChecked(e.target.checked);
        let obj = { ...product, [e.target.name]: !checked };
        setProduct(obj);
    };
    const [file, setfile] = useState();
    const [uploadProgress, setUploadProgress] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, "picture/" + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                    console.log("Upload is " + progress + "% done");

                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case "storage/unauthorized":
                            break;
                        case "storage/canceled":

                        // ...

                        case "storage/unknown":
                    }
                },
                (error) => {
                    switch (error.code) {
                        case "storage/unauthorized":
                            break;
                        case "storage/canceled":

                        // ...

                        case "storage/unknown":
                    }
                }
            );
        };
        file && uploadFile();
    }, [file]);
    return (
        <>
            <Box
                align="center"
                sx={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(255%2c 220%2c 242%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c403.327C77.248%2c398.852%2c144.721%2c363.501%2c218.383%2c339.811C321.081%2c306.782%2c460.804%2c327.994%2c518.219%2c236.663C573.991%2c147.946%2c503.549%2c32.523%2c474.932%2c-68.285C449.834%2c-156.695%2c427.046%2c-248.752%2c361.991%2c-313.667C299.087%2c-376.435%2c206.744%2c-389.248%2c123.127%2c-419.331C33.594%2c-451.542%2c-57.058%2c-530.826%2c-145.737%2c-496.333C-235.49%2c-461.422%2c-238.915%2c-334.028%2c-295.856%2c-256.361C-346.511%2c-187.268%2c-447.759%2c-150.924%2c-461.024%2c-66.285C-474.293%2c18.378%2c-401.605%2c89.327%2c-361.942%2c165.293C-324.558%2c236.895%2c-302.761%2c321.71%2c-235.274%2c366.094C-167.563%2c410.625%2c-80.906%2c408.014%2c0%2c403.327' fill='%23ff7dcf'%3e%3c/path%3e%3cpath d='M1440 1098.921C1540.075 1086.665 1622.864 1029.2649999999999 1714.359 986.9110000000001 1822.4270000000001 936.885 1978.9389999999999 937.01 2026.04 827.636 2073.364 717.744 1948.7269999999999 607.69 1928.4479999999999 489.772 1908.9850000000001 376.602 1984.3020000000001 240.296 1909.9769999999999 152.76299999999998 1835.763 65.36099999999999 1694.253 97.17500000000001 1580.83 80.37900000000002 1483.961 66.03500000000003 1389.092 39.69100000000003 1293.625 61.49400000000003 1194.313 84.17500000000001 1100.529 131.127 1031.32 205.87599999999998 960.806 282.034 931.1990000000001 382.84000000000003 903.487 482.861 872.157 595.94 818.776 715.035 859.794 824.971 901.375 936.415 1011.2049999999999 1009.062 1118.767 1059.848 1218.324 1106.855 1330.719 1112.304 1440 1098.921' fill='white'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
                }}
            >
                <FormControl sx={{ width: "40%", mt: "5%", mb: "5%" }}>
                    <TextField
                        onChange={handleInput}
                        label="Title"
                        size="small"
                        name="title"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Picture"
                        size="small"
                        name="picture"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Price"
                        size="small"
                        name="price"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Descripton"
                        size="small"
                        name="description"
                        sx={{ margin: "1%" }}
                    />
                    <TextField
                        onChange={handleInput}
                        label="Type"
                        size="small"
                        name="type"
                        sx={{ margin: "1%" }}
                    />

                    <Button
                        onClick={() => {
                            createProduct(product);
                            navigate("/product");
                        }}
                        variant="outlined"
                        sx={{ margin: "1%" }}
                        className={
                            uploadProgress !== null && uploadProgress < 100
                                ? "disabled pe-none"
                                : "pe-auto btn-success"
                        }
                    >
                        Добавить Товар
                    </Button>
                </FormControl>
            </Box>
        </>
    );
};

export default AddProduct;
