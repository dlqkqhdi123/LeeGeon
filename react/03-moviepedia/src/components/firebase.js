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
  query,
  limit,
  orderBy,
  startAfter,
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
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("애러가 아니라 기능이다");
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limitNum)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limitNum)
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // orderBy, limit, starAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  const reviews = result.map((doc) => doc.data());
  return { reviews, lastQuery };
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
};
