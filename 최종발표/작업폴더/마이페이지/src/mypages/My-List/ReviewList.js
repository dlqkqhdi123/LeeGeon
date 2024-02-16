import React from "react";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";

const ReviewList = (props) => {
  return (
    <>
      <CommonTable
        headersName={[
          "",
          "번호",
          "업체명",
          "후기 제목",
          "날짜"
        ]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>001</CommonTableColumn>
          <CommonTableColumn>동의보감 동물병원</CommonTableColumn>
          <CommonTableColumn>좋습니다. 친절합니다. 설명잘합니다. 진료 좋습니다. 시설이 깨끗합니다.</CommonTableColumn>
          <CommonTableColumn>2014-01-16</CommonTableColumn>
        </CommonTableRow>
 
      </CommonTable>
    </>
  );
};
export default ReviewList;
