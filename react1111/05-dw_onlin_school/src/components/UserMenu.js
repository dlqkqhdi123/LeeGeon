import { useState, useEffect } from "react";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";
import { Link } from "react-router-dom";
import { useMember } from "../contexts/MemberContexts";

function UserMenu() {
  // const member = useMember();
  // console.log(member);
  const [isOpen, setIsOpen] = useState(false);
  const isLogined = JSON.parse(localStorage.getItem("member"));
  console.log(isLogined);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = () => setIsOpen(false);
    // const handleClickOutside = () => {
    //   alert("123");
    // };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.userMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <Link to="/wishlist">
            <li>위시리스트</li>
          </Link>
          <li className={styles.disabled}>회원가입</li>
          {!isLogined ? (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          ) : (
            <Link to="/logout">
              <li>로그아웃</li>
            </Link>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
