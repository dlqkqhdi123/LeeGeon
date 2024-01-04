import { useLocation, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";
import styles from "./CoursePage.module.css";
import getCourseColor from "../utils/getCourseColor";

function CoursePage() {
  const { course } = useLocation().state;
  //   const props = useParams();
  //   console.log(props);

  const courseColor = getCourseColor(course?.code);
  const headerStyle = {
    borderTopColor: courseColor,
  };

  return (
    <>
      <div className={styles.header} style={headerStyle}>
        <Container className={styles.content}>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1 className={styles.title}>{course.title}</h1>
          <Button variant="round">+ 코스 담기</Button>
          <p className={styles.summary}>{course.summary}</p>
        </Container>
      </div>
      <Container classNames={styles.topics}>
        {course.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.summary}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
