import styless from "./ReservationModal.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close } from "../../assets/icon/icon-close_w.svg";
import { getData } from "../../firebase";
import { useEffect, useState } from "react";

function ReservationModal({ setModalOpen, messageNo }) {
  const [Reserv, setReserv] = useState();

  const listBoxFields = [
    { id: "name", label: "보호자 성명", type: "text", placeholder: "이건" },
    { id: "petName", label: "펫 이름", type: "text", placeholder: "금희" },
    { id: "petType", label: "펫 종류", placeholder: "기타" },
    {
      id: "phoneNumber",
      label: "연락처",
      placeholder: "010-1234-5678",
    },
    { id: "hospital", label: "병원명", placeholder: "동의보감" },
    { id: "date", label: "예약일지", placeholder: "이건" },
    {
      id: "Symptom",
      label: "증상 또는 병명",
      placeholder: "잦은 설사",
    },
  ];

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-Reservation",
      "no",
      "==",
      messageNo
    );
    setReserv (data);
  };

  useEffect(() => {
    handleLoad();
  }, []);


  return (
    <div className={style.modalbox} style={{ width: "60rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>내 예약목록</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>
      <div className={styless.bookingbody}>
        <from className={styless.bookingList}>
          {listBoxFields.map((list) => (
            <div className={styless.container} key={list.id}>
              <label className={styless.label} htmlFor={list.id}>
                {list.label}
              </label>
              <p className={styless.text}>{list.placeholder}</p>
            </div>
          ))}
        </from>

        <button
          className={style.button2}
          type="submit"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          취소하기
        </button>
      </div>
    </div>
  );
}

export default ReservationModal;
