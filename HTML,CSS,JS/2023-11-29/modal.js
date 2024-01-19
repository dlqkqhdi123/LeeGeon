const box = document.querySelector(".box");
const text = document.querySelector(".text");
const overlay = document.querySelector(".overlay");
// 모달창이 열려있는지 여부를 저장하는 전역변수
let isModalOpen = false;

function onClick() {
  if (isModalOpen) {
    isModalOpen = false;
    box.classList.remove("modal");
    text.classList.remove("visible");
  } else {
    isModalOpen = true;
    box.classList.add("modal");
    setTimeout(() => {
      text.classList.add("visible");
    }, 500);
  }
}
