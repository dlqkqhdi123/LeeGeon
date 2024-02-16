import React from "react";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";

const ReservationList = (props) => {
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
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>00-000-000</CommonTableColumn>
          <CommonTableColumn>예약완료</CommonTableColumn>
          <CommonTableColumn>댕댕이</CommonTableColumn>
          <CommonTableColumn>동의보감 병원</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>00-000-000</CommonTableColumn>
          <CommonTableColumn>예약중</CommonTableColumn>
          <CommonTableColumn>냥냥이</CommonTableColumn>
          <CommonTableColumn>한 병원</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default ReservationList;
