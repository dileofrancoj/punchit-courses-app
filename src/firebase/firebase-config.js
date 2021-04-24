import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  /*
  FirebaseCredential
   */
  apiKey: "AIzaSyBFJsbYufJWzjp0IKbDjtsi9-Gz7Fa7MR0",
  authDomain: "punchit-certificados-app.firebaseapp.com",
  projectId: "punchit-certificados-app",
  storageBucket: "punchit-certificados-app.appspot.com",
  messagingSenderId: "154440737319",
  appId: "1:154440737319:web:36c2eb1bf741e690d5e402",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
