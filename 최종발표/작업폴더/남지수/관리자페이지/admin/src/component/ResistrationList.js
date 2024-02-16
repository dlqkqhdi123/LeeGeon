import React from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

const ResistrationList = (props) => {
  return (
    <>
      <CommonTable
        headersName={["", "번호", "상태", "업체 구분", "업체명", "요청일자"]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>미승인</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>동물병원</CommonTableColumn>
          <CommonTableColumn>2014-01-19</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>미승인</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>동물병원</CommonTableColumn>
          <CommonTableColumn>2014-01-19</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>03</CommonTableColumn>
          <CommonTableColumn>미승인</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>동물병원</CommonTableColumn>
          <CommonTableColumn>2014-01-18</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>04</CommonTableColumn>
          <CommonTableColumn>미승인</CommonTableColumn>
          <CommonTableColumn>약국</CommonTableColumn>
          <CommonTableColumn>약국</CommonTableColumn>
          <CommonTableColumn>2014-01-18</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>05</CommonTableColumn>
          <CommonTableColumn>승인</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>동물병원</CommonTableColumn>
          <CommonTableColumn>2014-01-12</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default ResistrationList;
