import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import MyPageButton from "./MyPageButton";

import {
  collection,
  db,
  getDatas,
  getDocs,
  getTechInfo,
  updateDatas, // updateDatas 함수 추가
} from "../api/firebase";

function CompanyInformation() {
  const [hosName, setHosName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [businessHours, setBusinessHours] = useState("");
  const [address, setAddress] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [memberAdress, setMemberAdress] = useState("");

  useEffect(() => {
    async function fetchData(collectionName) {
      try {
        const member = await getTechInfo(collectionName);
        console.log(member); // 불러온 데이터 확인
        setHosName(member.hosName);
        setPhoneNumber(member.phoneNumber);
        setSpecialty(member.specialty);
        setBusinessHours(member.businessHours);
        setMemberAdress(member.memberAdress);
      } catch (error) {
        console.error("데이터를 불러오는 중에 오류가 발생했습니다.", error);
      }
    }

    fetchData("member"); // 원하는 컬렉션 이름으로 대체해주세요
  }, []);

  // 수정 버튼을 눌렀을 때 입력 폼을 활성화하는 함수
  const handleEdit = (e) => {
    setIsEditMode(true);
  };

  const member = JSON.parse(localStorage.getItem("member"));
  const memberId = member?.memberId;

  console.log(memberId);

  // 저장 버튼을 눌렀을 때 정보를 업데이트하고 입력 폼을 비활성화하는 함수
  const handleSave = async () => {
    // Firebase 데이터 업데이트 로직
    const techInfoRef = collection(db, "member");
    console.log(techInfoRef);
    const techInfoSnapshot = await getDocs(techInfoRef);
    const techInfoDocs = techInfoSnapshot.docs;

    if (techInfoDocs.length > 0) {
      const getCurrentUserData = () => {
        const userDataJSON = localStorage.getItem("member");
        if (userDataJSON) {
          return JSON.parse(userDataJSON);
        } else {
          return null;
        }
      };

      const techInfoId = techInfoDocs[0].id; // 첫 번째 문서의 ID

      console.log(techInfoId);
      const updatedData = {
        hosName: hosName,
        phoneNumber: phoneNumber,
        specialty: specialty,
        businessHours: businessHours,
        memberAdress: memberAdress,
      };
      localStorage.setItem("member", JSON.stringify(updatedData));
      await updateDatas("member", techInfoId, updatedData); // updateDatas 함수를 사용하여 데이터 업데이트

      // 업데이트 후 데이터 다시 불러오기
      const currentUserData = getCurrentUserData();
      setHosName(currentUserData.hosName);
      setPhoneNumber(currentUserData.memberPhone);
      setSpecialty(currentUserData.memberMail2);
      setBusinessHours(currentUserData.memberPhone);
      setAddress(currentUserData.memberAdress);
    }

    setIsEditMode(false);
  };

  return (
    <div className={styles.disContainer}>
      <div>
        <h1 className={styles.companyTitle}>정보관리</h1>
        {isEditMode ? (
          <form className={styles.formgrid}>
            <label className={styles.label}>업체명: </label>
            <input
              type="text"
              value={hosName}
              onChange={(e) => setHosName(e.target.value)}
              className={styles.container2}
            />

            <label className={styles.label}>대표전화:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={styles.container2}
            />
            <label className={styles.label}>전문분야:</label>
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className={styles.container2}
            />

            <label className={styles.label}>운영시간:</label>
            <input
              type="text"
              value={businessHours}
              onChange={(e) => setBusinessHours(e.target.value)}
              className={styles.container2}
            />

            <label className={styles.label}>주소:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={styles.container2}
            />

            <MyPageButton type="button" onClick={handleSave}>
              저장
            </MyPageButton>
          </form>
        ) : (
          <div className={styles.formgrid}>
            <p className={styles.label}>업체명:</p>
            <p className={styles.container2}>{member?.hosName}</p>
            <p className={styles.label}>대표전화:</p>
            <p className={styles.container2}>{member?.memberPhone}</p>
            <p className={styles.label}>전문분야:</p>
            <p className={styles.container2}>{member?.memberName}</p>
            <p className={styles.label}>운영시간:</p>
            <p className={styles.container2}>{member?.memberPostCode}</p>
            <p className={styles.label}>주소:</p>
            <p className={styles.container2}>{member?.memberAdress}</p>

            <MyPageButton type="button" onClick={handleEdit}>
              수정
            </MyPageButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyInformation;
