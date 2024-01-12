import styled from "styled-components";
import Input from "./Input";
import Button from "./LoginButton";
import KaKaoButton from "./KaKaoButton";
import Link from "./Link";
import Label from "./Label";
import { useState } from "react";
import { getMember } from "../api/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useMember, useSetMember } from "../contexts/MemberContexts";

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
  // const member = useMember();
  // const setMember = useSetMember();
  const { state } = useLocation();

  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { memberObj, message } = await getMember(values);
    if (message === undefined) {
      localStorage.setItem("member", JSON.stringify(memberObj));
      // window.location.href = "/";
      // setMember(memberObj);
      navigate(state ? state : "/");
    } else {
      alert(message);
    }
  };
  return (
    <Container>
      <Logo>DW 온라인스쿨</Logo>
      <Description>
        회원이 아니신가요? <Link href="#">회원가입하기</Link>
      </Description>
      <form onSubmit={handleLogin}>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          placeholder="Login"
          name="id"
          id="email"
          onChange={handleValueChange}
        />
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          id="password"
          onChange={handleValueChange}
        />
        <Button type="suvmit">로그인하기</Button>
      </form>
      <KaKaoButton />
    </Container>
  );
}

export default Login;
