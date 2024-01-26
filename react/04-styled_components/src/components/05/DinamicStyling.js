import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  ${Button} {
    margin: 10px;
  }
`;

// HTML태그의 속성들은 표준속성과 비표준속성으로 나눠진다.

function DinamicStyling() {
  return (
    <Container>
      <h1>기본 버튼</h1>
      <Button size="small">small</Button>
      <Button size="medium">medium</Button>
      <Button size="large">large</Button>
      <h1>둥근 버튼</h1>
      <Button size="small" $round color="red">
        round small
      </Button>
      <Button size="medium" $round color="blue">
        round medium
      </Button>
      <Button size="large" $round color="yellow">
        round large
      </Button>
    </Container>
  );
}

export default DinamicStyling;
