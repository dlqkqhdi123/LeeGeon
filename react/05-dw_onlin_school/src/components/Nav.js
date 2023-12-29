import Container from "./Container";
import UserMenu from "./UserMenu";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <dic className={styles.nav}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <span>DW</span> OS
        </div>
        <ul className={styles.menu}>
          <li>카탈로그</li>
          <li>커뮤니티</li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </dic>
  );
}

export default Nav;
