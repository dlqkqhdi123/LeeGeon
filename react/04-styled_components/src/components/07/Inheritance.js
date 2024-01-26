import styled from "styled-components";
import Button from "./Button";
import TermsOfSerbice from "./TermsOfSerbice";

const StyledTermsOfService = styled(TermsOfSerbice)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;

const SubmitButton = styled(Button)`
  background-color: #de117d;
  display: block;
  width: 200px;
  margin: 0 auto;
  &:hover {
    background-color: #f5070f;
  }
`;

function Inheritance() {
  return (
    <div>
      <StyledTermsOfService />
      <SubmitButton>계속하기</SubmitButton>
    </div>
  );
}

export default Inheritance;
