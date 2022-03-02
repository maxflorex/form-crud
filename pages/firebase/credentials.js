// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEx0bIx6R7Z6rlQfPUidhTnt4RCkviE7U",
  authDomain: "crudes-565f4.firebaseapp.com",
  projectId: "crudes-565f4",
  storageBucket: "crudes-565f4.appspot.com",
  messagingSenderId: "1038489396523",
  appId: "1:1038489396523:web:83ab0d2b5f22ee8cb5d16e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp