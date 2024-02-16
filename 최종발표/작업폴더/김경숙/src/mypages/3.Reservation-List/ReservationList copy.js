import React, { useEffect, useState } from "react";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import { postList } from "./Data";
import Overlay from "../Overlay";
import ReservationModal from "./ReservationModal";

const ReservationList = (props) => {
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
      <CommonTable
        headersName={[
          "",
          "번호",
          "예약번호",
          "상태",
          "펫이름",
          "병원",
          "예약일자",
        ]}
      >
        {dataList
          ? dataList.map((item, index) => {
              return (
        <CommonTableRow key={index}>
          <CommonTableColumn>
            <input type={item.checkbox} />
          </CommonTableColumn>
          <CommonTableColumn>{item.no}</CommonTableColumn>
          <CommonTableColumn>{item.reservationNumber}</CommonTableColumn>
          <CommonTableColumn>{item.condition}</CommonTableColumn>
          <CommonTableColumn>
          <p
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    >
                      {item.petName}
                    </p></CommonTableColumn>
          <CommonTableColumn>{item.hospital}</CommonTableColumn>
          <CommonTableColumn>{item.reservationDate}</CommonTableColumn>
        </CommonTableRow>
        );
      })
    : ""}
      </CommonTable>
      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <ReservationModal setModalOpen={setModalOpen} />}
    </>
  );
};
export default ReservationList;
