import styled from "styled-components";
import Button from "../component/Button";
import ReservationList from "./My-List/ReservationList";
import styles from "./MyPage.module.css";

function Reservation() {
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>예약 목록 확인</h1>
      <ReservationList />
      <div className={styles.retouch_a}>
        <Button type="submit" className={styles.correction}>
          취소하기
        </Button>
      </div>
    </div>
  );
}

export default Reservation;
