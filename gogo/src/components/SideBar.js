import React from "react";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      <div className={styles.sidecontainer}>
        <ul className={styles.sideUl}>
          <Link to="Company">
            <li>업체 정보 관리</li>
          </Link>
          <Link>
            <li>예약 관리</li>
          </Link>
          <Link to="111">
            <li>예약 목록</li>
          </Link>
          <Link to="a1a2a3a4">
            <li>게시글 관리</li>
          </Link>
          <Link>
            <li>작성한 글</li>
          </Link>
          <Link>
            <li>제휴 관리</li>
          </Link>
          <Link>
            <li>제휴 업체</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;