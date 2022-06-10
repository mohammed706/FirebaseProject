import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_PFFybD2Xlp_pWe55hw36T3z2R9Kq0k4",
  authDomain: "chatapp-25f49.firebaseapp.com",
  projectId: "chatapp-25f49",
  storageBucket: "chatapp-25f49.appspot.com",
  messagingSenderId: "552666210962",
  appId: "1:552666210962:web:982642e022f4802a6f3c4b"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
