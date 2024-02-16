import Button from "../../component/Button";
import styles from "../MyPage.module.css";
import Profile from "./Profile";
import FileInput from "./FileInput";
import SlideList from "./SlideList";
import style from "./MyPet.module.css";

function MyPet() {
  return (
    <div className={style.container2}>
      <div className={style.containerBox2}>
        <h1 className={styles.h1}>마이펫 관리</h1>

        <SlideList />
      </div>

      <div className={style.line} />
      
      <div className={style.containerBox2}>
        <div className={style.profil}>
          <div className={style.album}>
            <form className={style.poto}>

              <FileInput />              
              
            </form>
          </div>

          <Profile />

          <div className={styles.retouch}>
            <Button type="submit" className={styles.correction}>
              등록하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPet;
