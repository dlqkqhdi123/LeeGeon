import styled from "styled-components";
import Button from "../component/Button";
import MessageReceivedList from "./My-List/MessageReceivedList";
import styles from "./MyPage.module.css";
import SideBar from "./SideBar";

function MessageReceived() {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>받은 메세지</h1>
        <MessageReceivedList />
        <div className={styles.retouch_a}>
          <Button type="submit" className={styles.correction}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MessageReceived;
