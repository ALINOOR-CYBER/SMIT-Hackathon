import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { getFirestore,getDoc,collection,orderBy,deleteDoc, increment,query, addDoc,where, setDoc, getDocs, updateDoc, doc, Timestamp, onSnapshot, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

//const firebaseConfig = {
  //  apiKey: "AIzaSyDMucaC_FGZ3iHzO0ZBN3TLAu-4_Woe8pA",
    //authDomain: "my-hackathon-50f4d.firebaseapp.com",
    //projectId: "my-hackathon-50f4d",
    //storageBucket: "my-hackathon-50f4d.appspot.com",
//    messagingSenderId: "152412645025",
  //  appId: "1:152412645025:web:a301e7a00b31257c7d32e0"
  //};
  const firebaseConfig = {
    apiKey: "AIzaSyBF9GIheDmiORNf9wfkm79AKbwBG8H-iJE",
    authDomain: "automotive-7870a.firebaseapp.com",
    projectId: "automotive-7870a",
    storageBucket: "automotive-7870a.appspot.com",
    messagingSenderId: "1080619282985",
    appId: "1:1080619282985:web:98c37b28b50280e129e238",
    measurementId: "G-7HXQY6VD8V"
  };0
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

  
   async function abc(){


    await addDoc(collection(db, "new"), {
      name: "whatsup doc"
      
      });

   }
   abc()