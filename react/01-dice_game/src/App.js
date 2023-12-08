import logo from "./assets/logo.png";

import Board from "./Board";
import "./app.css";
import "./index.css";
import Button from "./Button";
import { useState } from "react";

// 함수형 컴포넌트 : 컴포넌트  함수형으로 만든것(변수형으로도 만들수도 있음.)
//      함수형 컴포넌트를 만들때에는 함수명의 첫 글자는 반드시 대문자여야 한다.
//      함수형 컴포넌트 안에서는 JSX 문법으로 만든 이랙트 엘리먼트를 리턴해줘야 한다.
const style = {
  backgroundColor: "#000000",
  color: "#fff",
};

// JSX 에서는 객체 지향 개념이 적용되기 때문에 class  가 아니라 className 으로 적어야한다
// for ==> htmlFor ,
// onclick/onblur ==> onClick/onBlur
function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // state
  // 던지기 버튼을 누르면 화면에서 주사위 이미지가 바뀌어야 한다
  // html 이엿으면 비동기로 요소를 추가 삭제 하는 코드를 작성해야한다
  // 리액트에서는 state 라는 것을 사용한다. state는 리액트에서 변수 같은 것인데 이 state 가 바뀔때마다 리액트가 알아서 화면을 새로 랜더링 해준다
  const [myNum, setMyNum] = useState(1);
  const [otherNum, setOtherNum] = useState(1);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);

  const handleRollClick = () => {
    // 주사위 숫자 뽑아야한다.
    const nextMyNum = random(6);
    const nextOtherNum = random(6);

    // setMyNum(random(6));
    setGameHistory([...gameHistory, myNum]);
    // setOtherNum(random(6));
    setOtherGameHistory([...otherGameHistory, otherNum]);
  };

  const handleClearClick = () => {};
  return (
    <div className="App">
      <div>
        <img src={logo} alt="주사위 게임 로고" className="App-logo" />
        <h1 className="App-title">주사위 게임</h1>
        <div className="App-boards">
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleClearClick}>처음부터</Button>
        </div>
      </div>
      <div>
        <Board name="나" color="blue" num={myNum} gameHistory={gameHistory} />
        <Board
          name="상대"
          color="red"
          num={otherNum}
          gameHistory={otherGameHistory}
        />
      </div>
    </div>
  );
}

export default App;