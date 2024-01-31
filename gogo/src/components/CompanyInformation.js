import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import { collection, docId, upDate } from "../api/firebase";

function CompanyInformation() {
  const [item, setItem] = useState({});
  const [name, setName] = useState("");
  // 다른 필요한 상태 변수들도 추가해주세요.

  const handleTest = async () => {
    const data = await upDate(collection("techInfo"));
    setItem(data);
    setName(data.name);
    // 다른 필요한 상태 변수들도 업데이트해주세요.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...item, name: name };
    // await upDate(collection("techInfo"), docId, updatedData);
    // 다른 필요한 데이터 업데이트도 수행해주세요.
  };

  useEffect(() => {
    handleTest();
  }, []);

  return (
    <div>
      <div className={styles.disContainer}>
        <div>
          <h1 className={styles.companyTitle}>정보관리</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.container2}>
            <label htmlFor="name">dlfma</label>
            <input
              type="text"
              id="name"
              placeholder="이건"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* 다른 필요한 입력 요소들도 추가해주세요. */}
          <button type="submit">수정</button>
        </form>
      </div>
    </div>
  );
}

export default CompanyInformation;
