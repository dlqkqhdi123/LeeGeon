import React, { useEffect, useState } from "react";
import iconClose from "../assets/icon/icon-close_ff9b50.png";
import chevronLeftIcon from "../assets/icon/chevron_left_ff9b50.png";
import chevronRightIcon from "../assets/icon/chevron_right_ff9b50.png";
import { PiUserCircleLight } from "react-icons/pi";
import likeIcon from "../assets/icon/icon-like.png";
import replyIcon from "../assets/icon/icon-reply.png";
import "./ArticleContent.css";
import {
  db,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
} from "../api/firebase";
import { useFetchUserInfo } from "../contexts/MemberContext";
import Comments from "./Comments";
import CommentButton from "./CommentButton";

const ArticleContent = ({
  isOpen,
  uploadImages,
  onSendData,
  onClose,
  modalData,
  uploadTime,
  userData,
  Comments,
}) => {
  const [images, setImages] = useState([]);
  const [showChevron, setShowChevron] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const [comments, setComments] = useState([]);

  const fetchUserInfo = useFetchUserInfo();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchUserData = await fetchUserInfo();
        setUserDataLoaded(true);
      } catch (error) {
        // console.error("Error fetching user info:", error);
      }
    };
    if (modalData && modalData.docId) {
      fetchUserData();
    }
  }, [modalData]);

  useEffect(() => {
    if (isOpen) {
      setImages([]);
      setCurrentIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const newShowChevron =
      images.length > 1 || (modalData.images && modalData.images.length > 1);
    setShowChevron(newShowChevron);
  }, [images.length, modalData.images]);

  useEffect(() => {
    if (modalData && modalData.docId) {
      const unsubscribe = onSnapshot(
        doc(db, "likeCounts", modalData.docId),
        (snapshot) => {
          const updatedLikeCount = snapshot.data()?.likeCount || 0;
          setLikeCount(updatedLikeCount);
        }
      );

      return () => unsubscribe();
    }
  }, [modalData && modalData.docId]);

  const handleLikeClick = () => {
    if (modalData && modalData.docId) {
      const updateLikeCount = async (newLikeCount) => {
        try {
          const articleDocRef = doc(db, "likeCounts", modalData.docId);
          const docSnapshot = await getDoc(articleDocRef);

          if (docSnapshot.exists()) {
            await updateDoc(articleDocRef, { likeCount: newLikeCount });
          } else {
            await setDoc(articleDocRef, { likeCount: newLikeCount });
          }
        } catch (error) {
          // console.error("Error updating like count:", error);
        }
      };

      setLikeCount((prevLikeCount) => {
        const newLikeCount = prevLikeCount + 1;
        updateLikeCount(newLikeCount);
        return newLikeCount;
      });
    }
  };

  const handleButtonClick = (e) => {
    const clickedElement = e.target || e.currentTarget;

    if (
      clickedElement.closest(".close-img2") ||
      clickedElement.classList.contains("close-img2")
    ) {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.closest(".modal-content")) {
      return;
    }

    onClose();
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? modalData.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === modalData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    console.log("userData structure:", userData);
  }, [userData]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-container">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-imgBox">
              <figure id="imageFigure" images={images}>
                {modalData.images && modalData.images.length > 0 && (
                  <>
                    <div className="image-indicators">
                      {modalData.images.map((_, index) => (
                        <div
                          key={index}
                          className={`image-indicator ${
                            currentIndex === index ? "active" : ""
                          }`}
                        ></div>
                      ))}
                    </div>
                    {modalData.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`선택된 이미지 ${index + 1}`}
                        style={{
                          display: currentIndex === index ? "block" : "none",
                        }}
                      />
                    ))}
                  </>
                )}
                {showChevron && (
                  <>
                    <div
                      className="modal-chevron modal-chevron-left"
                      onClick={handlePrevClick}
                    >
                      <img src={chevronLeftIcon} alt="left-chevron" />
                    </div>
                    <div
                      className="modal-chevron modal-chevron-right"
                      onClick={handleNextClick}
                    >
                      <img src={chevronRightIcon} alt="right-chevron" />
                    </div>
                  </>
                )}
              </figure>
            </div>
            <div className="modal-contentBox">
              <img
                className="close-img2"
                src={iconClose}
                alt="close-icon"
                onClick={handleButtonClick}
              />
              <div className="modal-content-titles">
                <div className="modaldata-titles">
                  <span className="modaldata-profile">
                    {modalData && modalData.userData.profileImageURL ? (
                      <img
                        src={modalData.userData.profileImageURL}
                        alt="Profile"
                        className="profiles"
                      />
                    ) : (
                      <PiUserCircleLight className="profiles" />
                    )}
                  </span>
                  {userData && (
                    <div className="modaldata-titles-user">
                      {userData?.memberNickName}
                    </div>
                  )}
                </div>
                <div className="modaldata-title-icons">
                  <img
                    className="modaldata-title-icons"
                    src={likeIcon}
                    alt="likeIcon"
                    onClick={handleLikeClick}
                  />
                  <span>{likeCount}</span>
                  <img
                    className="modaldata-title-icons"
                    src={replyIcon}
                    alt="replyIcon"
                  />
                </div>
              </div>
              <div className="modal-content-desc">
                <div className="modal-content-desc-title">
                  {modalData.title}
                  <span className="title-uploadtime">{uploadTime}</span>
                </div>
                <div className="modal-content-desc-content">
                  {modalData.content}
                </div>
              </div>
              <Comments
                modalData={modalData}
                currentUser={userData}
                uploadTime={uploadTime}
                onCommentSubmit={(newComment) => {
                  const updatedComments = [...comments, newComment];
                  setComments(updatedComments);
                }}
              />
              <div className="comment-input-container">
                <CommentButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
