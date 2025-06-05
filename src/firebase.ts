// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnyeiSb_jBl_xmhR-P46V5gRmpfLvOyqQ",
  authDomain: "zeno-e6e4b.firebaseapp.com",
  projectId: "zeno-e6e4b",
  storageBucket: "zeno-e6e4b.firebasestorage.app",
  messagingSenderId: "331225647758",
  appId: "1:331225647758:web:340cb3767a3ebb8da7d7df",
  measurementId: "G-TDN1JP1EKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export { db };  // Export Firestore instance
