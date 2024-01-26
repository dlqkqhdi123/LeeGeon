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
  apiKey: "AIzaSyDsguacl_VlgVFK0K76HjqR-vGgklB9yxA",
  authDomain: "dwos-83a5b.firebaseapp.com",
  projectId: "dwos-83a5b",
  storageBucket: "dwos-83a5b.appspot.com",
  messagingSenderId: "600246616932",
  appId: "1:600246616932:web:ed48b258694885246b7071",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, options) {
  // throw new Error("애러가 아니라 기능이다");
  // const querySnapshot = await getDocs(collection(db, collectionName));
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

async function updateDatas(collectionName, docId, updateData, options) {
  const docRef = doc(db, collectionName, docId);
  try {
    if (options) {
      if (options.type == "ADD") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayUnion(updateData),
        });
      } else if (options.type == "DELETE") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayRemove(updateData),
        });
      }
    } else {
    }
    return true;
  } catch (error) {
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
};
