import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6QKHyzJgcKdZVqHicFVPBb8T458d0xnA",
  authDomain: "blog-a5f00.firebaseapp.com",
  projectId: "blog-a5f00",
  storageBucket: "blog-a5f00.appspot.com",
  messagingSenderId: "1016522526632",
  appId: "1:1016522526632:web:5921deead96c5fc701d79d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)