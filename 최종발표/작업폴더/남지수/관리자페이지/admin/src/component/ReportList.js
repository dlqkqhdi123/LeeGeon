import React from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

const ReportList = (props) => {
  return (
    <>
      <CommonTable
        headersName={["", "번호", "구분", "이름", "아이디", "신고일자"]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>명예훼손</CommonTableColumn>
          <CommonTableColumn>이건</CommonTableColumn>
          <CommonTableColumn>leegun11</CommonTableColumn>
          <CommonTableColumn>2024-01-20</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>허위사실유포</CommonTableColumn>
          <CommonTableColumn>김육포</CommonTableColumn>
          <CommonTableColumn>faker77</CommonTableColumn>
          <CommonTableColumn>2024-01-20</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default ReportList;
