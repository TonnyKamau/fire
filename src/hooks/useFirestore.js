import React, { useEffect, useState} from 'react';
import { fireFirestore } from '../firebaseConfig';
import { collection, getDocs,query,onSnapshot, orderBy } from "firebase/firestore"; 

const useFirestore = (collect) => {
    const[docs,setDocs]=useState([]);
    useEffect(()=>{ 
const q = query(collection(fireFirestore, collect));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const list = [];
  querySnapshot.forEach((doc) => {
    list.push({...doc.data(), id: doc.id});
    console.log(list)
  });
  setDocs(list);
});

return ()=>unsubscribe();
},[collect]);

  

  return {docs};
}

export default useFirestore