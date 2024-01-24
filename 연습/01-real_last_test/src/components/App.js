import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./Footer";
import "./App.font.css";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default App;
