import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../api/firebase";

function DogItem({ topic }) {
  const [qwer, setQwer] = useState();
  const { qwerCode } = useParams();

  console.log(qwerCode);

  const handleLoad = async () => {
    const result = await getData("qwer", "code", "==", qwerCode);
    setQwer(result);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div>
        <h2>gkskenftpt</h2>
        <div key={topic.code}>
          <h3>{topic.title}</h3>
          <p>{topic.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default DogItem;
