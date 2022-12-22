import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAlRXAyZhRHbQDi90uQLsgPjhIFezTiw-s",
    authDomain: "testing-first-38110.firebaseapp.com",
    projectId: "testing-first-38110",
    storageBucket: "testing-first-38110.appspot.com",
    messagingSenderId: "337473258478",
    appId: "1:337473258478:web:702750bb9034e10745c4ff",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export default fire;
