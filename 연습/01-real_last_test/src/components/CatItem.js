import ListPage from "../components/ListPage";
import styles from "./CatItem.module.css";
import { useEffect, useState } from "react";
import { getDatas } from "../api/firebase";
import Warn from "../components/Warn";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import CatCouseItem from "./CatCouseItem";

function CatItem() {
  const [items, setItems] = useState([]);
  const [isInit, setIsInit] = useState(true);

  const handleLoad = async () => {
    const courseItems = await getDatas("Cat");
    setItems(courseItems);
    setIsInit(false);
  };
  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <div>
      <ListPage
        variant="catalog"
        title="질병 관리 본부"
        description="아프면 병원을 가세요"
      >
        <div classNames={styles.button}>
          <Link to="/disease">
            <Button classNames={styles.button}>개</Button>
          </Link>
          <Link to="/CatItem">
            <Button classNames={styles.button}>고양</Button>
          </Link>
        </div>

        <p className={styles.count}>총 {items.length}개 코스</p>

        {items.length === 0 && !isInit ? (
          <Warn></Warn>
        ) : (
          <div className={styles.courseList}>
            {items.map((Cat) => (
              <CatCouseItem key={Cat.code} Cat={Cat} />
            ))}
          </div>
        )}
      </ListPage>
    </div>
  );
}

export default CatItem;
