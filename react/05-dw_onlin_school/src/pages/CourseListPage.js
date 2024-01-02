import ListPage from "../components/ListPage";
import styles from "./CourseListPage.module.css";
import searchBarStyles from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { useEffect } from "react";
import { getDatas } from "../api/firebase";

function CourseListPage() {
  const handleLoad = async () => {
    const items = await getDatas("courses");
    console.log(items);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <ListPage
      variant="catalog"
      title="모든 코스"
      description="자체 제작된 코스들로 기초를 쌓으세요"
    >
      <form className={searchBarStyles.form}>
        <input name="Keyword" placeholder="검색으로 코스 찾기" />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>
      <p className={styles.count}>총 25개 코스</p>

      <div className={styles.courseList}></div>
    </ListPage>
  );
}

export default CourseListPage;
