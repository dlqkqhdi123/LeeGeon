import style from "../../Modal.module.css";
import { ReactComponent as Close } from "../../../assets/icon/icon-close_ff9b50.svg";
import styless from "./ReviewModal.module.css";
import { useEffect, useState } from "react";
import PictureSlide from "./PictureSlide";
import CheckStars from "./CheckStars";
import { getData } from "../../../firebase";

const INITIAL_VALUES = {
  rating: 0,
  content: "",
};

function ReviewModal({
  setModalOpen,
  initialValues = INITIAL_VALUES,
  messageNo,
}) {
  const [values, setValues] = useState(initialValues);
  const [PostingR, setPostingR] = useState();

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const [ratingNum, setRatingNum] = useState(0);
  const updateRatingNum = () => {
    const ratingNum = values.rating * 1;
    setRatingNum(ratingNum.toFixed(1));
  };

  useEffect(() => {
    updateRatingNum();
  }, [values.rating]);

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-PostingR",
      "no",
      "==",
      messageNo
    );
    setPostingR(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={style.modalbox} style={{ width: "60rem", height: "50rem" }}>
      <div className={styless.ReviewModalheader}>
        <h4>내가 쓴 후기</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>

      <div className={styless.ReviewModalbody}>
        <div className={styless.StarRating}>
          <CheckStars
            type="number"
            name="rating"
            value={values.rating}
            onChange={handleChange}
          />
          <div className={styless.score}>
            <div className={styless.totalScore}>총 점</div>
            <h4 className={styless.num}>{ratingNum}점</h4>
          </div>
        </div>

        <div className={styless.Comment}>
          {/* <input className={styless.note}></input>                         */}
          <p className={styless.note}>
            {PostingR?.content}
          </p>
        </div>

        <div className={styless.CommentPoto}>
          <p className={styless.picture}>후기사진 추가</p>

          <PictureSlide />
        </div>

        <div className={style.btnbox}>
          <button
            className={style.button2}
            type="submit"
            style={{ width: "13rem" }}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            수정하기
          </button>
          <button
            className={style.button2}
            type="submit"
            style={{ width: "13rem" }}
            onClick={() => {
              setModalOpen(false);
            }}
          >
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
