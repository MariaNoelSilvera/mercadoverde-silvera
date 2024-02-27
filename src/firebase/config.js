// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBq8EEXr2e9iD60FyijDBrtKSfVUukGme0",
  authDomain: "mercadoverde-silvera.firebaseapp.com",
  projectId: "mercadoverde-silvera",
  storageBucket: "mercadoverde-silvera.appspot.com",
  messagingSenderId: "1028799800526",
  appId: "1:1028799800526:web:103d859aa0dcb7a2569c9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
