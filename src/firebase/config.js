import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyANLBrSQRzWgC6Qz-N_y52nFFRIJFk9xrk",
    authDomain: "avinash-portfolio-project.firebaseapp.com",
    projectId: "avinash-portfolio-project",
    storageBucket: "avinash-portfolio-project.appspot.com",
    messagingSenderId: "959015260199",
    appId: "1:959015260199:web:8d274890789cb444d0fe02"
};
  

firebase.initializeApp(firebaseConfig)
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
