import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./MainGallery.css";
import MainCommunity from "./MainCommunity";
import { getDocumentsDescending } from "../api/firebase";

function MainGallery() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const handleLoad = async () => {
      const courseItems = await getDocumentsDescending(
        "articles",
        "uploadTime",
        3
      );
      setItems(courseItems);
    };

    handleLoad();
  }, []);

  return (
    <div className="Container-gallery">
      <div className="Gallery">
        <div className="context">
          <h3>Gallery</h3>
        </div>
        <div className="Community">
          {items.map((articles) => (
            <MainCommunity
              key={articles.title}
              articles={articles}
              memberNickName={articles.userData.memberNickName}
              uploadTime={articles.uploadTime}
            />
          ))}
        </div>
        <Link to="/community" className="StyleLink-Gallery">
          {/* 이동경로만 변경해주세요  */}
          <span className="Inner-Gallery">More</span>
        </Link>
        <div className="Gallery-img-back" />
      </div>
    </div>
  );
}
export default MainGallery;
