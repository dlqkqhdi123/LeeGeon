import { useEffect, useRef, useState } from "react";
import restImg from "../assets/ic-reset.png";
import "./FileInput.css";
import placeholerImg from "../assets/preview-placeholder.png";

function FileInput({ name, value, onChange, initialPreview }) {
  console.log(initialPreview);
  const inputRef = useRef();
  const [preview, setPreview] = useState(initialPreview);

  const handleChange = (e) => {
    const nextFile = e.target.files[0];
    onChange(name, nextFile);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    // 값이 없을 수도 잇기 때문에 useEffect 를 종료해준다
    if (!value) return;
    // ObjectUrl 객체를 사용하여 미리보기 기능을 구현할 수 있다
    // ObjectURL을 만들면 웹 브라우저에 메모리를 할당한다 . 할당을 한 이후에는 해제를 해줘야 메모시 낭비를 방지할 수 있다.
    // useEffect 에서는 사이드 이펙트를 정리하는 기느을 제공한다
    // 리턴을 해줄 때 정리하는 함수를 리턴해주면 사이드 이펙트를 정리할 수 있다.
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    // 디펜던시 리스트 값이 바뀌면새로 콜백을 실행하는데
    // 앞에서 리턴한 정리 함수를 실행해서 사이드 이펙트를 정리한다.
    // 재렌더링이 => useEffect 콜백함수 실행 => 그 안에 잇는 return 함수 기억 => 사용자 파일 변경되면
    // => value 값 변경을인한 useEffect 함수 실행 및 콜백함수 실행 ==> 앞에서 기억해뒀던 return 함수 실행  (앞에서 만들어진 사이드 이펙트가 더이상쓸모없어졌기 때문 )
    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div className="FileInput">
      <img
        className={`FileInput-preview ${preview ? "seleted" : ""}`}
        src={preview || placeholerImg}
        alt="이미지 미리보기.."
      />
      <input
        className="FileInput-hidden-overlay"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && (
        <button className="FileInput-clear-button" onClick={handleClearClick}>
          <img src={restImg} alt="선택해제" />
        </button>
      )}
    </div>
  );
}
export default FileInput;
