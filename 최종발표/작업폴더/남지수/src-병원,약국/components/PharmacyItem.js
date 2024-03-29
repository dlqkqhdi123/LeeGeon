import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Button from "./Button";
import stylesBtn from "./Button.module.css";
import Rating from "./Rating";
import styles from "./HospitalItem.module.css";
import ReservationModalPh from "./ReservationModalPh";

const PharmacyItem = ({ pharmacy }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("모달열림");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className={styles.card}>
      <ul className={styles.itemUl}>
        <li className={styles.itemTitle}>{pharmacy.title}</li>
        <li className={styles.itemAddress}>{pharmacy.address}</li>
        <li className={styles.itemParking}>주차: {pharmacy.parking}</li>
        <Rating hoverRating={pharmacy.rating} />
      </ul>

      <div className={styles.btnContainer}>
        <Button className={stylesBtn.ReservationBtn}>
          <Link
            to={`/pharmacy/${pharmacy.title}`}
            state={{ pharmacy }}
            className={stylesBtn.link}
          >
            자세히
          </Link>
        </Button>

        <Button className={stylesBtn.ReservationBtn} onClick={openModal}>
          예약하기
        </Button>
        <ReservationModalPh
          pharmacy={pharmacy}
          isOpen={isModalOpen}
          onClose={closeModal}
        ></ReservationModalPh>
      </div>
    </Card>
  );
};

export default PharmacyItem;
