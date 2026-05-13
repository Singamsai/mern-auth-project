// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-project-fddb8.firebaseapp.com",
  projectId: "mern-auth-project-fddb8",
  storageBucket: "mern-auth-project-fddb8.firebasestorage.app",
  messagingSenderId: "130437893121",
  appId: "1:130437893121:web:953985da9b6fd127180400",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
