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
  exists,
  where,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  Data,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEyt7KZUW4031Lfa_lVuqOdOnk6hLoLtU",
  authDomain: "disease-8f5ff.firebaseapp.com",
  projectId: "disease-8f5ff",
  storageBucket: "disease-8f5ff.appspot.com",
  messagingSenderId: "100793827741",
  appId: "1:100793827741:web:27c61645f46d157aee2f74",
  measurementId: "G-MN79TPVD2B",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  let docQuery;
  if (options === undefined) {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const result = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }));
    return result;
  } else if (options.lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      limit(options.limit)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // orderBy, limit, starAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));
  // const reviews = result.map((doc) => {
  //   const obj = doc.data();
  //   obj.docId = doc.id;
  //   return obj;
  // });
  return { reviews, lastQuery };
}

async function getData(collectionName, fieldName, condition, value) {
  const docQuery = query(
    collection(db, collectionName),
    where(fieldName, condition, value)
  );

  const querySnapshot = await getDocs(docQuery);
  const data = querySnapshot.docs.map((doc) => ({
    docId: doc.id,
    ...doc.data(),
  }));
  return data.length === 1 ? data[0] : data;
}

async function getMember(values) {
  const { id, password } = values;
  let message;
  let memberObj = {};

  const docQuery = query(collection(db, "member"), where("id", "==", id));
  const querySnapshot = await getDocs(docQuery);
  if (querySnapshot.docs.length !== 0) {
    const memberData = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }))[0];
    if (memberData.password == password) {
      memberObj = memberData;
    } else {
      message = "비밀번호가 일치하지 않습니다. ";
    }
  } else {
    message = "일치하는 아이디가 없습니다 ";
  }

  return { memberObj, message };
}

async function deleteDatas(collectionName, docId, imgUrl) {
  const storage = getStorage();
  try {
    const deleteRef = ref(storage, imgUrl);
    await deleteObject(deleteRef);
    await deleteDoc(doc(db, collectionName, docId));
  } catch (error) {
    return false;
  }
  return true;
}

async function addDatas(collectionName, formData) {
  const uuid = crypto.randomUUID();
  const path = `movie/${uuid}`;
  const lastId = (await getLastId(collectionName)) + 1;
  const time = new Date().getTime();
  // 파일을 저장하고 url 을 받아온다
  const url = await uploadImage(path, formData.imgUrl);

  formData.id = lastId;
  formData.created = time;
  formData.updateAt = time;
  formData.imgUrl = url;

  const result = await addDoc(collection(db, collectionName), formData);
  const docSnap = await getDoc(result);
  if (docSnap.exists()) {
    const review = { docId: docSnap.id, ...docSnap.data() };
    return { review };
  }
}

async function updateDatas(collectionName, docId, updateData) {
  const docRef = doc(db, collectionName, docId); // 업데이트하려는 문서의 참조를 가져옵니다.
  try {
    await updateDoc(docRef, updateData); // updateDoc 함수를 사용하여 문서를 업데이트합니다.
    return true;
  } catch (error) {
    console.error("Error updating document: ", error); // 오류 발생 시 콘솔에 오류 메시지를 출력합니다.
    return false;
  }
}
async function uploadImage(path, imgFile) {
  const storage = getStorage();
  const imageRef = ref(storage, path);

  // File 객체를 꺼내서 스토리지에 저장
  await uploadBytes(imageRef, imgFile);

  // 저장한 File 의 Url을 받아온다
  const url = await getDownloadURL(imageRef);
  return url;
}

async function getLastId(collectionName) {
  const docQuery = query(
    collection(db, collectionName),
    orderBy("id", "desc"),
    limit(1)
  );
  const lastDoc = await getDocs(docQuery);
  const lastId = lastDoc.docs[0].data().id;

  return lastId;
}

async function upDate(collectionName, docId, text) {
  const docQuery = doc(db, collectionName, docId);
  const upDate = await updateDoc(docQuery, text);
}
const getTechInfo = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  let techInfo = null;
  querySnapshot.forEach((doc) => {
    techInfo = doc.data();
  });
  return techInfo;
};

export {
  db,
  getDocs,
  collection,
  getDatas,
  setDoc,
  addDoc,
  addDatas,
  doc,
  deleteDoc,
  updateDoc,
  deleteDatas,
  updateDatas,
  getMember,
  getData,
  upDate,
  getTechInfo,
};
