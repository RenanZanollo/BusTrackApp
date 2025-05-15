// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-_h_2tZmWk2pEN1e52ya5WY6fqYSbGaE",
  authDomain: "bus-track-7e49e.firebaseapp.com",
  projectId: "bus-track-7e49e",
  storageBucket: "bus-track-7e49e.firebasestorage.app",
  messagingSenderId: "361118928472",
  appId: "1:361118928472:web:ecc59e4e1b562477fcc42d",
  measurementId: "G-KEKJQ6YK5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);