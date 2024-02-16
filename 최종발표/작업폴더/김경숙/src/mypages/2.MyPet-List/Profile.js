import styled from "styled-components";
import styles from "./Profile.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Button1 = styled.button`
  border: 2px solid #d9d9d9;
  color: #d9d9d9;
  background-color: #fff;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 2.3rem;
  margin: 0;
`;

const SDatePicker = styled(DatePicker)`
  border: 1px solid #d9d9d9;
  outline: none;
  background-color: #fff;
  padding: 0.5rem;
  color: #000;
  width: 100%;
  margin-right: 0.5rem;
`;

function Profile() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="profilList">
      <from className={styles.infoBox}>
        <div className={styles.container2}>
          <label className={styles.label} htmlFor="petNumber">
            동물 등록번호
          </label>
          <input
            className={styles.input}
            type="petNumber"
            id="petNumber"
            placeholder="아이의 등록번호를 입력해주세요."
          />
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="petName">
            펫이름
          </label>
          <input
            className={styles.input}
            type="petName"
            id="petName"
            placeholder="아이의 이름을 입력해주세요."
          />
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="petType">
            펫종류
          </label>
          <select className={styles.select} name="" id="">
            <option value="">선택하세요</option>
            <option value="">강아지</option>
            <option value="">고양이</option>
          </select>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="kind">
            품종
          </label>
          <select className={styles.select} name="" id="">
            <option value="">선택하세요</option>
          </select>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="gender">
            성별
          </label>
          <select className={styles.select} name="" id="">
            <option value="">선택하세요</option>
            <option value="">수컷</option>
            <option value="">암컷</option>
          </select>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="weight">
            몸무게
          </label>
          <div>
            <input
              className={styles.input2}
              type="weight"
              id="weight"
              placeholder="아이의 몸무게를 입력해주세요."
            />
            <strong>kg</strong>
          </div>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="birthDate">
            생년월일
          </label>
          <div className={styles.choice}>
            <SDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>

        <div className={styles.container2}>
          <label className={styles.label} htmlFor="withdrawal">
            중성화 여부
          </label>
          <div className={styles.choice}>
            <Button1
              type="submit"
              style={
                selectedButton === "completed"
                  ? { backgroundColor: "#ff9b50", color: "#fff", border: "none" }
                  : {}
              }
              onClick={() => handleButtonClick("completed")}
            >
              완료
            </Button1>

            <Button1
              type="submit"
              style={
                selectedButton === "incomplete"
                  ? { backgroundColor: "#ff9b50", color: "#fff", border: "none" }
                  : {}
              }
              onClick={() => handleButtonClick("incomplete")}
            >
              미완료
            </Button1>
          </div>
        </div>

        <div className={styles.container3}>
          <label className={styles.label} htmlFor="birthDate">
            기초 접종 여부
          </label>
          <div className={styles.inoculation}>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
                <option value="">선택</option>
                <option value="">기초</option>
                <option value="">백혈병</option>
                <option value="">간염</option>
                <option value="">사상충</option>
              </select>{" "}
              <div>-</div>

              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="1차"
              />
            </div>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
              <option value="">선택</option>
                <option value="">기초</option>
                <option value="">백혈병</option>
                <option value="">간염</option>
                <option value="">사상충</option>
              </select>{" "}
              <div>-</div>
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="2차"
              />
            </div>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
              <option value="">선택</option>
                <option value="">기초</option>
                <option value="">백혈병</option>
                <option value="">간염</option>
                <option value="">사상충</option>
              </select>{" "}
              <div>-</div>              
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="3차"
              />
            </div>
            <div className={styles.choice2}>
              <select className={styles.select2} name="" id="">
              <option value="">선택</option>
                <option value="">기초</option>
                <option value="">백혈병</option>
                <option value="">간염</option>
                <option value="">사상충</option>
              </select>{" "}
              <div>-</div>
              <input
                className={styles.input2}
                type="birthDate"
                id="birthDate"
                placeholder="4차"
              />
            </div>
          </div>
        </div>
      </from>
    </div>
  );
}

export default Profile;
