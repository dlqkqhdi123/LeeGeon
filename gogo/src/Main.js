import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import Disease from "./pages/Disease.js";
import Dog from "./components/Dog.js";
import Cat from "./components/Cat";
import Disease2 from "./pages/Disease2.js";
import MaPage from "./pages/MaPage.js";
import ReservationList from "./components/ReservationList.js";
import CompanyInformation from "./components/CompanyInformation.js";
import ReservationManagement from "./components/ReservationManagement.js";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path=":disease">
            <Route index element={<Disease />}></Route>
            <Route path=":code" element={<Dog />}></Route>
          </Route>
          <Route path="disease2">
            <Route index element={<Disease2 />}></Route>
            <Route path=":id" element={<Cat />}></Route>
          </Route>
          <Route path="MyPage" element={<MaPage />}>
            <Route path="Company" element={<CompanyInformation />}></Route>
            <Route path="reservationList" element={<ReservationList />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
