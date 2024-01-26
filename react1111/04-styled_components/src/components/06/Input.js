import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  border: 1px solid ${({ $color }) => ($color ? `red` : `#222`)};
  font-size: ${({ size }) => SIZES[size] ?? SIZES[`medium`]}px;
  padding: 16px;
  /* display: block; */
  margin: 5px;
  border-radius: ${({ round }) => (round ? `9999px` : `3px`)};
  outline: none;
  &:focus {
    border-color: ${({ $color }) => ($color ? `red` : `yellow`)};
  }
`;

export default Input;
