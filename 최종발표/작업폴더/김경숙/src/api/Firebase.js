import { uploadString } from "firebase/storage";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  updateDoc,
  query,
  orderBy,
  limit,
  startAfter,
  where,
  onSnapshot,
  deleteDoc,
  firestore,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyARawYxbOyLKnEWMlPSatqIULiZhn5ZDN0",
//   authDomain: "hospetal-f595a.firebaseapp.com",
//   projectId: "hospetal-f595a",
//   storageBucket: "hospetal-f595a.appspot.com",
//   messagingSenderId: "41843789723",
//   appId: "1:41843789723:web:07d3d1aaf16f0bd24b9b3e",
// };

const firebaseConfig = {
  apiKey: "AIzaSyA06M65-5COIBCn0lyoHwS78__Mxxnvdxc",
  authDomain: "backback-d7ab3.firebaseapp.com",
  projectId: "backback-d7ab3",
  storageBucket: "backback-d7ab3.appspot.com",
  messagingSenderId: "1025024511755",
  appId: "1:1025024511755:web:5e3a199d52c50d32a55c0e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

// 이미지 업로드 김원상
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
// 이미지 업로드 - url 64진수 변환 김원상
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

// 컬렉션 이름 가져오기
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

// 게시글 올린 시간 확인 김원상
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
  // try {
  //   const memberData = localStorage.getItem("member");
  //   const member = JSON.parse(memberData);
  //   const userData = { memberNickName: member?.memberNickName };

  //   const modifiedData = {
  //     ...data,
  //     userData: userData,
  //   };

  //   return await addDoc(collection(db, collectionName), modifiedData);
  // } catch (error) {
  //   console.error("Error adding document: ", error);
  //   throw error;
  // } 둘중 뭐 쓸지 모름 일단 아래께 진현님꺼 최신
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
// 구분선

async function fetchMessagesByMemberId() {
  const member = JSON.parse(localStorage.getItem("member"));
  const memberId = member.memberId;
  console.log(member);
  console.log(memberId);

  const q = query(collection(db, "member"), where("memberId", "==", memberId));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.empty);

  const memberDoc = querySnapshot.docs.find(
    (doc) => doc.data().memberId === memberId
  );

  if (memberDoc) {
    const q2 = query(collection(db, `member/${memberDoc.id}/receiveMessage`));
    const querySnapshot2 = await getDocs(q2);
    console.log(querySnapshot2.empty);
    const messages = querySnapshot2.docs.map((doc) => doc.data());
    return messages;
  } else {
    console.log(`'memberId'가 ${memberId}인 문서를 찾을 수 없습니다.`);
    return [];
  }
}

// 메시지 목록띄우기 박진현
async function fetchMessagesByMemberIdsend() {
  const member = JSON.parse(localStorage.getItem("member"));
  const memberId = member.memberId;
  console.log(member);
  console.log(memberId);
  const q = query(collection(db, "member"), where("memberId", "==", memberId));
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot.empty);
  const memberDoc = querySnapshot.docs.find(
    (doc) => doc.data().memberId === memberId
  );
  if (memberDoc) {
    const q2 = query(collection(db, `member/${memberDoc.id}/sendMessage`));
    const querySnapshot2 = await getDocs(q2);
    console.log(querySnapshot2.empty);
    const messages = querySnapshot2.docs.map((doc) => doc.data());
    return messages;
  } else {
    console.log(`'memberId'가 ${memberId}인 문서를 찾을 수 없습니다.`);
    return [];
  }
}

// 보내는 메세지 저장 박진현
async function sendMessageToMember(sendTitle, sendContent, date) {
  const memberNickName = localStorage.getItem("member");

  const memberQuery = query(
    collection(db, "member"),
    where("memberNickName", "==", memberNickName)
  );
  const querySnapshot = await getDocs(memberQuery);

  querySnapshot.forEach(async (document) => {
    const sendMessageCollection = collection(
      db,
      `member/${document.id}/sendMessage`
    );
    const sendMessageDoc = doc(sendMessageCollection);

    await setDoc(sendMessageDoc, {
      sendTitle: sendTitle,
      sendContent: sendContent,
      date: date,
      memberNickName: memberNickName,
    });
  });
}

// 받은 메세지 저장 박진현
async function receiveMessageToMember(
  specificString,
  receiveTitle,
  receiveContent,
  date
) {
  const memberQuery = query(
    collection(db, "member"),
    where("memberNickName", "==", specificString)
  );
  const querySnapshot = await getDocs(memberQuery);

  querySnapshot.forEach(async (document) => {
    const receiveMessageCollection = collection(
      db,
      `member/${document.id}/receiveMessage`
    );
    const receiveMessageDoc = doc(receiveMessageCollection);

    await setDoc(receiveMessageDoc, {
      receiveTitle: receiveTitle,
      receiveContent: receiveContent,
      date: date,
      memberNickName: specificString,
    });
  });
}

// 탈퇴하기 박진현
const deleteMemberDocument = async () => {
  const localData = JSON.parse(localStorage.getItem("member"));
  const q = query(
    collection(db, "member"),
    where("memberId", "==", localData.memberId)
  );
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    console.log("문서 삭제 완료");
  } catch (error) {
    console.error("문서 삭제 실패:", error);
  }
};
// 회원정보 수정 박진현
const updateFirebaseDocument = async (guardianInfo) => {
  try {
    const member = JSON.parse(localStorage.getItem("member"));

    const q = query(
      collection(db, "member"),
      where("memberId", "==", member.memberId)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      console.log("문서 ID:", docSnapshot.id); // 문서 ID 로깅

      const emailParts = guardianInfo.email
        ? guardianInfo.email.split("@")
        : [];
      const updatedDoc = {
        memberName: guardianInfo.name || member.memberName,
        memberPhone: guardianInfo.phoneNumber || member.memberPhone,
        memberMail: emailParts[0] || member.memberMail,
        memberMail2: emailParts[1] || member.memberMail2,
        memberNickName: guardianInfo.nickname || member.memberNickName,
      };

      const docRef = doc(db, "member", docSnapshot.id);
      await updateDoc(docRef, updatedDoc);
    }
  } catch (error) {
    console.error("파이어베이스 문서 업데이트 실패:", error);
  }
};

// 마이페이지에 데이터 뿌리기 박진현
async function getFirebaseDocument(setGuardianInfo) {
  try {
    const member = JSON.parse(localStorage.getItem("member"));

    const q = query(
      collection(db, "member"),
      where("memberId", "==", member.memberId)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      console.log("문서 ID:", docSnapshot.id); // 문서 ID 로깅

      setGuardianInfo({
        name: docSnapshot.data().memberName,
        phoneNumber: docSnapshot.data().memberPhone,
        email: `${docSnapshot.data().memberMail}@${
          docSnapshot.data().memberMail2
        }`,
        nickname: docSnapshot.data().memberNickName,
      });
    } else {
    }
  } catch (error) {
    console.error("Error getting document:", error);
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
  query,
  where,
  firestore,
  getMember,
  getData,
  idDatas,
  nickDatas,
  findId,
  findPass,
  uploadImages,
  uploadString,
  getMemberNickName,
  onSnapshot,
  getSocialMember,
  fetchMessagesByMemberId,
  fetchMessagesByMemberIdsend,
  sendMessageToMember,
  receiveMessageToMember,
  deleteMemberDocument,
  updateFirebaseDocument,
  getFirebaseDocument,
};
