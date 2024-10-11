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
  apiKey: "AIzaSyDpRdwEFYf4TuRuNs7lqqN8hjFcWrrxCF0",
  authDomain: "dashboard-5414.firebaseapp.com",
  projectId: "dashboard-5414",
  storageBucket: "dashboard-5414.appspot.com",
  messagingSenderId: "88087169624",
  appId: "1:88087169624:web:c4c80136a748556c6e582d",
  measurementId: "G-YWXH5V7YFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);