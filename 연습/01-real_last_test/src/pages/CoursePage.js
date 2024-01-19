import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";
import Container from "../components/Container";
import styles from "./CoursePage.module.css";
import { useEffect, useState } from "react";
import { getData, updateDatas } from "../api/firebase";

function CoursePage() {
  const props = useLocation();
  // const { course } = props.state;
  const { pathname } = props;
  const [qwer, setQwer] = useState();
  const navigate = useNavigate();
  const { disease } = useParams();
  //   const props = useParams();
  //   console.log(props);

  const handleAddWishlistClick = async () => {
    const member = JSON.parse(localStorage.getItem("member"));

    if (member) {
      const result = await updateDatas("member", member.docId, qwer, {
        type: "ADD",
        fieldName: "courseList",
      });
      if (result) navigate("/wishlist");
    } else {
      alert("Login plz");
      navigate("/login", { state: pathname });
    }
  };
  const handleLoad = async () => {
    const result = await getData("qwer", "code", "==", disease);
    setQwer(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Container className={styles.content}>
          <h1 className={styles.title}>{qwer?.title}</h1>

          <p className={styles.summary}>{qwer?.summary}</p>
        </Container>
      </div>
      <Container classNames={styles.topics}>
        {qwer?.topics.map(({ topic }) => (
          <Card className={styles.topic} key={topic.slug}>
            <h3 className={styles.summary}>{topic.title}</h3>
            <p className={styles.summary}>{topic.summary}</p>
            <p className={styles.summary}>{topic.subheading}</p>
          </Card>
        ))}
      </Container>
    </>
  );
}

export default CoursePage;
