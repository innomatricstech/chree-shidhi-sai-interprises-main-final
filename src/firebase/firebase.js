// src/firebase/firebase.js

// 🔥 Firebase core
import { initializeApp } from "firebase/app";

// 🔐 Firebase Auth
import { getAuth } from "firebase/auth";

// 🗄️ Firestore Database
import { getFirestore } from "firebase/firestore";

// 🖼️ Firebase Storage
import { getStorage } from "firebase/storage";

// 📊 Firebase Analytics (browser only)
import { getAnalytics } from "firebase/analytics";

// ✅ Firebase Config (YOUR REAL VALUES)
const firebaseConfig = {
  apiKey: "AIzaSyDeZCqVEYjz8dvE7WzHYOhunkG9m2bEXxE",
  authDomain: "chree-sai-interprises-admin.firebaseapp.com",
  projectId: "chree-sai-interprises-admin",
  storageBucket: "chree-sai-interprises-admin.firebasestorage.app",
  messagingSenderId: "863079412688",
  appId: "1:863079412688:web:016052e8830a56a5d0ffd5",
  measurementId: "G-NYQ7ZY6J8R",
};

// 🚀 Initialize Firebase (ONLY ONCE)
const app = initializeApp(firebaseConfig);

// 🔐 Auth
export const auth = getAuth(app);

// 🗄️ Firestore
export const db = getFirestore(app);

// 🖼️ Storage
export const storage = getStorage(app);

// 📊 Analytics (safe check)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
