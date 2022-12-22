import React, { createContext, useContext, useReducer } from "react";
import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../fire";
// import AddProduct from "../Products/AddProduct";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
    products: [],
    productsDetails: null,
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };

        case "GET_PRODUCTS_DETAILS":
            return { ...state, productsDetails: action.payload };

        default:
            return state;
    }
}

const ProductContextProvaider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    //?collection - ф для получения ссылки на коллекции данных
    const productCollectionRef = collection(db, "products");

    //? read
    async function getProducts() {
        const data = await getDocs(productCollectionRef);

        dispatch({
            type: "GET_PRODUCTS",
            payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });
        // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    //? create

    async function createProduct(newProduct) {
        await addDoc(productCollectionRef, newProduct);
    }

    async function getOneProductDetails(id) {
        const productDocRef = doc(db, "products", id);
        console.log(productDocRef);
        const productDetails = await getDoc(productDocRef);
        dispatch({
            type: "GET_PRODUCTS_DETAILS",
            payload: productDetails.data(),
        });
    }

    //! edit

    async function updateProduct(id, updatedProduct) {
        const productDocRef = doc(db, "products", id);

        await updateDoc(productDocRef, updatedProduct);
        getProducts();
    }

    //!delete

    async function deleteProduct(id) {
        const productDocRef = doc(db, "products", id);
        await deleteDoc(productDocRef);
        getProducts();
    }
    async function updateProduct(id, updatedProduct) {
        const productDocRef = doc(db, "products", id);

        await updateDoc(productDocRef, updatedProduct);
        getProducts();
    }

    const values = {
        createProduct,
        getProducts,
        products: state.products,
        getOneProductDetails,
        productDetails: state.productsDetails,
        updateProduct,
        deleteProduct,
    };
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvaider;
