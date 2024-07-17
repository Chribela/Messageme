import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-7d941.firebaseapp.com",
    projectId: "reactchat-7d941",
    storageBucket: "reactchat-7d941.appspot.com",
    messagingSenderId: "448919576345",
    appId: "1:448919576345:web:65ab4c79b8482a9516ef88"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()