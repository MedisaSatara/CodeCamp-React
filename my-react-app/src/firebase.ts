// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCefhXyMhA4BjFmeo8Ju-psBUUZsCz2IE",
  authDomain: "codecamptodo-d0686.firebaseapp.com",
  projectId: "codecamptodo-d0686",
  storageBucket: "codecamptodo-d0686.firebasestorage.app",
  messagingSenderId: "541286665520",
  appId: "1:541286665520:web:793fd0b502640d27e00cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


