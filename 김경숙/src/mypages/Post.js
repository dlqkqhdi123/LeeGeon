import { Link, NavLink, Outlet } from "react-router-dom";
import "./SideBar.css";

function getLinkStyle({ isActive }) {
  return {
    // textDecoration: isActive ? "underline" : undefined,
    borderBottom: isActive ? "2px solid #000" : undefined,
  };
}

function Post() {
  return (
    <div className="contents">
      <div className="postMenus">
        <NavLink
          className="sidebar-item"
          to={"/myPage/post1/writing"}
          style={getLinkStyle}
        >
          내가 쓴 글
        </NavLink>
      </div>
      <div className="postMenus">
        <NavLink
          className="sidebar-item"
          to={"/myPage/post1/review"}
          style={getLinkStyle}
        >
          내가 쓴 후기
        </NavLink>
      </div>
      <div className="postMenus">
        <NavLink
          className="sidebar-item"
          to={"/myPage/post1/inquiry"}
          style={getLinkStyle}
        >
          문의내역
        </NavLink>
      </div>
    </div>
  );
}

export default Post;
