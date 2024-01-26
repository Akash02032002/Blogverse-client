// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blog-f9bba.firebaseapp.com',
  projectId: 'blog-f9bba',
  storageBucket: 'blog-f9bba.appspot.com',
  messagingSenderId: '719239640643',
  appId: '1:719239640643:web:a81107c8d0e1ade0fe06f6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
