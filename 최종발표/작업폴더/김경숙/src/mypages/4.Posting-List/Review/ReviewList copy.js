import React, { useEffect, useState } from "react";
import CommonTable from "../../table/CommonTable";
import CommonTableColumn from "../../table/CommonTableColumn";
import CommonTableRow from "../../table/CommonTableRow";
import { postList } from "./Data";
import Overlay from "../../Overlay";
import ReviewModal from "./ReviewModal";

const ReviewList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  let [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <>
      <CommonTable headersName={["", "번호", "업체명", "후기 제목", "날짜"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>
                    <input type={item.checkbox} />
                  </CommonTableColumn>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.company}</CommonTableColumn>
                  <CommonTableColumn>
                    {" "}
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
      {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
    </>
  );
};
export default ReviewList;
