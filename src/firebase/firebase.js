import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyCsspxEwfhqUBZ6S2nE-JhZc68yzYpDZpA",
  authDomain: "one-time-jobs.firebaseapp.com",
  databaseURL: "https://one-time-jobs.firebaseio.com",
  projectId: "one-time-jobs",
  storageBucket: "one-time-jobs.appspot.com",
  messagingSenderId: "837406126188"
};

const devConfig = {
  apiKey: "AIzaSyCsspxEwfhqUBZ6S2nE-JhZc68yzYpDZpA",
  authDomain: "one-time-jobs.firebaseapp.com",
  databaseURL: "https://one-time-jobs.firebaseio.com",
  projectId: "one-time-jobs",
  storageBucket: "one-time-jobs.appspot.com",
  messagingSenderId: "837406126188"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
