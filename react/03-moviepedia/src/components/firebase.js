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
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdMfkFXGyDXxHjqu47Jzs1IkSd7YIpD24",
  authDomain: "project0304-8472f.firebaseapp.com",
  projectId: "project0304-8472f",
  storageBucket: "project0304-8472f.appspot.com",
  messagingSenderId: "468535082988",
  appId: "1:468535082988:web:b30f3147cc5a8637504ac9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs;

  const reviews = result.map((doc) => doc.data());
  return { reviews };
}

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  // addDatas,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
};
