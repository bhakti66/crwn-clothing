import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAfLuouhGfaqYQuBYpKA3hGYXKw4aFiU68",
    authDomain: "crwn-clothing-7bd1e.firebaseapp.com",
    projectId: "crwn-clothing-7bd1e",
    storageBucket: "crwn-clothing-7bd1e.appspot.com",
    messagingSenderId: "1028501610445",
    appId: "1:1028501610445:web:e3be5bf7aa44a134d46e84",
    measurementId: "G-K2EKGHV394"
  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;