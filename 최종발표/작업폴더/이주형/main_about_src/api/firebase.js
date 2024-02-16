import { uploadString } from "firebase/storage";
import { initializeApp } from "firebase/app";
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
  orderBy,
  limit,
  startAfter,
  exists,
  where,
  arrayUnion,
  arrayRemove,
  increment,
  onSnapshot,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCZijsmmnVurDsqymzx-QPFRFjSe1AKbqU",
//   authDomain: "hospetalbackup.firebaseapp.com",
//   projectId: "hospetalbackup",
//   storageBucket: "hospetalbackup.appspot.com",
//   messagingSenderId: "537758130691",
//   appId: "1:537758130691:web:1154382e01fe09e07a2436",
// };

const firebaseConfig = {
  apiKey: "AIzaSyARawYxbOyLKnEWMlPSatqIULiZhn5ZDN0",
  authDomain: "hospetal-f595a.firebaseapp.com",
  projectId: "hospetal-f595a",
  storageBucket: "hospetal-f595a.appspot.com",
  messagingSenderId: "41843789723",
  appId: "1:41843789723:web:07d3d1aaf16f0bd24b9b3e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const uploadImages = async (images) => {
  const imageUrls = [];

  for (const image of images) {
    const storageRef = ref(storage, `images/${image.name}`);
    const base64String = await convertToBase64(image);
    await uploadString(storageRef, base64String, "base64");
    const imageUrl = await getDownloadURL(storageRef);
    imageUrls.push(imageUrl);
  }

  return imageUrls;
};

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

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

  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];

  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));

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
    uploadTime: doc.data().uploadTime ? doc.data().uploadTime.toDate() : null,
  }));

  return data.length === 1 ? data[0] : data;
}

export const getLastId = async () => {
  try {
    const querySnapshot = await getDocs(
      query(collection(db, "member"), orderBy("id", "desc"), limit(1))
    );
    const lastDoc = querySnapshot.docs[0];

    return lastDoc.data().id;
  } catch (error) {
    console.error("Error in getLastId:", error);
    throw error;
  }
};

const addDatas = async (collectionName, data) => {
  try {
    const memberData = localStorage.getItem("member");
    const member = JSON.parse(memberData);
    const userData = { memberNickName: member?.memberNickName };

    const modifiedData = {
      ...data,
      userData: userData,
    };

    return await addDoc(collection(db, collectionName), modifiedData);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
async function idDatas(collectionName, checkId) {
  const Snapshot = await getDocs(
    query(collection(db, collectionName), where("memberId", "==", checkId))
  );
  return Snapshot.size;
}

async function nickDatas(collectionName, memberId) {
  const Snapshot = await getDocs(
    query(collection(db, collectionName), where("memberId", "==", memberId))
  );

  if (Snapshot.size > 0) {
    return Snapshot.docs[0].data().memberNickName;
  } else {
    return null;
  }
}

async function getMemberNickName(memberId) {
  try {
    const memberData = await nickDatas("member", memberId);

    if (memberData) {
      const memberNickName = memberData.memberNickName;
      return memberNickName;
    } else {
      console.log("Member not found for the given memberId.");
      return null;
    }
  } catch (error) {
    console.error("Error getting memberNickName by memberId:", error);
    throw error;
  }
}

async function getMember(values) {
  const { input_id: id, input_pw: password } = values;
  const docQuery = query(collection(db, "member"), where("memberId", "==", id));
  let message = "";
  let memberObj = null;
  // console.log(values);

  const querySnapshot = await getDocs(docQuery);
  console.log(querySnapshot);
  if (!querySnapshot.empty && querySnapshot.docs[0]) {
    // 수정된 부분
    const memberData = querySnapshot.docs[0].data();
    if (
      memberData &&
      memberData.hasOwnProperty("memberId") &&
      memberData.hasOwnProperty("memberPass") &&
      memberData.memberId === id &&
      memberData.memberPass === password
    ) {
      memberObj = memberData;
      message = null;
    }
    console.log(memberData);
  }
  return { memberObj, message };
}

async function findId(memberName, memberMail, memberMail2, memberPhone) {
  const docQuery = query(
    collection(db, "member"),
    where("memberName", "==", memberName),
    where("memberMail", "==", memberMail),
    where("memberMail2", "==", memberMail2),
    where("memberPhone", "==", memberPhone)
  );
  const querySnapshot = await getDocs(docQuery);
  const memberData = querySnapshot.docs.map((doc) => doc.data());

  if (memberData.length > 0) {
    const memberId = memberData[0].memberId;
    return memberId;
  } else {
    return "일치하는 회원 정보가 없습니다.";
  }
}

// 구분선
async function changePassword(memberId, newMemberPass) {
  const docQuery = collection(db, "member");
  const queryRef = query(docQuery, where("memberId", "==", memberId));

  const querySnapshot = await getDocs(queryRef);
  const memberDocs = querySnapshot.docs;

  if (memberDocs.length > 0) {
    const memberDoc = memberDocs[0];
    const memberRef = doc(db, "member", memberDoc.id);
    await updateDoc(memberRef, { memberPass: newMemberPass });
    return "회원 비밀번호가 변경되었습니다.";
  } else {
    return "일치하는 회원 정보가 없습니다.";
  }
}

async function findPass(
  memberId,
  memberName,
  memberMail,
  memberMail2,
  memberPhone,
  newMemberPass
) {
  const docQuery = collection(db, "member");
  let queryRef = docQuery;

  if (memberId !== undefined) {
    queryRef = query(queryRef, where("memberId", "==", memberId));
  }
  if (memberName !== undefined) {
    queryRef = query(queryRef, where("memberName", "==", memberName));
  }
  if (memberMail !== undefined) {
    queryRef = query(queryRef, where("memberMail", "==", memberMail));
  }
  if (memberMail2 !== undefined) {
    queryRef = query(queryRef, where("memberMail2", "==", memberMail2));
  }
  if (memberPhone !== undefined) {
    queryRef = query(queryRef, where("memberPhone", "==", memberPhone));
  }

  const querySnapshot = await getDocs(queryRef);
  const memberData = querySnapshot.docs.map((doc) => doc.data());
  console.log(memberData);

  if (memberData.length > 0) {
    const foundMemberId = memberData[0].memberId;
    console.log(foundMemberId);

    if (newMemberPass !== undefined) {
      // 변경된 비밀번호를 changePassword 함수로 전달하여 비밀번호를 업데이트합니다.
      const result = await changePassword(foundMemberId, newMemberPass);
      return result;
    } else {
      return foundMemberId;
    }
  } else {
    return "일치하는 회원 정보가 없습니다.";
  }
}
// 구분선

// 이게 아마 데이터 불러오는 관련 내용이랍니다? 이주형 ^^
async function getDocumentsDescending(collectionName, fieldName, limitNumber) {
  const firestore = getFirestore();
  const colRef = collection(firestore, collectionName);
  const q = query(colRef, orderBy(fieldName, "desc"), limit(limitNumber));
  const querySnapshot = await getDocs(q);

  const documents = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return documents;
}

export {
  db,
  getDocs,
  getDoc,
  collection,
  getDatas,
  setDoc,
  addDatas,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getMember,
  getData,
  idDatas,
  nickDatas,
  findId,
  findPass,
  uploadImages,
  uploadString,
  getMemberNickName,
  increment,
  onSnapshot,
  getDocumentsDescending,
  query,
  limit,
  orderBy,
  where,
};
