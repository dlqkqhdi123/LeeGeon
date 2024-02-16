import React from "react";
import Button from "../component/Button";
import ReservationList from "../component/ReportList";
import styles from "./MyPage.module.css";
import SideBar from "../component/SideBar";

const Report = () => {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>회원 신고</h1>
        <ReservationList />
        <div className={styles.retouch_a}>
          <Button className={styles.correction}>삭제</Button>
        </div>
      </div>
    </div>
  );
};

export default Report;
