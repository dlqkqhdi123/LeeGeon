import { useState, useEffect } from "react";
import personIcon from "../assets/person.png";
import styles from "./UserMenu.module.css";

function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);

    window.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles.UserMenu}>
      <button className={styles.iconButton} onClick={handleButtonClick}>
        <img src={personIcon} alt="유저 메뉴" />
      </button>
      {isOpen && (
        <ul className={styles.popup}>
          <li>위시리스트</li>
          <li className={styles.disabled}>회원가입</li>
          <li>로그인</li>
        </ul>
      )}
    </div>
  );
}

export default UserMenu;
