import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnyeiSb_jBl_xmhR-P46V5gRmpfLvOyqQ",
  authDomain: "zeno-e6e4b.firebaseapp.com",
  projectId: "zeno-e6e4b",
  storageBucket: "zeno-e6e4b.firebasestorage.app",
  messagingSenderId: "331225647758",
  appId: "1:331225647758:web:340cb3767a3ebb8da7d7df",
  measurementId: "G-TDN1JP1EKG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
