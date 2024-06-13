// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB64WGOAAj4eFrI86-bQbTeaBFvQhNWUeA",
  authDomain: "dmeo-b10c8.firebaseapp.com",
  projectId: "dmeo-b10c8",
  storageBucket: "dmeo-b10c8.appspot.com",
  messagingSenderId: "414038167308",
  appId: "1:414038167308:web:07e64ff85190ea1e68c329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)