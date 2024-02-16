import React from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

const CompanyList = (props) => {
  return (
    <>
      <CommonTable
        headersName={["", "번호", "구분", "업체명", "아이디", "게시일자"]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>이빨튼튼동물병원</CommonTableColumn>
          <CommonTableColumn>teeth22</CommonTableColumn>
          <CommonTableColumn>2024-01-19</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>약국</CommonTableColumn>
          <CommonTableColumn>건강 약국</CommonTableColumn>
          <CommonTableColumn>gungang11</CommonTableColumn>
          <CommonTableColumn>2024-01-19</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>03</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>동물종합병원</CommonTableColumn>
          <CommonTableColumn>jonghab33</CommonTableColumn>
          <CommonTableColumn>2024-01-18</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>04</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>두근동물병원</CommonTableColumn>
          <CommonTableColumn>doogeun44</CommonTableColumn>
          <CommonTableColumn>2024-01-17</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>05</CommonTableColumn>
          <CommonTableColumn>병원</CommonTableColumn>
          <CommonTableColumn>동물 외상센터</CommonTableColumn>
          <CommonTableColumn>whysang55</CommonTableColumn>
          <CommonTableColumn>2024-01-15</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>06</CommonTableColumn>
          <CommonTableColumn>약국</CommonTableColumn>
          <CommonTableColumn>구룡 약국</CommonTableColumn>
          <CommonTableColumn>ninedragon66</CommonTableColumn>
          <CommonTableColumn>2024-01-15</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default CompanyList;
