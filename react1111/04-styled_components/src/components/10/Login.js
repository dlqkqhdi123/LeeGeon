import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import KaKaoButton from "./KaKaoButton";
import Link from "./Link";

const Logo = styled.h1`
  font-family: Pretendard;
  text-align: center;
  font-size: 40px;
  background-image: linear-gradient(135deg, aqua, purple);
  background-clip: text;
  color: transparent;
`;
const Description = styled.div`
  color: #848187;
  text-align: center;
`;
const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
  }
  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

function Login() {
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입하기</Link>
      </Description>
      <from>
        <label htmlFor="email">email</label>
        <Input type="email" placeholder="Login" id="email" />
        <label htmlFor="password">Password</label>
        <Input type="passwrd" placeholder="비밀번호" id="password" />
        <Button type="suvmit">로그인하기</Button>
      </from>
      <KaKaoButton />
    </Container>
  );
}

export default Login;
