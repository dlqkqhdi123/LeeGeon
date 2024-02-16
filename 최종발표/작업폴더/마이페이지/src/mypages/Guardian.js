import styled from "styled-components";
import Button from "../component/Button";
import styles from "./MyPage.module.css";
import SideBar from "./SideBar";

function Guardian() {
  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>보호자 정보 관리</h1>

        <from className={styles.infoBox}>
          <div className={styles.container2}>
            <label className={styles.label} htmlFor="name">
              이름
            </label>
            <input
              className={styles.input}
              type="name"
              id="name"
              placeholder="김보호자"
            />
          </div>
          <div className={styles.container2}>
            <label className={styles.label} htmlFor="phonNumber">
              연락처
            </label>
            <input
              className={styles.input}
              type="phonNumber"
              id="phonNumber"
              placeholder="010-000-0000"
            />
          </div>
          <div className={styles.container2}>
            <label className={styles.label} htmlFor="email">
              이메일
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="hostpetal@gmail.com"
            />
          </div>
          <div className={styles.container2}>
            <label className={styles.label} htmlFor="nickName">
              닉네임
            </label>
            <input
              className={styles.input}
              type="nickName"
              id="nickName"
              placeholder="호스펫탈"
            />
          </div>
          <div className={styles.container2}>
            <label className={styles.label} htmlFor="withdrawal">
              회원탈퇴
            </label>
            <div>
              <Button
                type="submit"
                style={{ width: "7rem", height: "2.3rem", margin: "0" }}
              >
                탈퇴하기
              </Button>
            </div>
          </div>
        </from>
        <div className={styles.retouch}>
          <Button type="submit">수정하기</Button>
        </div>
      </div>
    </div>
  );
}

export default Guardian;
