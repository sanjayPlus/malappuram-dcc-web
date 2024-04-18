// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArWId5srZlU9IwKHHWLHGfat-61NjbwCA",
  authDomain: "dcc-malapuram.firebaseapp.com",
  databaseURL: "https://dcc-malapuram-default-rtdb.firebaseio.com",
  projectId: "dcc-malapuram",
  storageBucket: "dcc-malapuram.appspot.com",
  messagingSenderId: "367530148775",
  appId: "1:367530148775:web:be9a93cbb4e95f2b24ac82",
  measurementId: "G-347M3E5V3H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const messaging = typeof window !== "undefined" ? getMessaging(app) : null;

export {app, auth, messaging}