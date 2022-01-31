import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/storage';




const firebaseConfig = {
    apiKey: "AIzaSyCxFiOvOKdyXZXkmFWmzNQOX13ljzi6aS0",
    authDomain: "movie-show-xs.firebaseapp.com",
    projectId: "movie-show-xs",
    storageBucket: "movie-show-xs.appspot.com",
    messagingSenderId: "638586501074",
    appId: "1:638586501074:web:8a339bba2b60323e00ba0b",
    measurementId: "G-4G4Z0219QM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider=new GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth, provider,storage};
  export default db;

  
