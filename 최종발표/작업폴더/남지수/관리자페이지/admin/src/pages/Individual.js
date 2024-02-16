import React from "react";
import Button from "../component/Button";
import ReservationList from "../component/IndividualList";
import styles from "./MyPage.module.css";
import SideBar from "../component/SideBar";

const Individual = () => {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>회원관리&middot;개인</h1>
        <ReservationList />
        <div className={styles.retouch_a}>
          <Button className={styles.correction}>삭제</Button>
        </div>
      </div>
    </div>
  );
};

export default Individual;
