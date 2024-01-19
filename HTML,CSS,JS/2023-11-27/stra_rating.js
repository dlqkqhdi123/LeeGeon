const stars = document.querySelectorAll(".stars i");

// stars.forEach((star, i) => {
//     star.addEventListener("click", (e) => {
//         checkStars(i)
//     })
// })

function checkStars(clickIndex) {
  console.log("click", clickIndex);
  stars.forEach((star, i) => {
    if (i <= clickIndex) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  // 어느 별이 클릭되었는지 이벤트 객체를 통해 알아온다

  // 조건식 클릭된 별의 인덱스 보다 작거나 같으면 액티브 클래스를 추가하고
  // 크면 액티브 클래스를 삭제한다
}
