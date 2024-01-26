import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #111;
  padding: 16px;
  display: flex;

  &:focus {
    border: 3px solid blue;
    /* border-color: ; */
  }
`;

export default Input;
