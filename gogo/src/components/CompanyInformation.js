import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import * as firebase from "firebase/app";

import { collection, db } from "../api/firebase";

function CompanyInformation() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [parking, setParking] = useState("");
  const [number, setNumber] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // Firebase에서 데이터 가져오기
    const fetchData = async () => {
      const docRef = await upData(collection, "techInfo", db);
      const doc = await docRef.get();
      if (doc.exists) {
        const data = doc.data();
        setName(data.name);
        setAddress(data.address);
        setParking(data.parking);
        setNumber(data.number);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    // 수정한 데이터를 Firebase에 저장하기
    firebase
      .firestore()
      .collection("techInfo")
      .doc("wHhy9UlkB40hsd3MDqv0")
      .set({
        name,
        address,
        parking,
        number,
      });
  };

  return (
    <div>
      <div>
        <label>이름:</label>
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <input type="text" value={name} disabled />
        )}
      </div>
      <div>
        <label>주소:</label>
        {editMode ? (
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        ) : (
          <input type="text" value={address} disabled />
        )}
      </div>
      <div>
        <label>주차 가능 여부:</label>
        {editMode ? (
          <input
            type="text"
            value={parking}
            onChange={(e) => setParking(e.target.value)}
          />
        ) : (
          <input type="text" value={parking} disabled />
        )}
      </div>
      <div>
        <label>번호:</label>
        {editMode ? (
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        ) : (
          <input type="text" value={number} disabled />
        )}
      </div>
      {editMode ? (
        <button onClick={handleSave}>저장</button>
      ) : (
        <button onClick={handleEdit}>수정</button>
      )}
    </div>
  );
}

export default CompanyInformation;
