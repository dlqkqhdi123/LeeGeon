import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./SideBar.css";
import Post from "./Post";
import Message from "./Message";

function getLinkStyle({ isActive }) {
  return {
    borderBottom: isActive ? "2px solid #000" : undefined,
  };
}

function SideBar() {
  const [isPostOpen, setIsPostOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    if (menuName === "post") {
      // post 메뉴 클릭 시
      setIsMessageOpen(false);
      setIsPostOpen(true);
    } else if (menuName === "message") {
      // message 메뉴 클릭 시
      setIsPostOpen(false);
      setIsMessageOpen(true); // 항상 true로 설정하여 하위 목록이 닫히지 않도록 함
    } else {
      // 다른 메뉴 클릭 시
      setIsPostOpen(false);
      setIsMessageOpen(false);
    }
  };

  return (
    <side className="side">
      <menu className="menu">
        <div className="sideMenus">
          <NavLink
            className="sidebar-item"
            onClick={() => handleMenuClick("")}
            to={"/myPage/guardian"}
            style={getLinkStyle}
          >
            보호자 정보관리
          </NavLink>
        </div>
        <div className="sideMenus">
          <NavLink
            className="sidebar-item"
            onClick={() => handleMenuClick("")}
            to={"/myPage/myPet"}
            style={getLinkStyle}
          >
            마이펫 관리
          </NavLink>
        </div>
        <div className="sideMenus">
          <NavLink
            className="sidebar-item"
            onClick={() => handleMenuClick("")}
            to={"/myPage/reservation"}
            style={getLinkStyle}
          >
            내 예약 목록
          </NavLink>
        </div>

        <div
          className={`sideMenus ${isPostOpen ? "active" : ""}`}
          onClick={() => handleMenuClick("post")}
        >
          <NavLink
            className="sidebar-item"
            to={"/myPage/post1"}
            style={getLinkStyle}
          >
            게시글 관리
          </NavLink>
          {isPostOpen && <Post />}
        </div>

        <div
          className={`sideMenus ${isMessageOpen ? "active" : ""}`}
          onClick={() => handleMenuClick("message")}
        >
          <NavLink
            className="sidebar-item"
            to={"/myPage/message1"}
            style={getLinkStyle}
          >
            메세지 관리
          </NavLink>
          {isMessageOpen && <Message />}
        </div>

        <div className="sideMenus">
          <NavLink
            className="sidebar-item"
            onClick={() => handleMenuClick("")}
            to={"/myPage/point"}
            style={getLinkStyle}
          >
            포인트 관리
          </NavLink>
        </div>
      </menu>
    </side>
  );
}

export default SideBar;
