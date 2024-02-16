import styled from "styled-components";
import Button from "../component/Button";
import InquiryList from "./My-List/InquiryList";
import styles from "./MyPage.module.css";
import SideBar from "./SideBar";

function Inquiry() {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>문의내역</h1>
        <InquiryList />
        <div className={styles.retouch_a}>
          <Button type="submit" className={styles.correction}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Inquiry;
