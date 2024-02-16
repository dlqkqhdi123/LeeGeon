import styless from "./ReservationModal.module.css";
import style from "../Modal.module.css";
import { ReactComponent as Close } from "../../assets/icon/icon-close_w.svg";
import { getData } from "../../firebase";
import { useEffect, useState } from "react";

function ReservationModal({ setModalOpen, messageNo }) {
  const [Reserv, setReserv] = useState();

  const listBoxFields = [
    { label: "보호자 성명", value: Reserv?.name },
    { label: "펫 이름", value: Reserv?.petName },
    { label: "펫 종류", value: Reserv?.petType },
    { label: "연락처", value: Reserv?.phoneNumber },
    { label: "병원명", value: Reserv?.hospital },
    { label: "예약일지", value: Reserv?.reservationDate },
    { label: "증상 또는 병명", value: Reserv?.symptom },
  ];

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-Reservation",
      "no",
      "==",
      messageNo
    );
    setReserv(data);
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
          {listBoxFields.map((list, index) => (
            <div className={styless.container} key={index}>
              <label className={styless.label}>{list.label}</label>
              <p className={styless.text}>{list.value}</p>
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
