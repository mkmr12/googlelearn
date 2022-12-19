// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF7mPAD_mtrgPfFAOQC1vvM7XuSodZSus",
  authDomain: "signin-354811.firebaseapp.com",
  databaseURL: "https://signin-354811-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "signin-354811",
  storageBucket: "signin-354811.appspot.com",
  messagingSenderId: "120795490301",
  appId: "1:120795490301:web:8e59320c8380d0dea5db94",
  measurementId: "G-WPWKKW3ZLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);