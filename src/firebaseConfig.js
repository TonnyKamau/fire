
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { getFirestore, collection, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCTJbe8ubrnx6GVK84BLjVUol7av-XCNKM",
  authDomain: "react-firebase-681a6.firebaseapp.com",
  projectId: "react-firebase-681a6",
  storageBucket: "react-firebase-681a6.appspot.com",
  messagingSenderId: "808061245395",
  appId: "1:808061245395:web:9f69e949a64730c1808126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStorage = getStorage(app);
const fireFirestore = getFirestore(app);
export {fireStorage,fireFirestore,app};