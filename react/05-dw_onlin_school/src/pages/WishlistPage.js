import { useEffect, useState } from "react";
import styles from "./WishlistPage.module.css";
import CourseItem from "../components/CourseItem";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Warn from "../components/Warn";
import Container from "../components/Container";
import closeButton from "../assets/closeButton.svg";
import { getData, updateDatas } from "../api/firebase";

function WishlistPage() {
  const [courses, setCourses] = useState([]);
  const member = JSON.parse(localStorage.getItem("member"));

  const handleDelete = async (course) => {
    const result = await updateDatas("member", member.docId, course, {
      type: "DELETE",
      fieldName: "courseList",
    });
    handleLoad();
  };

  const handleLoad = async () => {
    const result = await getData("member", "id", "==", member.id);
    setCourses(result.courseList);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <Container className={styles.container}>
      <h1 className={styles.title}>나의 위시리스트</h1>
      {courses.length === 0 ? (
        <>
          <Warn
            className={styles.emptyList}
            title="담아 놓은 코스가 없어요."
            description="카탈로그에서 나에게 필요한 코스를 찾아보세요."
          />
          <div className={styles.link}>
            <Link to="/courses">
              <Button as="div">코스 찾아보기</Button>
            </Link>
          </div>
        </>
      ) : (
        <ul className={styles.items}>
          {courses.map((course) => (
            <li key={course.slug} className={styles.item}>
              <CourseItem course={course} />
              <img
                className={styles.delete}
                src={closeButton}
                alt="닫기"
                onClick={() => handleDelete(course)}
              />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default WishlistPage;
