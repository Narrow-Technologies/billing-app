import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCVTBh4IlN3Mig6LMnnrOx1kSEmXaiMa5M",
  authDomain: "our-billing-app.firebaseapp.com",
  databaseURL: "https://our-billing-app.firebaseio.com",
  projectId: "our-billing-app",
  storageBucket: "our-billing-app.appspot.com",
  messagingSenderId: "888764695611",
  appId: "1:888764695611:web:47b4e4298505d1a5b5481e",
  measurementId: "G-8LZD9TPERB",
};

firebase.initializeApp(config);
// firebase.analytics();

export default firebase;
