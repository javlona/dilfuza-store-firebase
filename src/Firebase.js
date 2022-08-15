
import { initializeApp } from "firebase/app";
import { getAnalytics, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
}
