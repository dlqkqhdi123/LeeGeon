import React, { useEffect, useState } from "react";
import { collection, db, getData, getDocs } from "../api/firebase";
import { useParams } from "react-router-dom";

function Cat() {
  const [items, setItems] = useState();
  const { id } = useParams();

  const handleLoad = async () => {
    const result = await getData("Cat", "id", "==", id);
    setItems(result);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  console.log(items);

  useEffect(() => {
    const fetchData = async () => {
      const query = await getDocs(collection(db, "Cat"));
      const data = query.docs.map((doc) => doc.data());
      // 여기서 추가적인 로직을 구현합니다.
      // 예를 들어, 데이터를 가공하거나 상태를 업데이트하는 등의 작업을 수행할 수 있습니다.
    };

    fetchData();
  }, [items]);

  return (
    <div>
      <div>
        <header>
          <h1>{items?.title}</h1>
        </header>
        {items ? (
          <div>
            <ul>
              {items.topics.map(({ topic }) => (
                <li key={topic.code}>
                  <h1>{topic.title}</h1>
                  <p>{topic.subheading}</p>
                  <p>{topic.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Cat;
