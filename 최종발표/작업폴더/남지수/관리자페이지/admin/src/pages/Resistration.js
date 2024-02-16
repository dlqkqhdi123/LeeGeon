import styled from "styled-components";
import Button from "../component/Button";
import styles from "./MyPage.module.css";
import SideBar from "../component/SideBar";
import ResistrationList from "../component/ResistrationList";

function Resistration() {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>병원&middot;약국등록</h1>
        <ResistrationList />
        <div className={styles.retouch_a}>
          <Button className={styles.correction}>삭제</Button>
          <Button className={styles.correction}>승인</Button>
        </div>
      </div>
    </div>
  );
}

export default Resistration;
