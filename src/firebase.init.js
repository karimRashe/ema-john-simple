// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNpnyh-snIRAlvOD1fojC9DidsO8CMj8g",
    authDomain: "ema-john-simple-46430.firebaseapp.com",
    projectId: "ema-john-simple-46430",
    storageBucket: "ema-john-simple-46430.appspot.com",
    messagingSenderId: "32052503458",
    appId: "1:32052503458:web:97f316faf7ce399fc288fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;