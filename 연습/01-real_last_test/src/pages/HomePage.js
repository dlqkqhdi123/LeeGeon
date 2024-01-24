import landingImg from "../assets/landing.svg";
import Button from "../components/Button";
import Container from "../components/Container";
import Lined from "../components/Lined";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.bg}>
        <Container className={styles.container}>
          <div className={styles.texts}>
            <h1 className={styles.heading}>
              <Lined>병원이 처음이라면,</Lined>
              <br />
              <strong>hospetal</strong>
            </h1>
            <p className={styles.description}>
              고양이보단 개지
              <br />
              ㅇㅈ?
            </p>
            <div>
              <Button> ㅇ ㅇㅈ</Button>
            </div>
          </div>
          <div className={styles.figure}>
            <img
              src={landingImg}
              alt="그래프,모니터,윈도우,키보드,마우스,자물쇠"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
