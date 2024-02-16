import styled from "styled-components";
import Button from "../component/Button";
import WritingList from "./My-List/WritingList";
import styles from "./MyPage.module.css";
import SideBar from "./SideBar";

function Writing() {
  return (
    <div className={styles.containerBox}>
      <SideBar />

      <div className={styles.wrapper}>
        <h1 className={styles.h1}>내가 쓴 글</h1>
        <WritingList />
        <div className={styles.retoucha}>
          <Button type="submit" className={styles.correction}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Writing;
