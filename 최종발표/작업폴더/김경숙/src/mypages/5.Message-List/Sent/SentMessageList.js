import React, { useEffect, useState } from "react";
import CommonTable from "../../table/CommonTable";
import CommonTableColumn from "../../table/CommonTableColumn";
import CommonTableRow from "../../table/CommonTableRow";
import Overlay from "../../Overlay";
import SentModal from "./SentModal";
import { firestore } from "../../../firebase";

const SentMessageList = (props) => {
  // //////파이어베이스///////////
  const [MessageS, setMessageS] = useState([]);
  const [messageNo, setMessageNo] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const MessageSData = await firestore
        .collection("MyPageCustomer-MessageS")
        .get();
      const dataList = MessageSData.docs.map((doc) => doc.data());
      setMessageS(dataList);
    };

    fetchData();
  }, []); 

  // ////////모달///////////
  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  // ///////////////

  return (
    <>
      <CommonTable headersName={["", "번호", "닉네임", "쪽지내용", "날짜"]}>
        {MessageS
          ? MessageS.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>
                    <input
                      type={item.checkbox}
                    />
                  </CommonTableColumn>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.witer}</CommonTableColumn>
                  <CommonTableColumn>
                    <p
                      onClick={() => {
                        setModalOpen(true);
                        setMessageNo(item.no);  
                      }}
                    >
                      {item.title}
                    </p>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>

      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <SentModal setModalOpen={setModalOpen} messageNo={messageNo}/>}
    </>
  );
};
export default SentMessageList;
