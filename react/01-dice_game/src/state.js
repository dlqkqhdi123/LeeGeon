import { useState } from "react";

function State() {
  const [state, setState] = useState(0);

  const onClickHandler = () => {
    console.log("click!!");

    setState(1);

    if (state === 1) {
      console.log("실행될까?");
    }
  };
  return <h1 onClick={onClickHandler}>State 테스트</h1>;
}
export default State;
