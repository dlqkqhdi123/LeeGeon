import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Petbti from "../src/components/petbti/petbti";
import Petbti2 from "../src/components/petbti/petbti2";
// import PetbtiStyle from "./common/css/PetbtiStyle";
import Options from "./components/options/option";
import Options2 from "./components/options/option2";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/petBTI" element={<Options />} />
        <Route exact path="/petBTI2" element={<Options2 />} />
        <Route path="/result/:petbtiName" element={<Petbti />} />
        <Route path="/result2/:petbtiName" element={<Petbti2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
