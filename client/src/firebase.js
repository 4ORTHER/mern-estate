// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d57ee.firebaseapp.com",
  projectId: "mern-estate-d57ee",
  storageBucket: "mern-estate-d57ee.appspot.com",
  messagingSenderId: "242689324981",
  appId: "1:242689324981:web:9aac2009fabc436e1f4bfc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);