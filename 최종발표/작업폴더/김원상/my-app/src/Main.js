import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import Hospital from "./components/Hospital";
import Community from "./components/Community";
import MyPage from "./components/MyPage";
import LoginPage from "./components/login/LoginPage";
import Logout from "./components/Logout";
import Join from "./components/Join";
import CustomerService from "./components/CustomerService";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Article from "./components/Article";
import ScrollToTop from "./components/ScrollTop";
import Home from "./components/home/home";
import Petbti from "./components/petbti/petbti";
import Petbti2 from "./components/petbti/petbti2";
import Options from "./components/options/option";
import Options2 from "./components/options/option2";
import ChoiceAccount from "./components/Account/ChoiceAccount";
import FindId from "./components/login/FindId";
import Terms from "./components/Account/Terms";
import SignUp from "./components/Account/SocialName";
import FindPass from "./components/login/FindPass";
import Disease from "./pages/Disease";
import Dog from "./components/disease/Dog";
import Disease2 from "./pages/Disease2";
import Cat from "./components/disease/Cat";

function Main() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/hospital" element={<Hospital />} />

          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/join" element={<Join />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/article" element={<Article />} />
          <Route path="/Account/ChoiceAccount" element={<ChoiceAccount />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/findPass" element={<FindPass />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/disease/:code" element={<Dog />} />
          <Route path="/disease2" element={<Disease2 />} />
          <Route path="/disease2/:id" element={<Cat />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/mbti/*" element={<Home />} />{" "}
        <Route path="petBTI" element={<Options />} />
        <Route path="petBTI2" element={<Options2 />} />
        <Route path="result/:petbtiName" element={<Petbti />} />
        <Route path="result2/:petbtiName" element={<Petbti2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
