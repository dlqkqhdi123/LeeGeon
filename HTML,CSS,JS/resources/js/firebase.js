// Import the functions you need from the SDKs you need
// gkskenftkasptdhdutjtclfvkfdkghqrhd
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  uptateDoc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnW0xykXXw7syjS3qPKAbyaWxinAWmr-A",
  authDomain: "test-0101-2910e.firebaseapp.com",
  projectId: "test-0101-2910e",
  storageBucket: "test-0101-2910e.appspot.com",
  messagingSenderId: "155382254005",
  appId: "1:155382254005:web:b75a9315b320c9e02071fc",
  measurementId: "G-FQDJK63C2M",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

async function uptateDatas(collectionName, docId, uptateInfoObj) {
  const docRef = await doc(db, collectionName, docId);
  const docData = await getDocs(docRef);
  console.log(docData);
  debugger;
  await uptateDoc(docRef, uptateInfoObj);
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  doc,
  addDatas,
  deleteDoc,
  deleteDatas,
  uptateDoc,
};
