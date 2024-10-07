// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMPf36NYoSL9zEiWHkdbM7GVJwrFYuYuE",
  authDomain: "nexusdatabase-21807.firebaseapp.com",
  projectId: "nexusdatabase-21807",
  storageBucket: "nexusdatabase-21807.appspot.com",
  messagingSenderId: "800865983063",
  appId: "1:800865983063:web:cc9980faa6bc68220fe112",
  measurementId: "G-0MR0SCKR7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
