import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC5CWcCVwTwftYUX__6SSXMNC8dykTBP9I",
    authDomain: "chat-c3b82.firebaseapp.com",
    projectId: "chat-c3b82",
    storageBucket: "chat-c3b82.appspot.com",
    messagingSenderId: "341472204969",
    appId: "1:341472204969:web:e42344a2959e38231af1b8",
    measurementId: "G-WX0S514XC3"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app);