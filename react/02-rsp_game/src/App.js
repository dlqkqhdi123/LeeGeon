import HandIcon from "./HandIcon";
import reset from "./assets/ic-reset.svg";
import "./HandIcon.css";
import HandButton from "./HandButton";
import { compareHand, generateRandomHand } from "./utils";
import { useState } from "react";

function getResult(me, other) {
  const compareison = compareHand(me, other);
  if (compareison > 0) return "승리";
  if (compareison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState("rock");
  const [otherHand, setOtherHand] = useState("rock");
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (value) => {
    const nextOtherHand = generateRandomHand();
    const nextHistory = getResult(value, nextOtherHand);
    if (nextHistory === "승리") setScore(score + bet);
    if (nextHistory === "패배") setOtherScore(otherScore + bet);
    setHand(value);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistory]);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num = 9;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  const handleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  return (
    <div>
      <h1>가위바위보</h1>
      <img src={reset} alt="초기화" onClick={handleClearClick} />
      <div className="App-scores">
        <div>
          <div>{score}</div>
          <div>나</div>
        </div>
        <div>:</div>
        <div>
          <div>{otherScore}</div>
          <div>너</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는곳 */}
          <div>
            <div className="Hand">
              <HandIcon value={hand} className="Hand-icon" />
            </div>
            <div>VS</div>
            <div className="Hand">
              <HandIcon value={otherHand} className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div>
            <span>배점</span>
            <input
              type="number"
              min={1}
              max={9}
              value={bet}
              onChange={handleBetChange}
            />
            <span>배</span>
          </div>
          {/* 기록 */}
          <div>
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton onClick={handleButtonClick} value="rock" />
        <HandButton onClick={handleButtonClick} value="scissor" />
        <HandButton onClick={handleButtonClick} value="paper" />
      </div>
    </div>
  );
}

export default App;
