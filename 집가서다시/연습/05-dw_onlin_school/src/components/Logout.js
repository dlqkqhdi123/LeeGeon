import { Navigate } from "react-router-dom";

function Logout() {
  localStorage.removeItem("member");

  return <Navigate to="/" />;
}

export default Logout;
