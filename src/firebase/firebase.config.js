// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO2A0JWcRqfVZttqU7EIrKXHYb-GBtvn0",
  authDomain: "dragon-news-efb37.firebaseapp.com",
  projectId: "dragon-news-efb37",
  storageBucket: "dragon-news-efb37.firebasestorage.app",
  messagingSenderId: "512256930666",
  appId: "1:512256930666:web:d9ae83c8a374bc899dab13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);