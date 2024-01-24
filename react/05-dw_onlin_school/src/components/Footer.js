import Container from "./Container";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <ul className={styles.links}>
          <li>DWOS소개</li>
          <li>개인정보 취급방침</li>
          <li>사용자 이용약관</li>
          <li>자주 묻는 질문</li>
        </ul>
        <ul className={styles.info}>
          <li>(주)DWOS</li>
          <li>대표 | 이건</li>
          <li>개인정보보호 | 이건</li>
          <li>대표 번호 | 1001</li>
          <li>사업자번호 | ***--**---**</li>
          <li>통신판매업 | ***--**---**</li>
          <li>주소 | ***--**---**</li>
        </ul>
        <div className={styles.icons}>
          <div className={styles.logo}>
            <span>DW</span>OS
          </div>
          <div className={styles.sns}>
            <img src={facebookIcon} />
            <img src={twitterIcon} />
            <img src={instagramIcon} />
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
