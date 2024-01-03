import { useLocation, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Container from "../components/Container";
import CourseIcon from "../components/CourseIcon";

function CoursePage() {
  const { course } = useLocation().state;
  //   const props = useParams();
  //   console.log(props);

  return (
    <>
      <div>
        <Container>
          <CourseIcon photoUrl={course.photoUrl} />
          <h1>{course.title}</h1>
          <Button variant="round">+ 코스 담기</Button>
          <p>{course.summary}</p>
        </Container>
      </div>
      <Container>
        {course.topics.map(({ topic }) => (
          <Card key={topic.slug}>
            <h3>{topic.title}</h3>
            <p>{topic.summary}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
