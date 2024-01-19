const slideContainer = document.querySelector(".items");
const slideList = document.querySelectorAll(".item");

let current = 0;
let prev = slideList.lenth - 1;
let next = 1;

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slideList.length - 1);

const gotoNext = () =>
  current < slideList.length ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;
  // 모든 스라이드 div 태그 클래스 초기화
  for (let i = 0; i < slideList.length; i++) {
    slideList[i].classList.remove("active");
    slideList[i].classList.remove("prev");
    slideList[i].classList.remove("next");
  }
  if (prev < 0) {
    prev = slideList.length - 1;
  }
  if (next > slideList.length - 1) {
    next = 0;
  }
  slideList[current].classList.add("active");
  slideList[prev].classList.add("prev");
  slideList[next].classList.add("next");
};
