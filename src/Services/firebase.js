// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCs4T9UiJ3NIjSUPUdpb1iu6Xzb1rmYMls",
  authDomain: "netflixx-pak.firebaseapp.com",
  projectId: "netflixx-pak",
  storageBucket: "netflixx-pak.appspot.com",
  messagingSenderId: "587207740462",
  appId: "1:587207740462:web:58af8db0b385a4e873a3bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
