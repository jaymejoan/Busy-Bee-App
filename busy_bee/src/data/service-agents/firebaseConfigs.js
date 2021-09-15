/**
 * This file contains the configurations required to connect to the external database hosted on Firebase.
 * Reference: https://docs.expo.dev/guides/using-firebase/
 */
import * as React from "react";

import * as firebase from "firebase";
// import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyDtIjqwxv5ZSwxDgGKprvQHyGHk4pbBBqs",
  authDomain: "busy-bee-database.firebaseapp.com",
  projectId: "busy-bee-database",
  storageBucket: "busy-bee-database.appspot.com",
  messagingSenderId: "765069339368",
  appId: "1:765069339368:web:cd2918486e9a2f8b87b75d",
  measurementId: "G-KQ7TMHHHVK",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const dbh = firebase.firestore();

export default dbh;

// const analytics = getAnalytics(app);
