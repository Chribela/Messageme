
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "funlearn-bc0c6.firebaseapp.com",
  projectId: "funlearn-bc0c6",
  storageBucket: "funlearn-bc0c6.appspot.com",
  messagingSenderId: "214319026833",
  appId: "1:214319026833:web:2a3f2451410d78522a2530"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()