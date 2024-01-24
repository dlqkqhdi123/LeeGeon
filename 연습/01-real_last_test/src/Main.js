import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import CourseListPage from "./pages/CourseListPage";
import QuestionListPage from "./pages/QuestionListPage";
// import CoursePage from "./pages/CoursePage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import WishlistPage from "./pages/WishlistPage";
import Dog from "./pages/Dog";
import DogItem from "./pages/DogItem";
import CatItem from "./components/CatItem";
import CatCouseItem from "./components/CatCouseItem";
import Cat from "./pages/Cat";
import Input from "./components/Input";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="disease">
            <Route index element={<CourseListPage />}></Route>
            <Route path=":code" element={<Dog />}></Route>
          </Route>
          <Route path="catItem">
            <Route index element={<CatItem />}></Route>
            <Route path=":id" element={<Cat />}></Route>
          </Route>
          {/* <Route path=":disease"></Route> */}
          <Route path=":code" element={<DogItem />} />
          <Route path="questions">
            <Route index element={<QuestionListPage />}>
              {/* <Route path="" element={<CourseListPage}>
            </Route> */}
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
