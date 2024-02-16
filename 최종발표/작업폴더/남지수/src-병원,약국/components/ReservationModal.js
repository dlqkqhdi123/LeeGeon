import styles from "./ReservationModal.module.css";
import closeIcon from "../assets/icon/icon-close_w.svg";
import { updateDatas } from "../api/firebase";
import { useLocation, useNavigate } from "react-router-dom";

const ReservationModal = ({ isOpen, onClose, hospital }) => {
  const props = useLocation();
  const navigate = useNavigate();
  const { pathname } = props;

  // 병원 예약리스트 담기
  const handleAddReservationClick = async () => {
    const member = JSON.parse(localStorage.getItem("member"));

    if (member) {
      const result = await updateDatas("member", member.docId, hospital, {
        type: "ADD",
        fieldName: "reservationList",
      });
      if (result) navigate("/reservationList");
    } else {
      alert("로그인을 해주세요.");
      navigate("/login", { state: pathname });
    }
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              예약하기
              <p> {hospital.title}</p>
            </h2>
            <button className={styles.closeButton} onClick={onClose}>
              <img src={closeIcon} className={styles.closeIcon} />
            </button>
          </div>
          <form className={styles.form}>
            <div className={styles.formItem}>
              <label>보호자 성명</label>
              <input
                type="text"
                id="guardianName"
                placeholder="보호자 성명을 작성해주세요."
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="petName">펫 이름</label>
              <input
                type="text"
                id="petName"
                placeholder="반려동물 이름을 작성해주세요."
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="petType">펫 종류</label>
              <select id="petType">
                <option value="">선택해주세요.</option>
                <option value="dog">개</option>
                <option value="cat">고양이</option>
                {/* 다른 동물 종류 추가 */}
              </select>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="contact">연락처</label>
              <input
                type="text"
                id="contact"
                placeholder="연락처를 작성해주세요."
              />
            </div>

            <div className={styles.formItem}>
              <label htmlFor="reservationDate">예약일자</label>
              <input type="date" id="reservationDate" />
            </div>
            <div className={styles.formItem}>
              <label htmlFor="diagnosis">증상 또는 병명</label>
              <input
                type="text"
                id="diagnosis"
                placeholder="증상 또는 병명을 작성해주세요."
              />
            </div>
            <button onClick={handleAddReservationClick} type="submit">
              등록하기
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ReservationModal;
