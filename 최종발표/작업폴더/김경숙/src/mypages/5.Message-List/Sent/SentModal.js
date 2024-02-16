import style from "../../Modal.module.css";
import { ReactComponent as Close } from "../../../assets/icon/icon-close_w.svg";
import styless from "../MessageModal.module.css";
import { getData } from "../../../firebase";
import { useEffect, useState } from "react";

function SentModal({ setModalOpen, messageNo }) {
  const [MessageS, setMessageS] = useState();

  const handleLoad = async () => {
    const data = await getData(
      "MyPageCustomer-MessageS",
      "no",
      "==",
      messageNo
    );
    setMessageS(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={style.modalbox} style={{ width: "70rem", height: "40rem" }}>
      <div className={style.header}>
        <h4>보낸 메세지</h4>
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
          <p>{MessageS?.content}</p>
        </from>

        <div className={style.btnbox}>
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

export default SentModal;
