// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaFvrsGr0IQAjox5JUk8BEZOWruok13iQ",
  authDomain: "gym-zone-abd0e.firebaseapp.com",
  projectId: "gym-zone-abd0e",
  storageBucket: "gym-zone-abd0e.appspot.com",
  messagingSenderId: "358338856293",
  appId: "1:358338856293:web:0f14ecedf99b7b1bc7cd8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);