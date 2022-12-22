// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQjNAYcCzWWXDYTbud50dmtYLijy11EJ8",
  authDomain: "nadyapokladsite.firebaseapp.com",
  projectId: "nadyapokladsite",
  storageBucket: "nadyapokladsite.appspot.com",
  messagingSenderId: "743996143817",
  appId: "1:743996143817:web:ed17dc5da2d36688507518",
  measurementId: "G-NHTQ5WCFL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);