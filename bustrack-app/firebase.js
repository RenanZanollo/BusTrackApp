import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // 👈 novo

const firebaseConfig = {
  apiKey: "AIzaSyB-_h_2tZmWk2pEN1e52ya5WY6fqYSbGaE",
  authDomain: "bus-track-7e49e.firebaseapp.com",
  projectId: "bus-track-7e49e",
  storageBucket: "bus-track-7e49e.firebasestorage.app",
  messagingSenderId: "361118928472",
  appId: "1:361118928472:web:ecc59e4e1b562477fcc42d",
  measurementId: "G-KEKJQ6YK5R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // 👈 novo

export { db, auth };
