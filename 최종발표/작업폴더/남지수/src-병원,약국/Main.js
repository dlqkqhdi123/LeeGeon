import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HospitalListPage from "./pages/HospitalListPage";
import HospitalPage from "./pages/HospitalPage";
import PharmacyListPage from "./pages/PharmacyListPage";
import PharmacyPage from "./pages/PharmacyPage";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="hospital">
            <Route index element={<HospitalListPage />} />
            <Route path=":hospitalTitle" element={<HospitalPage />} />
          </Route>
          <Route path="pharmacy">
            <Route index element={<PharmacyListPage />} />
            <Route path=":pharmacyTitle" element={<PharmacyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
