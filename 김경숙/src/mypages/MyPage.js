import SideBar from "./SideBar.js";
import { Outlet } from "react-router-dom";
import styles from "./MyPage.module.css";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f8ebd8;
  display: flex;
`;

function MyPage() {
  return (
    <>
      <SideBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default MyPage;
