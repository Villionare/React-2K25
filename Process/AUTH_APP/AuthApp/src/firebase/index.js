// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGZge_toGtYIyYomurvvXwK90II0fr9kc",
    authDomain: "auth-project-f4ea8.firebaseapp.com",
    projectId: "auth-project-f4ea8",
    storageBucket: "auth-project-f4ea8.firebasestorage.app",
    messagingSenderId: "708142524770",
    appId: "1:708142524770:web:faf1bf89591d73d8dc643b",
    measurementId: "G-XZG612TL6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);