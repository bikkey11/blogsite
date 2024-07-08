// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGp7HEw8HAoH5qBXOnGXKCFcrRCgSBP4",
  authDomain: "blogsite-21a67.firebaseapp.com",
  projectId: "blogsite-21a67",
  storageBucket: "blogsite-21a67.appspot.com",
  messagingSenderId: "660605009791",
  appId: "1:660605009791:web:6e3e516fb794e38fe0a44a",
  measurementId: "G-YJYH5BNWDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore(app)
export const storage=getStorage();