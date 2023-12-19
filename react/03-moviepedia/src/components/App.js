import { useEffect, useState } from "react";
import mockItems from "../mock.json";
import ReviewList from "./ReviewList";
import { getDatas } from "./firebase";
import ReviewForm from "./ReviewForm";
import "./ReviewForm.css";

const LIMIT = 5;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [lq, setLq] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [hasNext, setHasNext] = useState(false);

  // sort 함수에 아무런 argument(아규먼트)도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬된다.
  // ==> ompareFunction가 생략될 경우, 배열의 모든 요소들은 문자열 취급되며, 유니코드 값 순서대로 정렬된다는 의미이다
  // 그렇기 때문에 숫자를 정렬할 때 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지 않는다.
  // compareFunction 의 반환값이 0 보다 작으면 a가 b보다 앞에 있어야 한다
  // 반환값 < 0 : a 가 b 보다 앞에있어야한다
  // 반환값 == 0 : a와 b의 순서를 바꾸지 않는다
  // 반환값 > 0 : b가 a 보다 앞에있어야 한다
  // a-b : 오름차순, b-a : 내림차순

  // const sortedItems = items.sort((a, b) => b[order] - a[order]);
  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    // items 에서 id 파라미터와 같은 id 가지는 요소(객체)를 제거
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  const handleLoad = async (options) => {
    let result;
    try {
      setIsLoading(true);
      setLoadingError(null);
      result = await getDatas("movie", options);
    } catch (error) {
      console.error(error);
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
    const { reviews, lastQuery } = result;
    if (options.lq === undefined) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setLq(lastQuery);
    setHasNext(lastQuery);
  };
  const handleLoadMore = () => {
    handleLoad({ order, lq: undefined, limit: LIMIT });
  };

  // useEffect는 arguments 로 콜백함수와 배열을 넘겨준다
  // []은 dependency list 라고 하는데 위에서 handleLoad 함수가 무한루프 작동을 하기 때문에 처리를 해줘야 하는데
  // 리액트는 []  안에 있는 값들을 앞에서 기억한 값이랑 비교한다.
  // 비교해서 다른경우에만 콜백함수를 실행한다.(그 전에는 콜백함수를 등록만 해놓음)
  useEffect(() => {
    handleLoad({ order, lq: undefined, limit: LIMIT });
  }, [order]);

  return (
    <div>
      {hasNext && (
        <button disabled={isLoading} onClick={handleLoadMore}>
          더 보기
        </button>
      )}
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewForm />
      <ReviewList items={items} onDelete={handleDelete} />
      {
        // 에러가 있을 시 나타낼 요소, 텍스트들을 출력
        // 조건부 연산자
        // AND(&&) :  앞에 나오는 값이 true 이면 렌더링
        // OR(||) :  앞에 나오는 값이 false 이면 렌더링
        // falsy ==> null, NaN, 0, 빈 문자열, undefined
        // truthy ==> 이외의 모든것
        loadingError !== null ? <span>{loadingError.message}</span> : ""
        // loadingError?.message && <span>{loadingError.message}</span>
      }
    </div>
  );
}

export default App;
