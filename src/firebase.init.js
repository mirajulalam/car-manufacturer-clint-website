// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiQzPfXWdNHILwwIh7D2H6GSTJyamKbmo",
  authDomain: "car-parts-manufacturer.firebaseapp.com",
  projectId: "car-parts-manufacturer",
  storageBucket: "car-parts-manufacturer.appspot.com",
  messagingSenderId: "301511481219",
  appId: "1:301511481219:web:fd8f1962d30519622448b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;