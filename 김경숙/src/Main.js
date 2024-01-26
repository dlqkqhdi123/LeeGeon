import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./component/App.js";
// import MedicalList from "./mypages/코스/MedicalList.js";
// import CoursePage from './mypages/CoursePage';
import { styled } from "styled-components";

import MyPage from "./mypages/MyPage";
import SideBar from "./mypages/SideBar";
import Guardian from "./mypages/Guardian.js";
import Reservation from "./mypages/Reservation.js";
import Writing from "./mypages/Writing.js";
import Review from "./mypages/Review.js";
import Inquiry from "./mypages/Inquiry";
import SentMessage from "./mypages/SentMessage";
import MessageReceived from "./mypages/MessageReceived";
import Point from "./mypages/Point";
import MyPet from "./mypages/MyPet";
import NotFound from "./mypages/NotFound";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="courses">
            {/* <Route index element={<MedicalList />} /> */}
          </Route>

          <Route path="/404NotFound" element={<NotFound />} />

          <Route path="myPage" element={<MyPage />}>
            <Route path="guardian" element={<Guardian />} />
            <Route path="myPet" element={<MyPet />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="post1">
              <Route index element={<Writing />} /> {/* 기본 페이지로 설정 */}
              <Route path="writing" element={<Writing />} />
              <Route path="review" element={<Review />} />
              <Route path="inquiry" element={<Inquiry />} />
            </Route>
            <Route path="message1">
              <Route index element={<MessageReceived />} />
              <Route path="MessageReceived" element={<MessageReceived />} />
              <Route path="SentMessage" element={<SentMessage />} />
            </Route>
            <Route path="point" element={<Point />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
