import React from 'react'
import { useState, useEffect} from 'react'
import { fireStorage,fireFirestore } from '../firebaseConfig'
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, serverTimestamp,collection } from "firebase/firestore"; 

const useStorage = (file) => {
    const [progress,setProgress]=useState(null);
    const [error,setError]=useState('');
    const [url,setUrl]=useState(null);
useEffect(()=>{
    const storageRef = ref(fireStorage, file.name);
    const collectionRef = collection(fireFirestore, "images");


const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgress(progress);
    console.log('Upload is ' + progress + '% done');
 
},(err)=>{
setError(err);
},async ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        addDoc(collectionRef, {
            createdAt: serverTimestamp(),
            url: downloadURL
        });
        setUrl(downloadURL);
      });
   
})
},[file]);

return {progress,url,error}
}


export default useStorage