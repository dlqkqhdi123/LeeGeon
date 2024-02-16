import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./component/App.js";
// import MedicalList from "./mypages/코스/MedicalList.js";
import { styled } from "styled-components";

import MyPage from "./mypages/MyPage";
import SideBar from "./mypages/SideBar";
import Guardian from "./mypages/1.Guardian-List/Guardian.js";
import MyPet from "./mypages/2.MyPet-List/MyPet";
import Reservation from "./mypages/3.Reservation-List/Reservation.js";
import Writing from "./mypages/4.Posting-List/Writing/Writing.js";
import Review from "./mypages/4.Posting-List/Review/Review.js";
import Inquiry from "./mypages/4.Posting-List/Inquiry";
import SentMessage from "./mypages/5.Message-List/Sent/SentMessage";
import MessageReceived from "./mypages/5.Message-List/Received/MessageReceived";
import Point from "./mypages/6.Point-List/Point";

import NotFoundCat from "./notfoundpage/NotFoundCat";
import NotFoundDog from "./notfoundpage/NotFoundDog";
import LoginPage from "./component/login/LoginPage.js";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/404NotFound-Cat" element={<NotFoundCat />} />
          <Route path="/404NotFound-Dog" element={<NotFoundDog />} />

          <Route path="myPage" element={<MyPage />}>
            {/* <SideBar /> */}
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
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
