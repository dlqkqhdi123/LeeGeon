import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./component/App.js";
// import CoursePage from './mypages/CoursePage';
import NotFound from "./pages/NotFound";
import Post from "./pages/Post.js";
import Resistration from "./pages/Resistration.js";
import Company from "./pages/Company.js";
import Individual from "./pages/Individual";
import Report from "./pages/Report";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/404NotFound" element={<NotFound />} />
          <Route path="adminPage">
            <Route index element={<Post />} />
            <Route path="post" element={<Post />} />
            <Route path="resistration" element={<Resistration />} />
            <Route path="member">
              <Route index element={<Individual />} />
              {/* 기본 페이지로 설정 */}
              <Route path="individual" element={<Individual />} />
              <Route path="company" element={<Company />} />
              <Route path="report" element={<Report />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
