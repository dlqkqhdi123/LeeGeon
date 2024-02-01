import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import {
  collection,
  db,
  getDatas,
  getDocs,
  getTechInfo,
  updateDoc,
} from "../api/firebase";

function CompanyInformation() {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [businessHours, setBusinessHours] = useState("");
  const [address, setAddress] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const techInfoRef = collection(db, "techInfo");
      const techInfoDocs = await getDocs(techInfoRef);

      if (techInfoDocs.length > 0) {
        const techInfoData = techInfoDocs[0].data();
        setCompanyName(techInfoData.companyName);
        setPhoneNumber(techInfoData.phoneNumber);
        setSpecialty(techInfoData.specialty);
        setBusinessHours(techInfoData.businessHours);
        setAddress(techInfoData.address);
      }
    };

    fetchData();
  }, [items]);

  // 수정 버튼을 눌렀을 때 입력 폼을 활성화하는 함수
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // 저장 버튼을 눌렀을 때 정보를 업데이트하고 입력 폼을 비활성화하는 함수
  const handleSave = async () => {
    // Firebase 데이터 업데이트 로직
    const techInfoRef = collection(db, "techInfo");
    console.log(techInfoRef);
    const techInfoDocs = await getDocs(techInfoRef);

    if (techInfoDocs.length > 0) {
      const techInfoId = techInfoDocs[0].id; // 첫 번째 문서의 ID

      await updateDoc(techInfoRef, techInfoId, {
        companyName: companyName,
        phoneNumber: phoneNumber,
        specialty: specialty,
        businessHours: businessHours,
        address: address,
      });
    }

    setIsEditMode(false);
  };

  return (
    <div>
      <h1>마이페이지</h1>
      {isEditMode ? (
        <form>
          <label>업체명:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <label>대표전화:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label>전문분야:</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />

          <label>운영시간:</label>
          <input
            type="text"
            value={businessHours}
            onChange={(e) => setBusinessHours(e.target.value)}
          />

          <label>주소:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="button" onClick={handleSave}>
            저장
          </button>
        </form>
      ) : (
        <div>
          <p>업체명: {companyName}</p>
          <p>대표전화: {phoneNumber}</p>
          <p>전문분야: {specialty}</p>
          <p>운영시간: {businessHours}</p>
          <p>주소: {address}</p>

          <button type="button" onClick={handleEdit}>
            수정
          </button>
        </div>
      )}
    </div>
  );
}

export default CompanyInformation;
