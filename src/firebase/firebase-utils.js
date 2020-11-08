import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA9aBcU90Gu-RENkCe5NzCtth0UpfXcAqo",
    authDomain: "crwn-clothing-3e4ca.firebaseapp.com",
    databaseURL: "https://crwn-clothing-3e4ca.firebaseio.com",
    projectId: "crwn-clothing-3e4ca",
    storageBucket: "crwn-clothing-3e4ca.appspot.com",
    messagingSenderId: "300579012382",
    appId: "1:300579012382:web:c1392efa8773383509130f",
    measurementId: "G-R3NNP0293F"
};

firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
