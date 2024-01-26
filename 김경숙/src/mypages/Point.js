import styled from "styled-components";
import Button from "../component/Button";
import PointList from "./My-List/PointList";
import styles from "./MyPage.module.css";

function Point() {
  return (
    <div className={styles.containerBox}>
      <h1>포인트 샵</h1>
      {/* ////////////////////////////////////// */}
      <div>
        <div>
          <p>
            보유포인트 <span>3000</span>냥
          </p>
        </div>
        <div>
          <img />
          <p>고구마져키 50g (6개입)</p>
          <h4>15,000냥</h4>
          <div className={styles.retouch_a}>
            <Button type="submit" className="correction">
              교환하기
            </Button>
          </div>
        </div>
      </div>

      <PointList />
    </div>
  );
}

export default Point;
