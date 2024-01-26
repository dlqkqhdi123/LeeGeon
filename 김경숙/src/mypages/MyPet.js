import styled from "styled-components";
import Button from "../component/Button";
import PointList from "./My-List/PointList";
import styles from "./MyPage.module.css";

function Point() {
  return (
    <div className={styles.containerBox}>
      <h1 className={styles.h1}>마이펫 관리</h1>
      <div className="popol">
        <div className="slide">
          <div className="popol1"></div>
        </div>
        <div className={styles.retouch}>
          <Button type="submit" className={styles.correction}>
            마이펫 추가하기
          </Button>
        </div>
      </div>
      <hr />
      <div className=" profil">
        <div className="poto"></div>
        <div className="profilList">
          <from className={styles.infoBox}>
            <div className={styles.container2}>
              <label htmlFor="petNumber">동물 등록번호</label>
              <input
                type="petNumber"
                id="petNumber"
                placeholder="아이의 등록번호를 입력해주세요."
              />
            </div>

            <div className={styles.container2}>
              <label htmlFor="petName">펫이름</label>
              <input
                type="petName"
                id="petName"
                placeholder="아이의 이름을 입력해주세요."
              />
            </div>

            <div className={styles.container2}>
              <label htmlFor="petType">펫종류</label>
              <select name="" id="">
                <option value="">선택하세요</option>
                <option value="">강아지</option>
                <option value="">고양이</option>
                <option value="">햄스터</option>
              </select>
            </div>

            <div className={styles.container2}>
              <label htmlFor="kind">품종</label>
              <select name="" id="">
                <option value="">선택하세요</option>
              </select>
            </div>
            <div className={styles.container2}>
              <label htmlFor="gender">성별</label>
              <select name="" id="">
                <option value="">선택하세요</option>
                <option value="">수컷</option>
                <option value="">암컷</option>
              </select>
            </div>
            <div className={styles.container2}>
              <label htmlFor="weight">몸무게</label>
              <input
                type="weight"
                id="weight"
                placeholder="아이의 몸무게를 입력해주세요."
              />
              kg
            </div>

            <div className={styles.container2}>
              <label htmlFor="birthDate">생년월일</label>
              <select name="" id="">
                <option value="">선택하세요</option>
              </select>{" "}
            </div>
            <div className={styles.container2}>
              <label htmlFor="withdrawal">중성화 여부</label>
              <div>
                <Button
                  type="submit"
                  style={{ width: "7rem", height: "2.3rem", margin: "0" }}
                >
                  완료
                </Button>

                <Button
                  type="submit"
                  style={{ width: "7rem", height: "2.3rem", margin: "0" }}
                >
                  미완료
                </Button>
              </div>
              <div className={styles.container2}>
                <label htmlFor="birthDate">기초 접종 여부</label>
                <select name="" id="">
                <option value="">선택하세요</option>
              </select>
                <input
                  type="birthDate"
                  id="birthDate"
                  placeholder="접종종류를 작성해주세요."
                />
              </div>
            </div>
          </from>
        </div>
        <div className={styles.retouch}>
          <Button type="submit" className={styles.correction}>
            등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Point;
