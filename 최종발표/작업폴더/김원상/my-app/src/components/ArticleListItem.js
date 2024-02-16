import { useEffect, useState } from "react";
import "./ArticleListItem.css";
import likeIcon from "../assets/icon/icon-like.png";
import replyIcon from "../assets/icon/icon-reply.png";
import ArticleContent from "./ArticleContent";
import { PiUserCircleLight } from "react-icons/pi";
import { db, doc, onSnapshot } from "../api/firebase";
import Comments from "./Comments";

const ArticleListItem = ({ description, modalData, index, userData }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadTime, setUploadTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [userLoaded, setUserLoaded] = useState(false);
  const [userNickName, setUserNickName] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const storedMember = localStorage.getItem("member");

    if (storedMember) {
      const memberData = JSON.parse(storedMember);
      setUserNickName(memberData?.memberNickName || "");
    }
  }, []);

  useEffect(() => {
    if (userData) {
      console.log("userData 로딩완료", userData);
      setUserLoaded(true);
    }
  }, [userData]);

  useEffect(() => {
    if (!modalData) {
      return;
    }
    const unsubscribe = onSnapshot(
      doc(db, "likeCounts", modalData.docId),
      (snapshot) => {
        try {
          const data = snapshot.data();
          const updatedLikeCount = data ? data.likeCount || 0 : 0;
          setLikeCount(updatedLikeCount);
        } catch (error) {
          console.error("Error updating like count:", error);
        }
      }
    );

    return () => unsubscribe();
  }, [modalData]);

  useEffect(() => {
    if (modalData.userData) {
      console.log("modalData.userData 로딩 완료:", modalData.userData);
      setUserNickName(modalData.userData.memberNickName);
    }
  }, [modalData.userData]);

  useEffect(() => {
    if (modalData?.images?.[0]) {
      const base64String = modalData.images[0];
      setImageSrc(base64String);
    }

    if (modalData?.uploadTime instanceof Date) {
      setUploadTime(getTime(modalData.uploadTime));
    } else if (modalData?.uploadTime) {
      const uploadDate = new Date(modalData.uploadTime);
      if (!isNaN(uploadDate.getTime())) {
        setUploadTime(getTime(uploadDate));
      } else {
      }
    } else {
      console.log("uploadTime 안댐");
    }
  }, [modalData]);

  const handleListItemClick = (index, e) => {
    e.stopPropagation();
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div
      className={`article-body-inner-list ${index % 2 === 0 ? "even" : "odd"}`}
      onClick={(e) => handleListItemClick(index, e)}
    >
      <figure>{imageSrc && <img src={imageSrc} alt={description} />}</figure>
      {modalData && (
        <div className={`custom-info ${index % 2 === 0 ? "even" : "odd"}`}>
          <div className="modaldata-title">
            <p>{modalData.title}</p>
            <span className="likeCounts">
              <img
                className="modaldata-title-icon"
                src={likeIcon}
                alt="likeIcon"
              />
              <span className="likeCount">{likeCount}</span>
              <img
                className="modaldata-title-icon"
                src={replyIcon}
                alt="replyIcon"
              />
            </span>
          </div>
          <div className="modaldata-desc">
            <div className="modaldata-desc-wrapper">
              <div className="modaldata-desc-title">
                <span className="modaldata-profile">
                  {modalData && modalData.userData.profileImageURL ? (
                    <img
                      src={modalData.userData.profileImageURL}
                      alt="Profile"
                      className="profile"
                    />
                  ) : (
                    <PiUserCircleLight className="profile" />
                  )}
                </span>
                <div className="modaldata-nickname">
                  {modalData && userData.memberNickName}
                </div>
                <div className="modaldata-uploadtime">{uploadTime}</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <ArticleContent
          isOpen={isModalOpen}
          modalData={modalData}
          onClose={closeModal}
          uploadTime={uploadTime}
          userData={userData}
          Comments={Comments}
        />
      )}
    </div>
  );
};

export default ArticleListItem;
