import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element></Route>
          <Route path="couse">
            <Route></Route>
          </Route>
          <Route path=":questionDd">
            <Route></Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
