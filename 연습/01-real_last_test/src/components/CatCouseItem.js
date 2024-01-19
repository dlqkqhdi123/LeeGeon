import Card from "./Card";

import { Link } from "react-router-dom";

function CatCouseItem({ Cat }) {
  return (
    <Card>
      <div></div>
      <div>
        <h2>
          <Link to={`/CatItem/${Cat.code}`}>
            {Cat.title}
            <h1>사진</h1>
          </Link>
        </h2>
        <p>{Cat.summary}</p>
        <div></div>
      </div>
    </Card>
  );
}

export default CatCouseItem;
