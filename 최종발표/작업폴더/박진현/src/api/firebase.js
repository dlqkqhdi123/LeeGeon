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
  orderBy,
  limit,
  startAfter,
  exists,
  where,
  arrayUnion,
  arrayRemove,
  deleteDatas,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";

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

// 공용
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
  }));

  return data.length === 1 ? data[0] : data;
}

// 아이디찾기 박진현
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

// 회원가입 박진현
const addDatas = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
  Object.keys(data).forEach((field) => {
    console.log(`${field}: ${data[field]}`);
  });
  console.log("전달된 데이터:", data);
};

// 아이디 중복확인 박진현
async function idDatas(collectionName, checkId) {
  const Snapshot = await getDocs(
    query(collection(db, collectionName), where("memberId", "==", checkId))
  );
  return Snapshot.size;
}

// 닉네임 중복확인 박진현
async function nickDatas(collectionName, nickName) {
  const Snapshot = await getDocs(
    query(collection(db, collectionName), where("nickname", "==", nickName))
  );

  if (Snapshot.empty) {
    const MemberSnapshot = await getDocs(
      query(
        collection(db, collectionName),
        where("memberNickName", "==", nickName)
      )
    );

    return MemberSnapshot.size;
  }

  return Snapshot.size;
}

// 로그인 박진현
async function getMember(values) {
  const { input_id: id, input_pw: password } = values;
  const docQuery = query(collection(db, "member"), where("memberId", "==", id));
  let message = "";
  let memberObj = null;

  const querySnapshot = await getDocs(docQuery);
  if (!querySnapshot.empty && querySnapshot.docs[0]) {
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

// 소셜로그인 박진현
async function getSocialMember(nickname) {
  const docQuery = query(
    collection(db, "member"),
    where("memberType", "==", "social"),
    where("memberNickName", "==", nickname)
  );
  let memberObj = null;

  const querySnapshot = await getDocs(docQuery);
  if (!querySnapshot.empty && querySnapshot.docs[0]) {
    const memberData = querySnapshot.docs[0].data();
    if (memberData && memberData.memberType === "social") {
      memberObj = memberData;
    }
    console.log(memberData);
  }
  return memberObj;
}

// 아이디찾기 박진현
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

// 비밀번호 변경 박진현
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

// 비밀번호 모달띄우기 조회 박진현
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
  deleteDatas,
  deleteField,
  getSocialMember,
};
