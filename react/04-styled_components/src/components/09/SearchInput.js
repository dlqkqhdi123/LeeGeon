import styled from "styled-components";
import Input from "./Input";
import searchImg from "./search.png";

const SearchInput = styled(Input)`
  background-image: url("${searchImg}");
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: 12px 50%;
  padding-left: 40px;
`;

export default SearchInput;
