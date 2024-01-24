import styled from "styled-components";
import Input from "./Input";

const Divw = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Practice2() {
  return (
    <Divw>
      <divw />
      <h1>로그인</h1>
      <label htmlFor="email">email</label>
      <Input type="email" placeholder="styled@DW.kr" id="email" />
      <label htmlFor="password">Password</label>
      <Input type="passwrd" placeholder="비밀번호" id="password" />
    </Divw>
  );
}

export default Practice2;
