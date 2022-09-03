
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey ,
  authDomain: process.envREACT_APP_authDomain,
  projectId: process.envREACT_APP_projectId,
  storageBucket: process.envREACT_APP_storageBucket,
  messagingSenderId: process.envREACT_APP_messagingSenderId,
  appId: process.envREACT_APP_appId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fireStorage = firebase.storage();
const fireFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {fireStorage,fireFirestore,timestamp};