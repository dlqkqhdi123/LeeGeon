import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
// import Disease from "./components/Disease";
import About from "./pages/AboutPage";
// import Hospital from "./components/Hospital";
// import Community from "./components/Community";
// import MyPage from "./components/MyPage";
import Homepage from "./pages/Homepage";
// import LoginPage from "./components/login/LoginPage";
// import Logout from "./components/Logout";
// import Join from "./components/Join";
// import Chat from "./components/Chat";
// import Mbti from "./components/Mbti";
// import CustomerService from "./components/CustomerService";
// import TermsOfUse from "./components/TermsOfUse";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Article from "./components/Article";
// import ScrollToTop from "./components/ScrollTop";

function Main() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="About" element={<About />} />

          {/* <Route path="/disease" element={<Disease />} /> */}
          {/* <Route path="/hospital" element={<Hospital />} /> */}
          {/* <Route path="/community" element={<Community />} /> */}
          {/* <Route path="/customerservice" element={<CustomerService />} /> */}
          {/* <Route path="/mypage" element={<MyPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}
          {/* <Route path="/join" element={<Join />} /> */}
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="/mbti" element={<Mbti />} /> */}
          {/* <Route path="/termsofuse" element={<TermsOfUse />} /> */}
          {/* <Route path="/privacypolicy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="/article" element={<Article />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
