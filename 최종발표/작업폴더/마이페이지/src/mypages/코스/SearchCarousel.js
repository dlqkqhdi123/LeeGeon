import { useEffect, useRef, useState } from "react";
// import './SearchCarousel.scss';
import "./SearchCarousel.css";

const SearchCarousel = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      url: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
    },
    {
      id: 2,
      url: "http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg",
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12_4-r7n9WG7GNm22kYQzh18-E2LywioMSw&usqp=CAU",
    },
  ]);
  // 현재 인덱스 값 저장
  const [currentIndex, setCurrentIndex] = useState(0);
  /** 앞뒤로 추가할  데이터 개수(카운터 바꿔도 된다) */
  const fakeData = 2;
  /** 앞뒤로 속임수 데이터를  만든는 함수 */
  const setSliders = () => {
    const addedFront = [];
    const addedLast = [];
    // for 문으로 대체 가능 연습 겸 while 사용
    let index = 0;
    while (index < fakeData) {
      addedLast.push(item[index % item.length]);
      // 앞쪽은 2번 3번 순으로 배열을 생성해야 되니 unshift 사용
      addedFront.unshift(item[item.length - 1 - (index % item.length)]);
      index++;
    }
    // 스프레드연산자로 배열 재구성
    return [...addedFront, ...item, ...addedLast];
  };
  /** 배열의 0번인덱스, 마지막 인덱스에서 눈속임주는 함수 */
  const handlerSlide = (index) => {
    if (index < 0) {
      direction.current = "left";
      index = slides.length - 1;
      setOffTransition(true);
    } else if (index === slides.length - 1) {
      direction.current = "right";
      index = slides.length - 1;
    }
    setCurrentIndex(index);
  };
  /** 방향이 왼쪽인지 오른쪽인지 판별 */
  const handleSwipe = (direction) => {
    handlerSlide(currentIndex + direction);
  };
  /** fakedata를 포함한 map을 돌릴 배열 생성 */
  const slides = setSliders();
  /** transition on,off toggle */
  const [offTransition, setOffTransition] = useState(false);
  /** 왼쪽이냐 오른쭉이냐 판단하는 참조값 */
  const direction = useRef("left");
  const transition = offTransition ? "0s" : "1s";
  /** 예상치 않는 동작을 막기 위해 button에 disabled 추가 */
  const [disabled, setDisabled] = useState(false);
  /** 버튼이 disabled 되는 시간은 transition이 지속되는 1초만*/
  const buttonControll = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1000);
  };

  useEffect(() => {
    if (
      // 오른쪽 맨 마지막 인덱스에서 조건발동
      direction.current === "right" &&
      currentIndex === slides.length - 1
    ) {
      // transition 잠시 껐다가 0번인덱스로 넘어가기
      setTimeout(() => {
        setOffTransition(true);
        setCurrentIndex(0);
      }, 1000);
      // 0.1초 후 transition 켜기
      setTimeout(() => {
        setOffTransition(false);
      }, 1100);
    } else if (
      // 이번엔 0번인덱스에서 제일마지막 인덱스로 넘어 갈때,
      direction.current === "left" &&
      currentIndex === slides.length - 1
    ) {
      // 0번에서 마지막 인덱스로 갈때는 위의 조건가 겹치지 않기 위해,
      // 먼저 transtion을 끄고 넘어간 다음 0.01초 뒤에 켜서 눈속임을 줌.
      setTimeout(() => {
        setOffTransition(false);
        setCurrentIndex(slides.length - 2);
      }, [10]);
    }
  }, [currentIndex]);

  return (
    <div className="project">
      <button
        disabled={disabled}
        onClick={() => {
          handleSwipe(-1);
          buttonControll();
        }}
      >
        뒤로
      </button>
      <div className="carousel">
        <div
          className="carouselBox"
          style={{
            // 캐러셀 효과 주는 부분
            transform: `translateX(${-100 * currentIndex}%)`,
            transition,
          }}
        >
          {slides.map(({ url, id }, idx) => {
            return (
              <div
                key={idx}
                className="carouselItem"
                style={{
                  backgroundImage: `url(${url})`,
                }}
              >
                {id}
              </div>
            );
          })}
        </div>
      </div>
      <button
        disabled={disabled}
        onClick={() => {
          handleSwipe(1);
          buttonControll();
        }}
      >
        앞으로
      </button>
    </div>
  );
};

// const SearchCarousel = () => {
//     <div className ='carousel'>
// 	<div className ='carouselBox'>
//     	<div className = 'carouselItem'
// 			style={{backgroundImage: `url(${'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png'})`}}>
//           1번 박스
//         </div>
// 		<div className = 'carouselItem'
// 			style={{backgroundImage: `url(${'http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'})`}}>
//           2번 박스
//         </div>
// 		<div className = 'carouselItem'
// 			style={{backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12_4-r7n9WG7GNm22kYQzh18-E2LywioMSw&usqp=CAU'})`}}>
//           3번 박스
//         </div>
//     </div>
// </div>
// };

export default SearchCarousel;
