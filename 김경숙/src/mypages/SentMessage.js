import styled from "styled-components";
import Button from "../component/Button";
import SentMessageList from "./My-List/SentMessageList";
import styles from "./MyPage.module.css";

function SentMessage() {
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>보낸 메세지</h1>
      <SentMessageList />
      <div className={styles.retouch_a}>
        <Button
          type="submit"
          id="correction"
          style={{ margin: "4.5rem 2rem 4.5rem 0" }}
        >
          쪽지 쓰기
        </Button>
        <Button type="submit" id="correction">
          삭제
        </Button>
      </div>
    </div>
  );
}

export default SentMessage;
