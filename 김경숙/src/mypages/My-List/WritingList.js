import React from "react";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";

const WritingList = (props) => {
  return (
    <>
      <CommonTable
        headersName={[
          "",
          "번호",
          "제목",
          "작성글",
          "작성일"
        ]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>저희 집 주인 땡이를 소개합니다!</CommonTableColumn>
          <CommonTableColumn>갤러리</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>가다랑어 츄르 나눔 해요!</CommonTableColumn>
          <CommonTableColumn>나눔분양</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default WritingList;
