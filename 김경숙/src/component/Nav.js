import Container from "./Container";
// import UserMenu from "./UserMenu";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}
function Nav() {
  console.log("Nav 로딩");
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <span>호스펫탈</span>
          </div>
        </Link>

        <ul className={styles.menu}>
          <li>
            <NavLink to="/courses" style={getLinkStyle}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/404NotFound" style={getLinkStyle}>
              404페이지
            </NavLink>
          </li>
          <li>
            <NavLink to="/myPage/guardian" style={getLinkStyle}>
              마이페이지
            </NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
