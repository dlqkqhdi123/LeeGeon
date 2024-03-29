import style from "../../Modal.module.css";
import { ReactComponent as Close } from "../../../assets/icon/icon-close_w.svg";
import { ReactComponent as Like } from "../../../assets/icon/icon-like.svg";
import { ReactComponent as Reply } from "../../../assets/icon/icon-reply.svg";
import styless from "./WritingModal.module.css";
import PotoSlide from "./PotoSlide";
import { useEffect, useState } from "react";
import Overlay from "../../Overlay";
import CorrectionModal from "./CorrectionModal";
import { getData } from "../../../firebase";



function WritingModal({ setModalOpen, messageNo }) {
  const [PostingW, setPostingW] = useState();
  let [modalInOpen, setModalInOpen] = useState(false);  

  useEffect(() => {
    if (modalInOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalInOpen]);

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-PostingW",
      "no",
      "==",
      messageNo
    );
    setPostingW(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={style.modalbox} style={{ width: "70rem", height: "45rem" }}>
      <div className={style.header}>
        <h4>내가 쓴 글</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>

      <div className={styless.writingbody}>
        <div className={styless.potoSlide}>
          <PotoSlide />
        </div>

        <div className={styless.post}>
          <from className={styless.wordtext}>
            <div className={styless.head}>
              <figure className={styless.figure}></figure>
              <p style={{ fontSize: "15px" }}>
                <strong>{PostingW?.witer}</strong>
              </p>
              <div className={styless.ico}>
                <Like className={styless.icon} />
                <p>7</p>
              </div>
              <div className={styless.ico}>
                <Reply className={styless.icon} />
                <p>3</p>
              </div>
            </div>

            <div className={styless.wordBox}>
              <div className={styless.wordTitle}>
                <p className={styless.title_p}>{PostingW?.title}</p>
                <span className={styless.date}>{PostingW?.createDate}</span>
              </div>
              <p className={styless.word_p}>
              {PostingW?.content}
              </p>
            </div>

            <div className={styless.next}>
              <figure className={styless.figure}></figure>
              <div>
                <p>
                  <strong>강자자</strong>
                </p>
                <p>저 나눔 받고 싶어요!</p>
              </div>
              <span className={styless.date}>2024-01-12</span>
            </div>
          </from>

          <div className={style.btnbox}>
            <button
              className={style.button2}
              type="submit"
              style={{ width: "13rem" }}
              onClick={() => {
                setModalInOpen(true);
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
      {modalInOpen && <Overlay modalOpen={modalInOpen} />}
      {modalInOpen && <CorrectionModal setModalInOpen={setModalInOpen} messageNo={messageNo}/>}
    </div>
  );
}

export default WritingModal;
