import React, { useEffect, useState } from "react";
import styles from "./MyPage.module.css";
import Button from "./Button";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";
import { collection, db, doc, getDocs } from "../api/firebase";

function ReservationList() {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState(null); // 선택한 예약 정보를 저장하는 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 창의 상태를 관리하는 상태

  async function getReservations(db) {
    const reservationsCol = collection(db, "ReservationList"); // "reservations"는 예약 정보가 저장된 컬렉션의 이름입니다.
    const reservationsSnapshot = await getDocs(reservationsCol);
    const reservationsList = reservationsSnapshot.docs.map((doc) => doc.data());
    return reservationsList;
  }

  useEffect(() => {
    async function fetchReservations() {
      try {
        const reservations = await getReservations(db);
        setReservations(reservations); // 불러온 예약 정보를 상태에 저장해주세요.
      } catch (error) {
        console.error("예약 정보를 불러오는 중에 오류가 발생했습니다.", error);
      }
    }

    fetchReservations();
  }, []);

  return (
    <>
      <CommonTable
        headersName={[
          "",
          "번호",
          "예약번호",
          "상태",
          "펫이름",
          "병원",
          "예약일자",
        ]}
      >
        {reservations.map((reservation, index) => (
          <CommonTableRow key={index}>
            <CommonTableColumn>
              <input type="checkbox" />
            </CommonTableColumn>
            <CommonTableColumn>{index + 1}</CommonTableColumn>
            <CommonTableColumn>
              <button
                onClick={() => {
                  setSelectedReservation(reservation);
                  setIsModalOpen(true);
                }}
              >
                {reservation.ReservationNumber}
              </button>
            </CommonTableColumn>
            <CommonTableColumn>{reservation.state}</CommonTableColumn>
            <CommonTableColumn>{reservation.PetName}</CommonTableColumn>
            <CommonTableColumn>{reservation.hospital}</CommonTableColumn>
            <CommonTableColumn>{reservation.ReservationDate}</CommonTableColumn>
          </CommonTableRow>
        ))}

        {isModalOpen && (
          <Modal
            reservation={selectedReservation}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>00-000-000</CommonTableColumn>
          <CommonTableColumn>예약중</CommonTableColumn>
          <CommonTableColumn>냥냥이</CommonTableColumn>
          <CommonTableColumn>한 병원</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
}
function Modal({ reservation, onClose }) {
  return (
    <div>
      <h1>예약 정보</h1>
      <p>예약번호: {reservation.ReservationNumber}</p>
      <p>예약날짜: {reservation.ReservationDate}</p>
      <p>동물이름: {reservation.PetName}</p>

      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default ReservationList;
