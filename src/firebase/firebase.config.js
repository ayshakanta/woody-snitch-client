// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjZl5kCIPN_TVPfYrdyqTCgQzc8KdM2as",
  authDomain: "woody-snitch.firebaseapp.com",
  projectId: "woody-snitch",
  storageBucket: "woody-snitch.appspot.com",
  messagingSenderId: "103801548624",
  appId: "1:103801548624:web:32efcb3a6c2d62e0f8c655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 