// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1uye8bjXudmEYuEZa8Th-9yalYLbg25Q",
  authDomain: "sign-in-with-react-router.firebaseapp.com",
  projectId: "sign-in-with-react-router",
  storageBucket: "sign-in-with-react-router.appspot.com",
  messagingSenderId: "598658095499",
  appId: "1:598658095499:web:8067baf531ff73c1f0378e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;