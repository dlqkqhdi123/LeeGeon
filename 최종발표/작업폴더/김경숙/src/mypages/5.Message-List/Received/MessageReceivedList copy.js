import React, { useEffect, useState } from "react";
import CommonTable from "../../table/CommonTable";
import CommonTableColumn from "../../table/CommonTableColumn";
import CommonTableRow from "../../table/CommonTableRow";
import { postList } from "./Data";
import Overlay from "../../Overlay";
import MessageModal from "./MessageModal";

const MessageReceivedList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  // ///////////////////
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
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>
                    <input type={item.checkbox} />
                  </CommonTableColumn>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.witer}</CommonTableColumn>
                  <CommonTableColumn>
                    <p
                      onClick={() => {
                        setModalOpen(true);
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
      {modalOpen && <MessageModal setModalOpen={setModalOpen} />}
    </>
  );
};
export default MessageReceivedList;
