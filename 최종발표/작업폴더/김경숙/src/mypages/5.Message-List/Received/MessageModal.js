import style from "../../Modal.module.css";
import { ReactComponent as Close } from "../../../assets/icon/icon-close_w.svg";
import styless from "../MessageModal.module.css";
import { getData } from "../../../firebase";
import { useEffect, useState } from "react";

function MessageModal({ setModalOpen, messageNo }) {
  const [MessageR, setMessageR] = useState();

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-MessageR",
      "no",
      "==",
      messageNo
    );
    setMessageR(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={style.modalbox} style={{ width: "70rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>받은 메세지</h4>
        <button
          className={style.closebtn}
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <Close />
        </button>
      </div>
      <div className={styless.Messagebody}>
      <from className={styless.mms}>
        <p>{MessageR?.content}</p>
      </from>

      <div className={style.btnbox}>
        <button
          className={style.button2}
          type="submit"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          신고하기
        </button>
        <button
          className={style.button2}
          type="submit"
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

export default MessageModal;
