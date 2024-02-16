import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
// import Logo from "../assets/Logo_main.svg";
import { useContext } from "react";
import AuthContext from "./Account/AuthContext";

function getLinkStyle({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  const isLogined = JSON.parse(localStorage.getItem("member"));
  const { isLogin, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e) => {
    const paths = ["/SignUp", "/SignUpHos", "/SignUpPh", "/SocialName"];
    if (paths.includes(location.pathname)) {
      if (
        !window.confirm(
          "입력한 정보가 사라집니다. 정말 가입을 취소하시겠습니까?"
        )
      ) {
        e.preventDefault();
        return false;
      }
    }
    return true;
  };

  const handleRemoveLocal = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("member");
      localStorage.removeItem("com.naver.nid.access_token");
      localStorage.removeItem("nickname");
      localStorage.removeItem("name");
      logout();
      navigate("/");
    }
  };

  const handleMyPageClick = (e) => {
    e.preventDefault();
    const result = handleLinkClick(e);
    if (!result) return;

    if (isLogined === null && !isLogin) {
      alert("로그인 후 이용하실 수 있습니다.");
      navigate("/login");
      e.preventDefault();
    } else {
      const member = JSON.parse(localStorage.getItem("member"));
      const memberType = member ? member.memberType : null;

      if (memberType === "owner") {
        console.log("오너");
        return navigate("/mypage");
      } else if (memberType === "partner") {
        console.log("파트너");
        return navigate("/partnerpage");
      } else if (memberType === "manager") {
        return navigate("/managerpage");
      }
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            <div style={{ display: "inline-block" }}>
              {/* <img src={Logo} alt="Hospetal logo" className="logo-img" /> */}
            </div>
          </Link>
        </div>
        <ul className="nav-ul">
          <li className="nav-item">
            <NavLink
              to="/disease"
              className="nav-link"
              style={getLinkStyle}
              onClick={handleLinkClick}
            >
              Disease
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/hospital"
              className="nav-link"
              style={getLinkStyle}
              onClick={handleLinkClick}
            >
              Hospital
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/mbti"
              className="nav-link"
              style={getLinkStyle}
              onClick={handleLinkClick}
            >
              MBTI
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/article"
              className="nav-link"
              style={getLinkStyle}
              onClick={handleLinkClick}
            >
              Community
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              style={getLinkStyle}
              onClick={(e) => {
                handleMyPageClick(e);
                handleLinkClick(e);
              }}
            >
              My Page
            </NavLink>
          </li>
          <li className="nav-item">
            {!isLogined && !isLogin ? (
              <NavLink
                to="/login"
                className="nav-link"
                style={getLinkStyle}
                onClick={handleLinkClick}
              >
                Login
              </NavLink>
            ) : (
              <NavLink
                to="/"
                className="nav-link"
                style={getLinkStyle}
                onClick={handleRemoveLocal}
              >
                Logout
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
