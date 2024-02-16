import styled from "styled-components";
import MainCarousel from "../components/MainCarousel";
import { Link } from "react-router-dom";
import BtnBorder from "../assets/button round_1.png";
import BtnBorderHover from "../assets/button round_hover.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 16px;
  background-color: #f8ebd8;
  flex-direction: column;
  margin: 0 auto;
  gap: 16px;
  box-sizing: border-box;
`;
const StyleLink = styled(Link)`
  position: relative;
  height: 100px;
  width: 200px;
  background-image: url(${BtnBorder});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &:hover {
    background-image: url(${BtnBorderHover});
  }
`;

const Inner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function MainPage() {
  return (
    <Container>
      <MainCarousel />
      <p style={{ textAlign: "center" }}>
        진료비 DB 기반 조회, 질병검색, 동물병원약국 추천 및 예약서비스를
        제공하여
        <br />
        보다 편리하고 이로운 펫 라이프를 만족할 수 있습니다.
      </p>

      <StyleLink to="/about">
        <Inner>More</Inner>
      </StyleLink>
    </Container>
  );
}
export default MainPage;
