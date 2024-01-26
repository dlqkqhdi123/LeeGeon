import ListPage from "../components/ListPage";
import styles from "./CourseListPage.module.css";
import searchBarStyles from "../components/SearchBar.module.css";
import searchIcon from "../assets/search.svg";
import { useEffect, useState } from "react";
import { getDatas } from "../api/firebase";
import Warn from "../components/Warn";
import CourseItem from "../components/CourseItem";
import Input from "../components/Input";

let listItems;

function CourseListPage() {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isInit, setIsInit] = useState(true);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchItems = listItems.filter(({ title }) =>
      title.includes(keyword)
    );
    setItems(searchItems);
  };

  const handleLoad = async () => {
    const courseItems = await getDatas("courses");
    listItems = courseItems;
    setItems(courseItems);
    setIsInit(false);
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
      <form className={searchBarStyles.form} onSubmit={handleSubmit}>
        <Input
          value={keyword}
          onChange={handleKeywordChange}
          name="Keyword"
          placeholder="검색으로 코스 찾기"
        />
        <button type="submit">
          <img src={searchIcon} alt="검색" />
        </button>
      </form>

      <p className={styles.count}>총 {items.length}개 코스</p>

      {items.length === 0 && !isInit ? (
        <Warn
          className={styles.emptyList}
          title="조건에 맞는 코스가없어요."
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요"
        ></Warn>
      ) : (
        <div className={styles.courseList}>
          {items.map((course) => (
            <CourseItem key={course.docId} course={course} />
          ))}
        </div>
      )}
    </ListPage>
  );
}

export default CourseListPage;
