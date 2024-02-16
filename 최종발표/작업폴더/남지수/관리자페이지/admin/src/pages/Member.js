import { NavLink } from "react-router-dom";
import styles from "../component/SideBar.module.css";

function getLinkStyle({ isActive }) {
  return {
    // textDecoration: isActive ? "underline" : undefined,
    borderBottom: isActive ? "3px solid #000" : undefined,
  };
}

function Member() {
  return (
    <div className={styles.contents}>
      <div className={styles.postMenus}>
        <NavLink
          className={styles.sidebarItem}
          to={"/adminPage/member/individual"}
          style={getLinkStyle}
        >
          개인 회원
        </NavLink>
      </div>
      <div className={styles.postMenus}>
        <NavLink
          className={styles.sidebarItem}
          to={"/adminPage/member/Company"}
          style={getLinkStyle}
        >
          가맹점
        </NavLink>
      </div>
      <div className={styles.postMenus}>
        <NavLink
          className={styles.sidebarItem}
          to={"/adminPage/member/Report"}
          style={getLinkStyle}
        >
          회원 신고
        </NavLink>
      </div>
    </div>
  );
}

export default Member;
