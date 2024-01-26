import styled from "styled-components";
import Input from "../06/Input";

const Container = styled.div`
  ${Input}
`;

function Practice3() {
  return (
    <Container>
      <h2>Size</h2>
      <Input size="small"></Input>
      <Input size="medium"></Input>
      <Input size="large"></Input>
      <h2>Round</h2>
      <Input round></Input>
      <Input round></Input>
      <Input round></Input>
      <h2>Error</h2>
      <Input $color></Input>
    </Container>
  );
}

export default Practice3;
