import styled from "styled-components";
import Button from "../component/Button";
import ReviewList from "./My-List/ReviewList";
import styles from "./MyPage.module.css";

function Review() {
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>내가 쓴 후기</h1>
      <ReviewList />
      <div className={styles.retouch_a}>
        <Button type="submit" className={styles.correction}>
          삭제
        </Button>
      </div>
    </div>
  );
}

export default Review;
