import React from "react";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";

const MessageReceivedList = (props) => {
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
          <CommonTableColumn>001</CommonTableColumn>
          <CommonTableColumn>강자자</CommonTableColumn>
          <CommonTableColumn>가다랑어포 무료나눔 하시는 글 보고 연락드립니다.</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>002</CommonTableColumn>
          <CommonTableColumn>한우축제</CommonTableColumn>
          <CommonTableColumn>혹시 가다랑어포 소도 먹을 수 있을까요?</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default MessageReceivedList;
