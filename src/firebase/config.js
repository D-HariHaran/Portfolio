import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyC59YvFKHNke1NepqWE1u-E5Z093BBD4Gk",
  authDomain: "photography-portfolio-e5d95.firebaseapp.com",
  projectId: "photography-portfolio-e5d95",
  storageBucket: "photography-portfolio-e5d95.appspot.com",
  messagingSenderId: "962372284020",
  appId: "1:962372284020:web:46c47cb93cefb048cc6b21"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
