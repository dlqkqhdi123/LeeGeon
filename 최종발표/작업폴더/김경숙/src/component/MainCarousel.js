import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImg1 from "../assets/캐러셀1.jpg";
import CarouselImg2 from "../assets/캐러셀2.jpg";
import CarouselImg3 from "../assets/캐러셀3.png";
import CselLeftImg from "../assets/chevron_left_bk.png";
import CselRightImg from "../assets/chevron_right_bk.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #f8ebd8;
  margin: 0 auto;
  gap: 16px;
  box-sizing: border-box;
`;

const Chevron = styled.button`
  background-color: inherit;
  border: none;
`;

const MyCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handlePrevClick = () => {
    setSelectedImage((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextClick = () => {
    setSelectedImage((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <Container className="custom-carousel">
      <Chevron className="carousel-button-left" onClick={handlePrevClick}>
        <img src={CselLeftImg} alt="왼쪽 화살표" style={{ width: "100px" }} />
      </Chevron>
      <div className="carousel-images">
        <img
          src={
            selectedImage === 0
              ? CarouselImg1
              : selectedImage === 1
              ? CarouselImg2
              : CarouselImg3
          }
          alt={`이미지${selectedImage + 1}`}
          width="400"
          height="400"
        />
      </div>
      <Chevron className="carousel-button-right" onClick={handleNextClick}>
        <img
          src={CselRightImg}
          alt="오른쪽 화살표"
          style={{ width: "100px" }}
        />
      </Chevron>
    </Container>
  );
};

export default MyCarousel;
