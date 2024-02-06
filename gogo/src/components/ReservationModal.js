import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./Modal.css";
import { collection, db, getDocs } from "../api/firebase";

function Modal({ isOpen, onClose }) {
  const [images, setImages] = useState([]);
  const [showChevron, setShowChevron] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const reservations = await getReservations(db);
        setReservations(reservations);
      } catch (error) {
        console.error("예약 정보를 불러오는 중에 오류가 발생했습니다.", error);
      }
    }

    fetchReservations();
  }, []);
  if (!isOpen) return null;

  async function getReservations(db) {
    const reservationsCol = collection(db, "ReservationList");
    const reservationsSnapshot = await getDocs(reservationsCol);
    const reservationsList = reservationsSnapshot.docs.map((doc) => doc.data());
    return reservationsList;
  }

  const handleAddImageClick = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  const handleImageChange = (e) => {
    const fileInput = e.target;
    const selectedImages = Array.from(fileInput.files);

    if (selectedImages.length > 0) {
      setImages((prevImages) => [...prevImages, ...selectedImages]);
      setShowChevron(images.length + selectedImages.length > 1);
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-container">
          <div className="modal-header">
            <span className="modal-span">예약확인</span>
            <img
              className="close-img"
              src="/icon/icon-close.png"
              alt="close-icon"
              onClick={onClose}
            />
          </div>
          <div className="modal-content">
            <div className="modal-imgBox"></div>
            <div className="modal-contentBox">
              <div className="modal-content-title">
                {reservations.map((reservation, index) => (
                  <div key={index}>
                    <div>
                      <input type="checkbox" />
                    </div>
                    <p>예약 번호 :{index + 1}</p>

                    <p>현재 상태 : {reservation.state}</p>
                    <p>동물 이름 :{reservation.PetName}</p>
                    <p>병원 : {reservation.hospital}</p>
                    <p>예약 날짜 :{reservation.ReservationDate}</p>
                  </div>
                ))}
                <textarea
                  className="modal-input2"
                  placeholder="내용을 입력하세요"
                ></textarea>
              </div>
              <Button children="등록하기" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
