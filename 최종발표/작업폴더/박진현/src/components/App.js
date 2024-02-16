import { useCallback, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import AuthContext from "./Account/AuthContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    setIsLogin(true);
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
    navigate("/");
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ isLogin, handleLogin, logout }}>
      <Nav />
      <div>
        <Outlet setIsLogin={setIsLogin} />
      </div>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
