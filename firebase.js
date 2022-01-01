import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9VGFyVH8yUeQHvEAxEDeMhYGIEFpY5Q4",
  authDomain: "moviebg-67647.firebaseapp.com",
  projectId: "moviebg-67647",
  storageBucket: "moviebg-67647.appspot.com",
  messagingSenderId: "986524539821",
  appId: "1:986524539821:web:920ac2b755359a381f5f24",
  measurementId: "G-G4PQNYFRPW",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
