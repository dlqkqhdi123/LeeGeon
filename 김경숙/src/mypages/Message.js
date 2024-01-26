import { Link, NavLink, Outlet } from "react-router-dom";
import "./SideBar.css";

function getLinkStyle({ isActive }) {
  return {
    // textDecoration: isActive ? "underline" : undefined,
    borderBottom: isActive ? "2px solid #000" : undefined,
  };
}

function Message() {
  return (
    <div className="contents">
      <div className="postMenus">
        <NavLink className="sidebar-item" to={"/myPage/message1/messageReceived"} style={getLinkStyle}>
          받은 메시지
        </NavLink>
      </div>
      <div className="postMenus">
        <NavLink className="sidebar-item" to={"/myPage/message1/sentMessage"} style={getLinkStyle}>
          보낸 메시지
        </NavLink>
      </div>
    </div>
  );
}

export default Message;
