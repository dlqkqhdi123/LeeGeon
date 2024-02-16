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
  where,
  arrayUnion,
  arrayRemove,
  onSnapshot,
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

async function getDatas(collectionName, options) {
  // throw new Error("기능");
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
      // asc:오름차 순 (굳이 x) desc: 내림차 순
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(options.order, "desc"),
      startAfter(options.lq),
      limit(options.limit)
      // asc:오름차 순 (굳이 x) desc: 내림차 순
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // 쿼리 query
  // orderBy, limit, startAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  // 1.
  const reviews = result.map((doc) => ({ docId: doc.id, ...doc.data() }));

  // 2.
  // const tempArr = [];
  // for (let i = 0; i < result.length - 1; i++) {
  //   const obj = result[i].data();
  //   obj.docId = result[i].id;
  //   tempArr.push(obj);
  // }
  // reviews = tempArr;

  // 3.
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

// 리뷰 추가 로직

// addReviewDatas 함수 정의
const addReviewDatas = async (hospitalDocId, reviewData) => {
  try {
    // 병원의 docId를 이용하여 해당 병원의 리뷰 컬렉션에 데이터 추가
    const hospitalRef = doc(db, "hospital", hospitalDocId);

    // 리뷰 컬렉션에 새로운 리뷰 데이터를 추가
    await updateDoc(hospitalRef, {
      reviews: arrayUnion({
        user: reviewData.user || "",
        comment: reviewData.comment || "",
        rating: reviewData.rating || 0,
      }),
    });

    // 추가된 리뷰를 포함한 업데이트된 병원 정보를 다시 가져옴
    const updatedHospital = await getDoc(hospitalRef);
    return updatedHospital.data();
  } catch (error) {
    console.error("리뷰 추가 중 에러:", error);
    throw new Error("리뷰 추가에 실패했습니다.");
  }
};

// 약국 리뷰추가
const addPharReviewDatas = async (pharmacyDocId, reviewData) => {
  try {
    // 병원의 docId를 이용하여 해당 병원의 리뷰 컬렉션에 데이터 추가
    const pharmacyRef = doc(db, "pharmacy", pharmacyDocId);

    // 리뷰 컬렉션에 새로운 리뷰 데이터를 추가
    await updateDoc(pharmacyRef, {
      reviews: arrayUnion({
        user: reviewData.user || "",
        comment: reviewData.comment || "",
        rating: reviewData.rating || 0,
      }),
    });

    // 추가된 리뷰를 포함한 업데이트된 병원 정보를 다시 가져옴
    const updatedHospital = await getDoc(pharmacyRef);
    return updatedHospital.data();
  } catch (error) {
    console.error("리뷰 추가 중 에러:", error);
    throw new Error("리뷰 추가에 실패했습니다.");
  }
};
// 구분선

const addDatas = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
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

async function nickDatas(collectionName, nickName) {
  const Snapshot = await getDocs(
    query(
      collection(db, collectionName),
      where("memberNickName", "==", nickName)
    )
  );
  return Snapshot.size;
}

async function getMember(values) {
  const { id, password } = values;
  const docQuery = query(collection(db, "member"), where("memberId", "==", id));
  let message;
  let memberObj = {};

  const querySnapshot = await getDocs(docQuery);
  if (querySnapshot.docs.length !== 0) {
    const memberData = querySnapshot.docs.map((doc) => ({
      docId: doc.id,
      ...doc.data(),
    }))[0];
    if (memberData.password == password) {
      memberObj = memberData;
    } else {
      message = "비밀번호가 일치하지 않습니다.";
    }
  } else {
    message = "일치하는 아이디가 없습니다.";
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

async function updateDatas(collectionName, docId, upadateData, options) {
  const docRef = doc(db, collectionName, docId);
  try {
    if (options) {
      if (options.type == "ADD") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayUnion(upadateData),
        });
      } else if (options.type === "DELETE") {
        await updateDoc(docRef, {
          [options.fieldName]: arrayRemove(upadateData),
        });
      }
    } else {
      await updateDoc(docRef, upadateData);
    }
    return true;
  } catch (error) {
    return false;
  }
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
  updateDatas,
  getMember,
  getData,
  idDatas,
  nickDatas,
  findId,
  findPass,
  deleteDatas,
  onSnapshot,
  addReviewDatas,
  arrayUnion,
  addPharReviewDatas,
};
