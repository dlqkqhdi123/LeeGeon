import React from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

const IndividualList = (props) => {
  return (
    <>
      <CommonTable headersName={["", "번호", "이름", "아이디", "가입일자"]}>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>이건</CommonTableColumn>
          <CommonTableColumn>leegun11</CommonTableColumn>
          <CommonTableColumn>2024-01-19</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>02</CommonTableColumn>
          <CommonTableColumn>이주형</CommonTableColumn>
          <CommonTableColumn>joohyung123</CommonTableColumn>
          <CommonTableColumn>2024-01-19</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>03</CommonTableColumn>
          <CommonTableColumn>박진현</CommonTableColumn>
          <CommonTableColumn>jinhyun123</CommonTableColumn>
          <CommonTableColumn>2024-01-18</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>04</CommonTableColumn>
          <CommonTableColumn>조에스더</CommonTableColumn>
          <CommonTableColumn>esther123</CommonTableColumn>
          <CommonTableColumn>2024-01-18</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>05</CommonTableColumn>
          <CommonTableColumn>강지은</CommonTableColumn>
          <CommonTableColumn>jieun123</CommonTableColumn>
          <CommonTableColumn>2024-01-17</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>06</CommonTableColumn>
          <CommonTableColumn>김원상</CommonTableColumn>
          <CommonTableColumn>wonsang123</CommonTableColumn>
          <CommonTableColumn>2024-01-16</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default IndividualList;
