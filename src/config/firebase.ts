// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXEVhPYPBDAwIYMcnoV_PppUDGYQKhPZc",
  authDomain: "gamenotes-b30b3.firebaseapp.com",
  databaseURL: "https://gamenotes-b30b3-default-rtdb.firebaseio.com",
  projectId: "gamenotes-b30b3",
  storageBucket: "gamenotes-b30b3.appspot.com",
  messagingSenderId: "428185603653",
  appId: "1:428185603653:web:acccb11d30cc2cc9771d2c",
  measurementId: "G-5CM2LHYM97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;