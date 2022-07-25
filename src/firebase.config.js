import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2QPruTlZz-vIogJNLI5Ct5icOLJWB4nw",
  authDomain: "dilfuza-store.firebaseapp.com",
  projectId: "dilfuza-store",
  storageBucket: "dilfuza-store.appspot.com",
  messagingSenderId: "20776839155",
  appId: "1:20776839155:web:c57d425c3107467778d486",
  measurementId: "G-ET0H85HB2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()