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
          <li>3. Practice2 문법</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
