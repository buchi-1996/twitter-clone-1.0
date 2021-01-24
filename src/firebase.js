import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXOwKudvr3mKUZGI0pyqxdFmSVbULbp7k",
    authDomain: "twitter-clone-19a7a.firebaseapp.com",
    projectId: "twitter-clone-19a7a",
    storageBucket: "twitter-clone-19a7a.appspot.com",
    messagingSenderId: "514228567870",
    appId: "1:514228567870:web:2ee20df18326099e46766f",
    measurementId: "G-QXJ6RK0KTE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;