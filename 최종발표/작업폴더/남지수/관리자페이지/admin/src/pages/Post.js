import styled from "styled-components";
import Button from "../component/Button";
import ReservationList from "../component/PostList";
import styles from "./MyPage.module.css";
import SideBar from "../component/SideBar";

function Post() {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>게시글 관리</h1>
        <ReservationList />
        <div className={styles.retouch_a}>
          <Button className={styles.correction}>삭제</Button>
        </div>
      </div>
    </div>
  );
}

export default Post;
