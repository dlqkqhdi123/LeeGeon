import { useEffect, useRef } from "react";
import { useState } from "react";
import { styled } from "styled-components";
import NaverLogo from "../../assets/naver logo.png";
const { naver } = window;

const NaverIdLogin = styled.div`
  display: none;
`;

const NaverLoginBtn = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #06bd34;
  border: none;
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
`;

function Naver() {
  const [user, setUser] = useState(null);

  const naverRef = useRef();
  const { naver } = window;

  const naverLogin = new naver.LoginWithNaverId({
    clientId: "Dt3h07_52mnBoskaynlU",
    callbackUrl: "http://localhost:3000",
    isPopup: true,
    loginButton: {
      color: "green",
      type: 3,
      height: 50,
    },
  });

  const getUser = async () => {
    await naverLogin.getLoginStatus((status) => {
      console.log(`로그인?: ${status}`);
      if (status) {
        setUser({ ...naverLogin.user });
        window.opener.location.href = "http://localhost:3000";
        window.close();
      }
    });
  };

  const naverLogout = () => {
    localStorage.removeItem("com.naver.nid.access_token");
    window.location.reload();
  };

  useEffect(() => {
    naverLogin.init();
    console.log("init!");
    getUser();
  }, []);

  const handleNaverLogin = () => {
    naverRef.current.children[0].click();
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>네이버 로그인 성공!</h2>
          <h3>사용자 이름</h3>
          <div>{user.name}</div>
          <h3>사용자 이메일</h3>
          <div>{user.email}</div>
          <h3>사용자 프로필사진</h3>
          <img src={user.profile_image} alt="프로필 사진" />
          <button onClick={naverLogout}>로그아웃</button>
        </div>
      ) : (
        // 네이버 로그인 버튼
        <div>
          <NaverIdLogin ref={naverRef} id="naverIdLogin" />
          <NaverLoginBtn onClick={handleNaverLogin}>
            <img src={NaverLogo} alt="네이버 로그인 아이콘" />
            Naver 로 로그인
            <div></div>
          </NaverLoginBtn>
        </div>
      )}
    </div>
  );
}

export default Naver;
