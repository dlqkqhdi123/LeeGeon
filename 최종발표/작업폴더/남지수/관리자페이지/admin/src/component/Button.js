import styled from "styled-components";
// import styles from "./Button.module.css";
// import classNames from "classnames";

const Button = styled.button`
  // padding: 10px 50px;
  width: 10rem;
  height: 3.5rem;
  border: 2px solid #ffc26f;
  color: #ffc26f;
  background-color: #f8ebd8;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4.5rem 0;

  &:hover,
  &:active {
    background-color: #ffc26f;
    color: #ffffff;
  }
`;

export default Button;
