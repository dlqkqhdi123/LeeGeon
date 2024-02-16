import React from "react";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";

const SentMessageList = (props) => {
  return (
    <>
      <CommonTable
        headersName={[
          "",
          "번호",
          "닉네임",
          "쪽지내용",
          "날짜"
        ]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>강자자</CommonTableColumn>
          <CommonTableColumn>애기 장난감이 너무 맘에 드는데 혹시 어디서 구매하셨나요?</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>
  
      </CommonTable>
    </>
  );
};
export default SentMessageList;
