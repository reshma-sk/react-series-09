// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoYa1Ul9g7mIBkC_0xCRAxOe4UXxIi-DU",
  authDomain: "food-order-93648.firebaseapp.com",
  projectId: "food-order-93648",
  storageBucket: "food-order-93648.appspot.com",
  messagingSenderId: "146441380720",
  appId: "1:146441380720:web:070420b89e061a525725b5",
  measurementId: "G-C95NS2T1BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();