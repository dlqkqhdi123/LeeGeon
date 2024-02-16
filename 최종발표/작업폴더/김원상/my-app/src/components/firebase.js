import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNWPcF6gdzbYCRe_IjMDTIE2v-abS58ZE",
  authDomain: "chatting-8e85c.firebaseapp.com",
  projectId: "chatting-8e85c",
  storageBucket: "chatting-8e85c.appspot.com",
  messagingSenderId: "814587254247",
  appId: "1:814587254247:web:d9f7b87fec1304e3e85942",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { database, ref, onValue, push };
