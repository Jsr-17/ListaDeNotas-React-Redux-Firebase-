// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFOyPa99g029NPNYtBazu5Wan6XTaQe4I",
  authDomain: "react-cursos-e3a30.firebaseapp.com",
  projectId: "react-cursos-e3a30",
  storageBucket: "react-cursos-e3a30.firebasestorage.app",
  messagingSenderId: "814471580696",
  appId: "1:814471580696:web:72e0a1664c72b676f6476d",
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(fireBaseApp);
export const FirebaseDB = getFirestore(fireBaseApp);
