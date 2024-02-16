import React, { useEffect, useState } from "react";
import CommonTable from "../table/CommonTable";
import CommonTableColumn from "../table/CommonTableColumn";
import CommonTableRow from "../table/CommonTableRow";
import Overlay from "../Overlay";
import ReservationModal from "./ReservationModal";
import { firestore } from "../../firebase";

const ReservationList = (props) => {
  // //////파이어베이스///////////
  const [Reserv, setReserv] = useState([]);
  const [messageNo, setMessageNo] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const ReservData = await firestore
        .collection("MyPageCustomer-Reservation")
        .get();
      const dataList = ReservData.docs.map((doc) => doc.data());
      setReserv(dataList);
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
        {Reserv
          ? Reserv.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>
                    <input type={item.checkbox} />
                  </CommonTableColumn>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>
                    {item.reservationNumber}
                  </CommonTableColumn>
                  <CommonTableColumn>{item.condition}</CommonTableColumn>
                  <CommonTableColumn>
                    <p
                      onClick={() => {
                        setModalOpen(true);
                        setMessageNo(item.no);  
                      }}
                    >
                      {item.petName}
                    </p>
                  </CommonTableColumn>
                  <CommonTableColumn>{item.hospital}</CommonTableColumn>
                  <CommonTableColumn>{item.reservationDate}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
      {modalOpen && <Overlay modalOpen={modalOpen} />}
      {modalOpen && <ReservationModal setModalOpen={setModalOpen} messageNo={messageNo}/>}
    </>
  );
};
export default ReservationList;
