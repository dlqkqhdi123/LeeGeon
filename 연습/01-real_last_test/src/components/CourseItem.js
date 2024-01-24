import Card from "./Card";

import styles from "./CourseItem.module.css";
import { Link } from "react-router-dom";

function CourseItem({ qwer }) {
  return (
    <Card>
      <div></div>
      <div>
        <h2>
          <Link to={`/disease/${qwer.code}`}>
            {qwer.title}
            <h1>사진</h1>
          </Link>
        </h2>
        <p>{qwer.summary}</p>
        <div></div>
      </div>
    </Card>
  );
}

export default CourseItem;
