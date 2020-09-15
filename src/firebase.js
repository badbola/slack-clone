import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChYA45sTcqk789J9sAMkB7_TUSWVjsMCk",
  authDomain: "react-slack-clones.firebaseapp.com",
  databaseURL: "https://react-slack-clones.firebaseio.com",
  projectId: "react-slack-clones",
  storageBucket: "react-slack-clones.appspot.com",
  messagingSenderId: "778033920407",
  appId: "1:778033920407:web:9886c6d2cfc3df80faacd2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
