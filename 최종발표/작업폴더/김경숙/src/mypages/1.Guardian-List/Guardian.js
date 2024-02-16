import Button from "../../component/Button";
import styles from "../MyPage.module.css";
import style from "./Guardian.module.css";
import React, { useEffect, useState } from "react";
import GuardianModal from "./GuardianModal";
import Overlay from "../Overlay"


function Guardian() {
  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  const [guardianInfo, setGuardianInfo] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setGuardianInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const inputFields = [
    {
      id: "name",
      label: "이름",
      type: "text",
      placeholder: "김보호자",
    },
    {
      id: "phoneNumber",
      label: "연락처",
      type: "text",
      placeholder: "010-000-0000",
    },
    {
      id: "email",
      label: "이메일",
      type: "email",
      placeholder: "hostpetal@gmail.com",
    },
    {
      id: "nickname",
      label: "닉네임",
      type: "text",
      placeholder: "호스펫탈",
    },
  ];

  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>보호자 정보 관리</h1>

      <form className={style.infoBox} onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <div className={style.container2} key={field.id}>
            <label className={style.label} htmlFor={field.id}>
              {field.label}
            </label>
            <input
              className={style.input}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              value={guardianInfo[field.id]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className={style.container2}>
          <label className={style.label} htmlFor="withdrawal">
            회원탈퇴
          </label>

          <div>
            <Button
              type="submit"
              style={{ width: "7rem", height: "2.3rem", margin: "0" }}
              onClick={() => {
                setModalOpen(true);
              }}
            >
              탈퇴하기
            </Button>
          </div>
        </div>
      </form>
      <div className={styles.retouch}>
        <Button type="submit" onClick={handleSubmit}>수정하기</Button>
      </div>
      
      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <GuardianModal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default Guardian;
