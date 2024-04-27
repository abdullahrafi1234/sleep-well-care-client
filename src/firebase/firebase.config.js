// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAv9x7HL7s9mLCf8sQIfoWErfQkZ7NEJOE",
//   authDomain: "ten-assignment-own.firebaseapp.com",
//   projectId: "ten-assignment-own",
//   storageBucket: "ten-assignment-own.appspot.com",
//   messagingSenderId: "172039355056",
//   appId: "1:172039355056:web:a839f7b31adf279c7a5975"
// };

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app