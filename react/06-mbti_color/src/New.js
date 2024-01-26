import { Link } from "react-router-dom";
import styles from "./New.module.css";
import MBTISelect from "./components/MBTISelect";
import { useState } from "react";
import ColorInput from "./components/ColorInput";
import generateColorCode from "./lib/generateColor";
import Button from "./components/Button";

function New() {
  const [formValue, setFormValue] = useState({
    mbti: "INTJ",
    colorCode: "#4f4f4f",
  });

  const handleChange = (name, value) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleRandomClick = () => {
    const nextColorCode = generateColorCode(
      handleChange("colorCode", nextColorCode)
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerHeading}>새 컬러 등록하기</h1>
        <Link className={styles.cancel} to="/">
          <img className={styles.cancelIcon} src="/images/x.svg" alt="취소" />
        </Link>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>MBTI</h2>
        <MBTISelect
          value={formValue.mbti}
          onChange={(newMbti) => handleChange("mbti", newMbti)}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>
          컬러
          <button className={styles.random} onClick={handleRandomClick}>
            <img
              className={styles.repeatIcon}
              src="/images/repeat.svg"
              alt="랜덤"
            />
          </button>
        </h2>
        <ColorInput
          value={formValue.colorCode}
          onChange={(newColorCode) => handleChange("colorCode", newColorCode)}
        />
      </section>
      <Button className={styles.submit}>컬러등록</Button>
    </div>
  );
}

export default New;
