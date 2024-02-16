import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import Member from "../pages/Member";

function getLinkStyle({ isActive }) {
  return {
    borderBottom: isActive ? "3px solid #000" : undefined,
  };
}

function SideBar() {
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    if (menuName === "member") {
      // post 메뉴 클릭 시
      setIsMemberOpen(true);
    } else {
      // 다른 메뉴 클릭 시
      setIsMemberOpen(false);
    }
  };

  return (
    <side className={styles.side}>
      <menu className={styles.menu}>
        <div className={styles.sideMenus}>
          <NavLink
            className={styles.sidebarItem}
            onClick={() => handleMenuClick("")}
            to={"/adminPage/post"}
            style={getLinkStyle}
          >
            게시글 관리
          </NavLink>
        </div>

        <div className={styles.sideMenus}>
          <NavLink
            className={styles.sidebarItem}
            onClick={() => handleMenuClick("")}
            to={"/adminPage/resistration"}
            style={getLinkStyle}
          >
            병원&middot;약국 등록
          </NavLink>
        </div>

        <div
          className={`${styles.sideMenus} ${isMemberOpen ? "active" : ""}`}
          onMouseEnter={() => handleMenuClick("member")}
          onMouseLeave={() => setIsMemberOpen(false)}
        >
          <NavLink
            className={styles.sidebarItem}
            to={"/adminPage/member/individual"}
            style={getLinkStyle}
          >
            회원 관리
          </NavLink>
          {isMemberOpen && <Member />}
        </div>
      </menu>
    </side>
  );
}

export default SideBar;
