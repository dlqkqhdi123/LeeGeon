import { Link, Outlet } from "react-router-dom";
import HelloStyled from "./01/HelloStyled";

function App() {
  return (
    <>
      <h1>lorem</h1>
      <ul>
        <Link to="01">
          <li>1. Styled Components Basic</li>
        </Link>
        <Link to="02">
          <li>2. Nesting 문법</li>
        </Link>
        <Link to="03">
          <li>3. Practice1 문법</li>
        </Link>
        <Link to="04">
          <li>4. Practice2 문법</li>
        </Link>
        <Link to="05">
          <li>5. 다이나믹스타일링</li>
        </Link>
        <Link to="06">
          <li>6. Practice3</li>
        </Link>
        <Link to="07">
          <li>7. 스타일 재할당</li>
        </Link>
        <Link to="08">
          <li>8. 스타일 재할당</li>
        </Link>
        <Link to="09">
          <li>9. SearchInput</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
